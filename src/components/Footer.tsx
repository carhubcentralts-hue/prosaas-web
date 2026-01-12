import content from '../../content/site.he.json';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              {content.site.name}
            </span>
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
