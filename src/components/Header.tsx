import  { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { WaitlistButton } from './WaitlistButton';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-blue-600 font-bold text-2xl">
            <span className="text-blue-800">Paw</span>Track
          </span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">
            How It Works
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
            Pricing
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
            Login
          </a>
                    <WaitlistButton />
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Features
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              How It Works
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Login
            </a>
                        <WaitlistButton />
          </div>
        </div>}
    </header>;
}