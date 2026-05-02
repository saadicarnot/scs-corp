import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Menu,
  X,
  Facebook,
  Linkedin,
  Instagram,
  ChevronDown } from
'lucide-react';
import { Button } from '../ui/Button';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      setIsScrollingUp(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  const navLinks = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Services',
    path: '/services',
    dropdown: [
    {
      name: 'Cleaning',
      path: '/services/cleaning'
    },
    {
      name: 'Building Maintenance',
      path: '/services/maintenance'
    },
    {
      name: 'Traffic Control',
      path: '/services/traffic-control'
    },
    {
      name: 'Lawn Care',
      path: '/services/lawn-care'
    }]

  },
  {
    name: 'Projects',
    path: '/projects'
  },
  {
    name: 'Contact',
    path: '/contact'
  }];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Utility Bar */}
      <motion.div
        className="bg-primary text-white text-xs md:text-sm py-2 px-4 md:px-8 flex justify-between items-center"
        initial={{
          height: 'auto',
          opacity: 1
        }}
        animate={{
          height: isScrollingUp ? 'auto' : 0,
          opacity: isScrollingUp ? 1 : 0,
          overflow: 'hidden'
        }}
        transition={{
          duration: 0.3
        }}>
        
        <div className="flex items-center space-x-4">
          <span className="text-gray-300">Sunday – Friday, 9 am – 5 pm</span>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors">
            
            <Facebook size={16} />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors">
            
            <Linkedin size={16} />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors">
            
            <Instagram size={16} />
          </a>
        </div>
      </motion.div>

      {/* Main Header */}
      <div
        className={`transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white py-4 md:py-5'} px-4 md:px-8`}>
        
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex-shrink-0">
            <img
              src="/3-e1777448661594.webp"
              alt="SCS Corp Logo"
              className="h-10 md:h-12 w-auto object-contain" />
            
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) =>
            <div key={link.name} className="relative group">
                <Link
                to={link.path}
                className="text-primary font-medium hover:text-accent transition-colors flex items-center gap-1">
                
                  {link.name}
                  {link.dropdown &&
                <ChevronDown
                  size={14}
                  className="group-hover:rotate-180 transition-transform duration-200" />

                }
                </Link>

                {link.dropdown &&
              <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                    <div className="bg-white shadow-lg rounded-md border border-border py-2 w-56 flex flex-col">
                      {link.dropdown.map((dropLink) =>
                  <Link
                    key={dropLink.name}
                    to={dropLink.path}
                    className="px-4 py-2 text-sm text-muted hover:text-accent hover:bg-surface transition-colors">
                    
                          {dropLink.name}
                        </Link>
                  )}
                    </div>
                  </div>
              }
              </div>
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:1300223229"
              className="flex items-center text-primary font-semibold hover:text-accent transition-colors">
              
              <Phone size={18} className="mr-2 text-accent" />
              1300 223 229
            </a>
            <Button href="/contact" variant="primary">
              Book a Service
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center space-x-4">
            <a href="tel:1300223229" className="text-primary p-2">
              <Phone size={20} />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary p-2 focus:outline-none">
              
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            y: -20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -20
          }}
          transition={{
            duration: 0.3
          }}
          className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-border lg:hidden flex flex-col max-h-[calc(100vh-80px)] overflow-y-auto">
          
            <div className="flex flex-col p-6 space-y-6">
              {navLinks.map((link, i) =>
            <motion.div
              key={link.name}
              initial={{
                opacity: 0,
                x: -20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                delay: i * 0.05 + 0.1
              }}
              className="flex flex-col space-y-3">
              
                  <Link
                to={link.path}
                className="text-xl font-semibold text-primary">
                
                    {link.name}
                  </Link>
                  {link.dropdown &&
              <div className="flex flex-col pl-4 border-l-2 border-border space-y-3">
                      {link.dropdown.map((dropLink) =>
                <Link
                  key={dropLink.name}
                  to={dropLink.path}
                  className="text-muted hover:text-accent">
                  
                          {dropLink.name}
                        </Link>
                )}
                    </div>
              }
                </motion.div>
            )}
              <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.4
              }}
              className="pt-6 border-t border-border flex flex-col space-y-4">
              
                <Button href="/contact" variant="primary" className="w-full">
                  Book a Service
                </Button>
              </motion.div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}