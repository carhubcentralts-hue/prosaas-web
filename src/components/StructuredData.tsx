interface WebSiteSchemaProps {
  type: 'website'
}
interface OrganizationSchemaProps {
  type: 'organization'
}
interface SoftwareSchemaProps {
  type: 'software'
}
interface LocalBusinessSchemaProps {
  type: 'localbusiness'
}
interface FAQSchemaProps {
  type: 'faq'
  items: Array<{ question: string; answer: string }>
}
interface ArticleSchemaProps {
  type: 'article'
  headline: string
  description: string
  datePublished: string
  url: string
}

type StructuredDataProps = WebSiteSchemaProps | OrganizationSchemaProps | SoftwareSchemaProps | LocalBusinessSchemaProps | FAQSchemaProps | ArticleSchemaProps

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.prosaas.website'

function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'פרו סאס',
    alternateName: ['ProSaaS', 'פרוסאס', 'פרו-סאס'],
    url: siteUrl,
  }
}

function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ProSaaS',
    alternateName: ['פרוסאס', 'פרו סאס', 'PROSAAS', 'PRO SAAS'],
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    description: 'ProSaaS (פרוסאס) – AI-powered CRM, WhatsApp automation, and voice bot platform for businesses. Manage leads, calls, and customer communications automatically.',
    email: 'support@prosaas.pro',
    telephone: '+972549750505',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IL',
    },
    sameAs: [
      'https://wa.me/972557270844',
      'https://www.facebook.com/profile.php?id=61574820643163',
      'https://www.instagram.com/prosaas.ai/',
      'https://www.linkedin.com/company/prosaas-%D7%A4%D7%A8%D7%95%D7%A1%D7%90%D7%A1',
      'https://x.com/ProSaaS',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'support@prosaas.pro',
      telephone: '+972549750505',
      availableLanguage: ['Hebrew', 'English'],
    },
  }
}

function getSoftwareSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ProSaaS',
    alternateName: ['פרוסאס', 'פרו סאס', 'PROSAAS', 'PRO SAAS'],
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: siteUrl,
    description: 'ProSaaS (פרוסאס) – מערכת CRM מבוססת AI עם אוטומציית WhatsApp ובוט שיחות לעסקים. ניהול לידים ותקשורת עם לקוחות אוטומטית 24/7. AI-powered CRM with WhatsApp automation and voice bot for businesses.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'ILS',
      lowPrice: '600',
      highPrice: '1500',
      offerCount: '3',
    },
    featureList: [
      'AI Voice Bot',
      'WhatsApp Automation',
      'CRM System',
      'Lead Management',
      'Automated Call Handling',
      '24/7 Availability',
    ],
    inLanguage: ['he', 'en'],
    provider: {
      '@type': 'Organization',
      name: 'ProSaaS',
      url: siteUrl,
    },
  }
}

function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ProSaaS - פרוסאס',
    alternateName: ['פרוסאס', 'פרו סאס', 'PROSAAS', 'PRO SAAS'],
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    image: `${siteUrl}/opengraph-image.png`,
    description: 'ProSaaS – פרוסאס | פלטפורמת CRM, WhatsApp ובוט שיחות מבוססת AI לעסקים. מוקד שיחות חכם, ניהול לידים, תיעוד שיחות ומענה אוטומטי 24/7.',
    telephone: '+972549750505',
    email: 'support@prosaas.pro',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IL',
    },
    sameAs: [
      'https://www.facebook.com/profile.php?id=61574820643163',
      'https://www.instagram.com/prosaas.ai/',
      'https://www.linkedin.com/company/prosaas/',
      'https://x.com/ProSaaS',
    ],
    priceRange: '₪₪',
  }
}

function getFAQSchema(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

function getArticleSchema(props: ArticleSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: props.headline,
    description: props.description,
    datePublished: props.datePublished,
    url: props.url,
    author: {
      '@type': 'Organization',
      name: 'ProSaaS',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ProSaaS',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.svg`,
      },
    },
  }
}

export default function StructuredData(props: StructuredDataProps) {
  let schema
  if (props.type === 'website') {
    schema = getWebSiteSchema()
  } else if (props.type === 'organization') {
    schema = getOrganizationSchema()
  } else if (props.type === 'software') {
    schema = getSoftwareSchema()
  } else if (props.type === 'localbusiness') {
    schema = getLocalBusinessSchema()
  } else if (props.type === 'faq') {
    schema = getFAQSchema(props.items)
  } else {
    schema = getArticleSchema(props)
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
