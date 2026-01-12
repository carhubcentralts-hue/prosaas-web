import content from '../../content/site.he.json';

export default function WhatIs() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {content.whatIs.title}
        </h2>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          {content.whatIs.description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
          {content.whatIs.highlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
