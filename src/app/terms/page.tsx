import Link from 'next/link';
import content from '../../../content/site.he.json';

export default function TermsPage() {
  const { title, lastUpdated, sections } = content.legal.terms;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition"
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
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-gray-500 mb-8">
            {lastUpdated}
          </p>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {section.heading}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              יש לך שאלות? צור קשר איתנו ב-{' '}
              <a 
                href={`mailto:${content.contact.email.address}`}
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                {content.contact.email.address}
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            {content.footer.copyright}
          </p>
          <div className="flex justify-center gap-6 mt-4">
            {content.footer.links.map((link, index) => (
              <Link 
                key={index}
                href={link.url}
                className="text-gray-400 hover:text-white transition"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
