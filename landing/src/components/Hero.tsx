import content from '../../content/site.he.json';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 pt-16 px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
        <div className="absolute top-40 left-40 w-60 h-60 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          {content.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-pink-600 font-semibold mb-4">
          {content.hero.subtitle}
        </p>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          {content.hero.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition transform hover:scale-105"
          >
            {content.hero.cta}
          </a>
          <a 
            href="#voice-demo" 
            className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-pink-500 hover:text-pink-500 transition"
          >
            {content.hero.ctaSecondary}
          </a>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">+500</div>
            <div className="text-sm text-gray-500">עסקים</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">24/7</div>
            <div className="text-sm text-gray-500">זמינות</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">99%</div>
            <div className="text-sm text-gray-500">שביעות רצון</div>
          </div>
        </div>
      </div>
    </section>
  );
}
