export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Pacifico, serif' }}>
              ShopEase
            </h3>
            <p className="text-gray-400">
              Your trusted online shopping destination for quality products at affordable prices.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/kartikeya-kesarwani-7a5b03293/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <i className="ri-linkedin-fill w-6 h-6 flex items-center justify-center text-xl"></i>
              </a>
              <a href="https://www.threads.com/@kartikkes02" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <i className="ri-threads-fill w-6 h-6 flex items-center justify-center text-xl"></i>
              </a>
              <a href="https://x.com/KARTIKEYAKES08" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <i className="ri-twitter-fill w-6 h-6 flex items-center justify-center text-xl"></i>
              </a>
              <a href="https://www.instagram.com/kartikkes02/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <i className="ri-instagram-fill w-6 h-6 flex items-center justify-center text-xl"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ShopEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}