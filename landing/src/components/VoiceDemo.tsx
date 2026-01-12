'use client';

import { useState, useRef, useEffect } from 'react';
import content from '../../content/site.he.json';

export default function VoiceDemo() {
  const defaultVoice = content.voiceDemo.voices.find(v => v.default) || content.voiceDemo.voices[0];
  const [selectedVoice, setSelectedVoice] = useState(defaultVoice.id);
  const [text, setText] = useState(content.voiceDemo.defaultText);
  const [status, setStatus] = useState<'idle' | 'playing' | 'preparing' | 'saved'>('idle');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = async () => {
    const audioPath = `/voices/${selectedVoice}.mp3`;
    
    // Check if audio file exists
    try {
      const response = await fetch(audioPath, { method: 'HEAD' });
      if (!response.ok) {
        setStatus('preparing');
        setTimeout(() => setStatus('idle'), 2000);
        return;
      }
      
      if (audioRef.current) {
        audioRef.current.pause();
      }
      
      const audio = new Audio(audioPath);
      audioRef.current = audio;
      
      audio.onplay = () => setStatus('playing');
      audio.onended = () => setStatus('idle');
      audio.onerror = () => {
        setStatus('preparing');
        setTimeout(() => setStatus('idle'), 2000);
      };
      
      audio.play();
    } catch {
      setStatus('preparing');
      setTimeout(() => setStatus('idle'), 2000);
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
              <select
                value={selectedVoice}
                onChange={(e) => setSelectedVoice(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent appearance-none cursor-pointer"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3E%3Cpath stroke=\'%239ca3af\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'m6 8 4 4 4-4\'/%3E%3C/svg%3E")', backgroundPosition: 'left 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em', paddingLeft: '2.5rem' }}
              >
                {content.voiceDemo.voices.map((voice) => (
                  <option key={voice.id} value={voice.id}>
                    {voice.name} ({voice.description})
                  </option>
                ))}
              </select>
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
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                placeholder={content.voiceDemo.defaultText}
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handlePlay}
                disabled={status === 'playing'}
                className="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-pink-700 transition disabled:opacity-50 disabled:cursor-not-allowed text-lg"
              >
                {status === 'playing' ? content.voiceDemo.playing : content.voiceDemo.playButton}
              </button>
              <button
                onClick={handleSave}
                className="flex-1 sm:flex-initial bg-gray-700 text-white px-6 py-4 rounded-lg font-semibold hover:bg-gray-600 transition"
              >
                {content.voiceDemo.saveButton}
              </button>
            </div>

            {/* Status Messages */}
            {status === 'preparing' && (
              <div className="text-center text-amber-400 text-sm animate-pulse">
                {content.voiceDemo.preparing}
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
