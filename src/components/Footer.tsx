import content from '../../content/site.he.json';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <img src="/logo.svg" alt={content.site.name} className="h-10" />
          </div>
          
          <div className="flex items-center gap-6">
            {content.footer.links.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                className="text-gray-400 hover:text-white transition"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          {content.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
