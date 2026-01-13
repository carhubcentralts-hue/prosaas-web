'use client';

import { useState, useRef, useEffect } from 'react';
import content from '../../content/site.he.json';
import { ASSET_VERSION } from '../lib/assets';

// Explicit mapping of call IDs to MP3 files - NO dynamic construction
const CALL_FILES: Record<string, string> = {
  'call-1': '/calls/call-1.mp3',
  'call-2': '/calls/call-2.mp3',
  'call-3': '/calls/call-3.mp3',
  'call-4': '/calls/call-4.mp3',
};

interface CallStatus {
  [key: string]: 'idle' | 'playing' | 'loading' | 'error' | 'not_available';
}

export default function CallDemos() {
  const [status, setStatus] = useState<CallStatus>({});
  const [errorMessages, setErrorMessages] = useState<{ [key: string]: string }>({});
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentPlayingId, setCurrentPlayingId] = useState<string | null>(null);

  const calls = content.callDemos.calls;

  const handlePlay = async (callId: string) => {
    // Stop any currently playing audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.src = '';
      audioRef.current = null;
      if (currentPlayingId) {
        setStatus(prev => ({ ...prev, [currentPlayingId]: 'idle' }));
      }
    }

    setStatus(prev => ({ ...prev, [callId]: 'loading' }));
    setErrorMessages(prev => ({ ...prev, [callId]: '' }));
    setCurrentPlayingId(callId);

    // Get the mapped file path
    const src = CALL_FILES[callId];

    // Check if file mapping exists
    if (!src) {
      setStatus(prev => ({ ...prev, [callId]: 'not_available' }));
      setErrorMessages(prev => ({ ...prev, [callId]: content.callDemos.notAvailable }));
      setTimeout(() => {
        setStatus(prev => ({ ...prev, [callId]: 'idle' }));
        setErrorMessages(prev => ({ ...prev, [callId]: '' }));
      }, 3000);
      return;
    }

    try {
      // Load static audio file from explicit mapping with cache busting
      const audioUrl = `${src}?${ASSET_VERSION}`;
      const audio = new Audio(audioUrl);
      audioRef.current = audio;

      // Reset audio settings to ensure playback
      audio.muted = false;
      audio.volume = 1.0;

      audio.onplay = () => setStatus(prev => ({ ...prev, [callId]: 'playing' }));
      audio.onended = () => {
        setStatus(prev => ({ ...prev, [callId]: 'idle' }));
        setCurrentPlayingId(null);
      };

      // Handle file not found error
      audio.onerror = () => {
        setStatus(prev => ({ ...prev, [callId]: 'not_available' }));
        setErrorMessages(prev => ({ ...prev, [callId]: content.callDemos.notAvailable }));
        setTimeout(() => {
          setStatus(prev => ({ ...prev, [callId]: 'idle' }));
          setErrorMessages(prev => ({ ...prev, [callId]: '' }));
        }, 3000);
      };

      // Load and play the audio
      audio.load();
      await audio.play();
    } catch (error) {
      // Handle browser autoplay blocking
      setStatus(prev => ({ ...prev, [callId]: 'error' }));

      if (error instanceof Error && error.name === 'NotAllowedError') {
        setErrorMessages(prev => ({ ...prev, [callId]: content.callDemos.browserBlocked }));
      } else {
        setErrorMessages(prev => ({ ...prev, [callId]: content.callDemos.browserBlocked }));
      }

      setTimeout(() => {
        setStatus(prev => ({ ...prev, [callId]: 'idle' }));
        setErrorMessages(prev => ({ ...prev, [callId]: '' }));
      }, 3000);
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.src = '';
      audioRef.current = null;
    }
    if (currentPlayingId) {
      setStatus(prev => ({ ...prev, [currentPlayingId]: 'idle' }));
      setCurrentPlayingId(null);
    }
  };

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <section id="call-demos" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content.callDemos.title}
          </h2>
          <p className="text-lg text-gray-600">
            {content.callDemos.subtitle}
          </p>
        </div>

        {/* Empty State */}
        {calls.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">{content.callDemos.emptyState}</p>
          </div>
        )}

        {/* Calls Grid */}
        {calls.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {calls.map((call) => {
              const callStatus = status[call.id] || 'idle';
              const errorMessage = errorMessages[call.id] || '';
              const isPlaying = callStatus === 'playing';
              const isLoading = callStatus === 'loading';
              const hasError = callStatus === 'error' || callStatus === 'not_available';

              return (
                <div
                  key={call.id}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100"
                >
                  {/* Call Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{call.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{call.description}</p>
                  </div>

                  {/* Tags */}
                  {call.tags && call.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {call.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
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
                        onClick={() => handlePlay(call.id)}
                        disabled={isLoading || hasError}
                        className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading
                          ? 'טוען...'
                          : hasError
                          ? content.callDemos.notAvailable
                          : content.callDemos.playButton}
                      </button>
                    ) : (
                      <button
                        onClick={handleStop}
                        className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition"
                      >
                        {content.callDemos.stopButton}
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
                    <div className="mt-3 text-center text-blue-600 text-sm font-medium">
                      {content.callDemos.playing}
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
