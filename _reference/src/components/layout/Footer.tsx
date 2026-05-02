import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin } from
'lucide-react';
import { Button } from '../ui/Button';
export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col space-y-6">
            <img
              src="/3-e1777448661594.webp"
              alt="SCS Corp Logo"
              className="h-12 w-auto object-contain brightness-0 invert" />
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Australia's trusted property services partner. Delivering reliable
              cleaning, maintenance, traffic management, and lawn care
              nationwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-accent shrink-0 mt-0.5" />
                <a
                  href="tel:1300223229"
                  className="hover:text-white transition-colors">
                  
                  1300 223 229
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-accent shrink-0 mt-0.5" />
                <a
                  href="mailto:info@scscorp.com.au"
                  className="hover:text-white transition-colors">
                  
                  info@scscorp.com.au
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                <span>
                  21 Alexandra Place,
                  <br />
                  Bentley WA 6102
                </span>
              </li>
              <li className="pt-2">
                <span className="block text-white font-medium mb-1">
                  Operating Hours:
                </span>
                Sunday to Friday, 9 am to 5 pm
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link
                  to="/services/cleaning"
                  className="hover:text-accent transition-colors">
                  
                  Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/services/maintenance"
                  className="hover:text-accent transition-colors">
                  
                  Building Maintenance
                </Link>
              </li>
              <li>
                <Link
                  to="/services/traffic-control"
                  className="hover:text-accent transition-colors">
                  
                  Traffic Control
                </Link>
              </li>
              <li>
                <Link
                  to="/services/lawn-care"
                  className="hover:text-accent transition-colors">
                  
                  Lawn Mowing & Garden Care
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  to="/projects"
                  className="hover:text-accent transition-colors">
                  
                  View All Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-sm text-gray-300">
              Subscribe to our newsletter for the latest updates and property
              care tips.
            </p>
            <form
              className="flex flex-col space-y-3"
              onSubmit={(e) => e.preventDefault()}>
              
              <input
                type="email"
                placeholder="Email address"
                className="bg-white/10 border border-white/20 rounded-md px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                required />
              
              <Button variant="primary" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-gray-400">
          <p>© 2026 SCS Corp Services Group. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>);

}