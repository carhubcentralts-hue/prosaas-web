'use client';

import { useState, useRef, useEffect } from 'react';
import content from '../../content/site.he.json';
import { ASSET_VERSION } from '../lib/assets';

// Explicit mapping of demo IDs to video files - NO dynamic construction
const DEMO_FILES: Record<string, string> = {
  // Videos will be added here as they are uploaded
  // Example: 'demo-1': '/whatsapp-demos/demo-1.mp4',
};

interface DemoStatus {
  [key: string]: 'idle' | 'playing' | 'loading' | 'error' | 'not_available';
}

export default function WhatsAppDemos() {
  const [status, setStatus] = useState<DemoStatus>({});
  const [errorMessages, setErrorMessages] = useState<{ [key: string]: string }>({});
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [currentPlayingId, setCurrentPlayingId] = useState<string | null>(null);

  const demos = content.whatsappDemos.demos;

  const handlePlay = async (demoId: string) => {
    // Stop any currently playing video
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.src = '';
      videoRef.current = null;
      if (currentPlayingId) {
        setStatus(prev => ({ ...prev, [currentPlayingId]: 'idle' }));
      }
    }

    setStatus(prev => ({ ...prev, [demoId]: 'loading' }));
    setErrorMessages(prev => ({ ...prev, [demoId]: '' }));
    setCurrentPlayingId(demoId);

    // Get the mapped file path
    const src = DEMO_FILES[demoId];

    // Check if file mapping exists
    if (!src) {
      setStatus(prev => ({ ...prev, [demoId]: 'not_available' }));
      setErrorMessages(prev => ({ ...prev, [demoId]: content.whatsappDemos.notAvailable }));
      setTimeout(() => {
        setStatus(prev => ({ ...prev, [demoId]: 'idle' }));
        setErrorMessages(prev => ({ ...prev, [demoId]: '' }));
      }, 3000);
      return;
    }

    try {
      // Load static video file from explicit mapping with cache busting
      const videoUrl = `${src}?${ASSET_VERSION}`;
      const video = document.createElement('video');
      video.src = videoUrl;
      video.controls = true;
      video.className = 'w-full rounded-lg';
      videoRef.current = video;

      // Reset video settings to ensure playback
      video.muted = false;
      video.volume = 1.0;

      video.onplay = () => setStatus(prev => ({ ...prev, [demoId]: 'playing' }));
      video.onended = () => {
        setStatus(prev => ({ ...prev, [demoId]: 'idle' }));
        setCurrentPlayingId(null);
      };

      // Handle file not found error
      video.onerror = () => {
        setStatus(prev => ({ ...prev, [demoId]: 'not_available' }));
        setErrorMessages(prev => ({ ...prev, [demoId]: content.whatsappDemos.notAvailable }));
        setTimeout(() => {
          setStatus(prev => ({ ...prev, [demoId]: 'idle' }));
          setErrorMessages(prev => ({ ...prev, [demoId]: '' }));
        }, 3000);
      };

      // Load and play the video
      video.load();
      await video.play();
    } catch (error) {
      // Handle browser autoplay blocking
      setStatus(prev => ({ ...prev, [demoId]: 'error' }));

      if (error instanceof Error && error.name === 'NotAllowedError') {
        setErrorMessages(prev => ({ ...prev, [demoId]: content.whatsappDemos.browserBlocked }));
      } else {
        setErrorMessages(prev => ({ ...prev, [demoId]: content.whatsappDemos.browserBlocked }));
      }

      setTimeout(() => {
        setStatus(prev => ({ ...prev, [demoId]: 'idle' }));
        setErrorMessages(prev => ({ ...prev, [demoId]: '' }));
      }, 3000);
    }
  };

  const handleStop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.src = '';
      videoRef.current = null;
    }
    if (currentPlayingId) {
      setStatus(prev => ({ ...prev, [currentPlayingId]: 'idle' }));
      setCurrentPlayingId(null);
    }
  };

  // Cleanup video on unmount
  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.src = '';
        videoRef.current = null;
      }
    };
  }, []);

  return (
    <section id="whatsapp-demos" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content.whatsappDemos.title}
          </h2>
          <p className="text-lg text-gray-600">
            {content.whatsappDemos.subtitle}
          </p>
        </div>

        {/* Empty State */}
        {demos.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-12 max-w-2xl mx-auto border border-green-200">
              <div className="text-6xl mb-4">💬</div>
              <p className="text-gray-700 text-lg mb-4">{content.whatsappDemos.emptyState}</p>
              <p className="text-gray-600 text-sm">
                בקרוב נעלה כאן הדגמות וידאו של שיחות WhatsApp עם הבוט החכם שלנו
              </p>
            </div>
          </div>
        )}

        {/* Demos Grid */}
        {demos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {demos.map((demo: any) => {
              const demoStatus = status[demo.id] || 'idle';
              const errorMessage = errorMessages[demo.id] || '';
              const isPlaying = demoStatus === 'playing';
              const isLoading = demoStatus === 'loading';
              const hasError = demoStatus === 'error' || demoStatus === 'not_available';

              return (
                <div
                  key={demo.id}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100"
                >
                  {/* Demo Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{demo.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{demo.description}</p>
                  </div>

                  {/* Tags */}
                  {demo.tags && demo.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {demo.tags.map((tag: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Play/Stop Button */}
                  <div className="flex gap-2">
                    {!isPlaying ? (
                      <button
                        onClick={() => handlePlay(demo.id)}
                        disabled={isLoading || hasError}
                        className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading
                          ? 'טוען...'
                          : hasError
                          ? content.whatsappDemos.notAvailable
                          : content.whatsappDemos.playButton}
                      </button>
                    ) : (
                      <button
                        onClick={handleStop}
                        className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition"
                      >
                        {content.whatsappDemos.stopButton}
                      </button>
                    )}
                  </div>

                  {/* Status Messages */}
                  {errorMessage && (
                    <div className="mt-3 text-center text-red-500 text-sm">
                      {errorMessage}
                    </div>
                  )}
                  {isPlaying && (
                    <div className="mt-3 text-center text-green-600 text-sm font-medium">
                      {content.whatsappDemos.playing}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
