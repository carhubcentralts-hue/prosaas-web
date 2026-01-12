import content from '../../content/site.he.json';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-16 px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
        <div className="absolute top-40 left-40 w-60 h-60 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          {content.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-4">
          {content.hero.subtitle}
        </p>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          {content.hero.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition transform hover:scale-105"
            aria-label="מעבר לטופס יצירת קשר"
          >
            {content.hero.cta}
          </a>
          <a 
            href="#voice-demo" 
            className="border-2 border-blue-500 text-blue-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition"
            aria-label="מעבר לסעיף הדגמת קול"
          >
            {content.hero.ctaSecondary}
          </a>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {content.hero.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
