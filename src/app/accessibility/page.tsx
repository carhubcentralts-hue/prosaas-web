import Link from 'next/link';
import content from '../../../content/site.he.json';

export const metadata = {
  title: `${content.accessibility.title} - ${content.site.name}`,
  description: 'הצהרת נגישות לאתר ProSaaS - מחויבות לנגישות דיגיטלית לפי תקן ישראלי 5568',
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            aria-label="חזרה לדף הבית"
          >
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            חזרה לדף הבית
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <article>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {content.accessibility.title}
          </h1>
          <p className="text-gray-600 mb-8">
            {content.accessibility.lastUpdated}
          </p>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              {content.accessibility.intro}
            </p>
          </div>

          {content.accessibility.sections.map((section, index) => (
            <section key={index} className="bg-white rounded-lg shadow-sm p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {section.heading}
              </h2>
              
              {section.items && (
                <ul className="space-y-3" role="list">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <svg 
                        className="w-6 h-6 text-green-500 ml-2 mt-0.5 flex-shrink-0" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              {section.content && (
                <p className="text-gray-700 leading-relaxed mb-4">
                  {section.content}
                </p>
              )}
              
              {section.contactInfo && (
                <ul className="space-y-2 mt-4" role="list">
                  {section.contactInfo.map((info, infoIndex) => (
                    <li key={infoIndex} className="text-gray-700">
                      {info}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <div className="bg-blue-50 border-r-4 border-blue-500 p-6 rounded">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              נשמח לשמוע ממכם
            </h2>
            <p className="text-gray-700 mb-4">
              אם נתקלתם בבעיית נגישות באתר או שיש לכם הצעות לשיפור, אנא צרו איתנו קשר ונטפל בכך בהקדם האפשרי.
            </p>
            <Link 
              href="/#contact" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              צור קשר
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            {content.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}
