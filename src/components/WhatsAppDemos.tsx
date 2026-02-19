'use client';

import { useState, useEffect } from 'react';
import content from '../../content/site.he.json';
import { ASSET_VERSION } from '../lib/assets';

interface VideoItem {
  id: string;
  title: string;
  url: string;
}

interface DemoStatus {
  [key: string]: 'idle' | 'playing' | 'error' | 'not_available';
}

export default function WhatsAppDemos() {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [status, setStatus] = useState<DemoStatus>({});
  const [errorMessages, setErrorMessages] = useState<{ [key: string]: string }>({});
  const [currentPlayingId, setCurrentPlayingId] = useState<string | null>(null);

  // Dynamically fetch available videos from the API
  useEffect(() => {
    fetch('/api/whatsapp-demos')
      .then(res => res.json())
      .then(data => setVideos(data.videos || []))
      .catch((err) => {
        console.error('Failed to load whatsapp demos:', err);
        setVideos([]);
      });
  }, []);

  const handlePlay = (videoId: string) => {
    if (currentPlayingId && currentPlayingId !== videoId) {
      setStatus(prev => ({ ...prev, [currentPlayingId]: 'idle' }));
    }
    setCurrentPlayingId(videoId);
    setStatus(prev => ({ ...prev, [videoId]: 'playing' }));
    setErrorMessages(prev => ({ ...prev, [videoId]: '' }));
  };

  const handleStop = (videoId: string) => {
    setStatus(prev => ({ ...prev, [videoId]: 'idle' }));
    setCurrentPlayingId(null);
  };

  const handleVideoError = (videoId: string) => {
    setStatus(prev => ({ ...prev, [videoId]: 'not_available' }));
    setErrorMessages(prev => ({ ...prev, [videoId]: content.whatsappDemos.notAvailable }));
    setCurrentPlayingId(null);
    setTimeout(() => {
      setStatus(prev => ({ ...prev, [videoId]: 'idle' }));
      setErrorMessages(prev => ({ ...prev, [videoId]: '' }));
    }, 3000);
  };

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
        {videos.length === 0 && (
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
        {videos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video) => {
              const demoStatus = status[video.id] || 'idle';
              const errorMessage = errorMessages[video.id] || '';
              const isPlaying = demoStatus === 'playing';
              const hasError = demoStatus === 'error' || demoStatus === 'not_available';
              const videoSrc = `${video.url}?${ASSET_VERSION}`;

              return (
                <div
                  key={video.id}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100"
                >
                  {/* Demo Header */}
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-relaxed tracking-tight">
                      {video.title}
                    </h3>
                  </div>

                  {/* Inline Video Player */}
                  {isPlaying && (
                    <div className="mb-4">
                      <video
                        key={videoSrc}
                        src={videoSrc}
                        controls
                        autoPlay
                        aria-label={video.title}
                        className="w-full rounded-lg"
                        onPlay={() => setStatus(prev => ({ ...prev, [video.id]: 'playing' }))}
                        onEnded={() => handleStop(video.id)}
                        onError={() => handleVideoError(video.id)}
                      />
                    </div>
                  )}

                  {/* Play/Stop Button */}
                  <div className="flex gap-2">
                    {!isPlaying ? (
                      <button
                        onClick={() => handlePlay(video.id)}
                        disabled={hasError}
                        className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {hasError ? content.whatsappDemos.notAvailable : content.whatsappDemos.playButton}
                      </button>
                    ) : (
                      <button
                        onClick={() => handleStop(video.id)}
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
