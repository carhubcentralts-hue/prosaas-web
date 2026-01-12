'use client';

import { useState, useRef, useEffect } from 'react';
import content from '../../content/site.he.json';

export default function VoiceDemo() {
  const defaultVoice = content.voiceDemo.voices.find(v => v.default) || content.voiceDemo.voices[0];
  const [selectedVoice, setSelectedVoice] = useState(defaultVoice.id);
  const [text, setText] = useState(content.voiceDemo.defaultText);
  const [status, setStatus] = useState<'idle' | 'playing' | 'loading' | 'saved' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = async () => {
    if (!text.trim()) {
      setErrorMessage('נא להזין טקסט');
      setStatus('error');
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 2000);
      return;
    }

    setStatus('loading');
    setErrorMessage('');
    
    try {
      // Stop current audio if playing
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }

      // Call TTS API
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          voice: selectedVoice,
          text: text,
          format: 'mp3',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'שגיאה בשרת' }));
        throw new Error(errorData.error || 'לא הצלחתי לנגן כרגע');
      }

      // Get audio blob
      const blob = await response.blob();
      const audioUrl = URL.createObjectURL(blob);
      
      // Create and play audio
      const audio = new Audio(audioUrl);
      audioRef.current = audio;
      
      audio.onplay = () => setStatus('playing');
      audio.onended = () => {
        setStatus('idle');
        URL.revokeObjectURL(audioUrl);
      };
      audio.onerror = () => {
        setStatus('error');
        setErrorMessage('לא הצלחתי לנגן כרגע');
        setTimeout(() => {
          setStatus('idle');
          setErrorMessage('');
        }, 3000);
        URL.revokeObjectURL(audioUrl);
      };
      
      await audio.play();
    } catch (error) {
      console.error('Error playing audio:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'לא הצלחתי לנגן כרגע');
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 3000);
    }
  };

  const handleSave = () => {
    // Simulate local save
    localStorage.setItem('prosaas-voice-settings', JSON.stringify({
      voice: selectedVoice,
      text: text
    }));
    setStatus('saved');
    setTimeout(() => setStatus('idle'), 2000);
  };

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <section id="voice-demo" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content.voiceDemo.title}
          </h2>
          <p className="text-lg text-gray-600">
            {content.voiceDemo.subtitle}
          </p>
        </div>

        {/* Voice Demo Card - mimics system UI */}
        <div className="bg-gray-900 rounded-2xl p-6 md:p-8 shadow-2xl">
          <div className="space-y-6">
            {/* Voice Select */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {content.voiceDemo.title}
              </label>
              <div className="relative">
                <select
                  value={selectedVoice}
                  onChange={(e) => setSelectedVoice(e.target.value)}
                  aria-label="בחירת קול לדוגמה"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
                >
                  {content.voiceDemo.voices.map((voice) => (
                    <option key={voice.id} value={voice.id}>
                      {voice.name} ({voice.description})
                    </option>
                  ))}
                </select>
                <svg 
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Text Area */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {content.voiceDemo.textLabel}
              </label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={4}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder={content.voiceDemo.defaultText}
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handlePlay}
                disabled={status === 'playing' || status === 'loading'}
                className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed text-lg"
              >
                {status === 'loading' ? 'טוען...' : status === 'playing' ? content.voiceDemo.playing : content.voiceDemo.playButton}
              </button>
              <button
                onClick={handleSave}
                className="flex-1 sm:flex-initial bg-white border-2 border-blue-500 text-blue-600 px-6 py-4 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                {content.voiceDemo.saveButton}
              </button>
            </div>

            {/* Status Messages */}
            {status === 'error' && errorMessage && (
              <div className="text-center text-red-400 text-sm">
                {errorMessage}
              </div>
            )}
            {status === 'saved' && (
              <div className="text-center text-green-400 text-sm">
                {content.voiceDemo.saved}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
