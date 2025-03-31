import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 dark:bg-gray-900/90 dark:border-gray-800 z-50">
      <nav className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <a href="/" className="text-xl font-semibold text-gray-900 dark:text-white hover:text-primary transition-colors">
            BSKim
          </a>
          <div className="flex items-center space-x-10">
            <a href="#about" className="text-base font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
              About
            </a>
            <a href="#portfolio" className="text-base font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
              Portfolio
            </a>
            <a href="#contact" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 