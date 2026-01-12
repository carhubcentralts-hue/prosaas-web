import content from '../../content/site.he.json';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content.pricing.title}
          </h2>
          <p className="text-lg text-gray-600">
            {content.pricing.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.pricing.plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl p-8 ${
                plan.popular 
                  ? 'border-2 border-blue-500 shadow-xl scale-105' 
                  : 'border border-gray-200 shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    {content.pricing.popular}
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              
              <div className="mb-6">
                {plan.price.match(/^\d/) ? (
                  <>
                    <span className="text-4xl font-bold text-gray-900">₪{plan.price}</span>
                    <span className="text-gray-500">/{content.pricing.monthly}</span>
                  </>
                ) : (
                  <span className="text-2xl font-bold text-gray-900">{plan.price}</span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact"
                className={`block w-full py-3 px-6 rounded-full text-center font-semibold transition ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
                aria-label={`השאירו פרטים לחבילת ${plan.name}`}
              >
                {content.pricing.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Pricing Note and Customization */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-gray-600 text-sm">
            {content.pricing.note}
          </p>
          <p className="text-gray-700 font-medium">
            {content.pricing.customization}
          </p>
        </div>
      </div>
    </section>
  );
}
