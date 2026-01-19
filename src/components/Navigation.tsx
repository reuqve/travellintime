import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Главная' },
  { path: '/history/ancient-rus', label: 'Древняя Русь' },
  { path: '/history/romanov', label: 'Московское Царство' },
  { path: '/history/empire', label: 'Имперская Россия' },
  { path: '/history/soviet', label: 'Советская Эпоха' },
  { path: '/student-works', label: 'Студенческие работы' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        setIsScrolled(true);
        setIsVisible(currentScrollY < lastScrollY);
      } else {
        setIsScrolled(false);
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#e8e4d9]/90 backdrop-blur-xl shadow-lg'
            : 'bg-transparent'
        } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="group relative font-['Forum'] text-xl sm:text-2xl tracking-wider text-[#242424] transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">ИСТОРИЯ РОССИИ</span>
              <span className="absolute inset-0 bg-[#d1c7b8] scale-0 group-hover:scale-100 transition-transform duration-300 origin-center -z-10 blur-xl opacity-50" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative font-['Forum'] text-sm tracking-wide transition-all duration-300 underline-draw ${
                    location.pathname === link.path
                      ? 'text-[#242424]'
                      : 'text-[#242424]/70 hover:text-[#242424]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#242424] hover:bg-[#d1c7b8]/30 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Bottom border animation */}
        <div
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-[#242424]/30 transition-all duration-700 ${
            isScrolled ? 'w-full' : 'w-0'
          }`}
        />
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-[#e8e4d9] shadow-2xl transform transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-24 px-8">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleNavClick}
                  className={`font-['Forum'] text-2xl tracking-wide transition-all duration-300 hover:pl-4 ${
                    location.pathname === link.path
                      ? 'text-[#242424]'
                      : 'text-[#242424]/50'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pb-8">
              <div className="h-px bg-[#242424]/20 mb-6" />
              <p className="text-sm text-[#242424]/60">
                Образовательный проект по истории России
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
