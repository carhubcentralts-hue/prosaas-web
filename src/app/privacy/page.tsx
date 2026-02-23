import type { Metadata } from 'next';
import SEOPageLayout from '../../components/SEOPageLayout';
import content from '../../../content/site.he.json';

export const metadata: Metadata = {
  title: 'מדיניות פרטיות | ProSaaS',
  description: 'מדיניות הפרטיות של ProSaaS. למדו אילו נתונים אנחנו אוספים וכיצד אנחנו משתמשים בהם.',
  alternates: {
    canonical: '/privacy',
    languages: { 'he': '/privacy', 'en': '/en/privacy' },
  },
};

export default function PrivacyPage() {
  const { title, lastUpdated, sections } = content.legal.privacy;

  return (
    <SEOPageLayout lang="he" alternateUrl="/en/privacy">
      <div className="max-w-4xl mx-auto px-4 py-12" dir="rtl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-gray-500 mb-8">
            {lastUpdated}
          </p>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="border-r-4 border-blue-500 pr-6">
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
      </div>
    </SEOPageLayout>
  );
}
