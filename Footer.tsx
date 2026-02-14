
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, MapPin } from 'lucide-react';
import { Translate } from './Translate';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-green text-brand-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="md:col-span-1">
          <h3 className="font-serif text-2xl mb-4">Third Space</h3>
          <p className="text-brand-sand/80 mb-6 leading-relaxed">
            <Translate>Not home. Not work. A place to belong.</Translate>
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-terra transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-brand-terra transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-brand-terra transition-colors"><Mail size={20} /></a>
          </div>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="font-bold uppercase tracking-widest mb-6 text-sm text-brand-terra">
            <Translate>Explore</Translate>
          </h4>
          <ul className="space-y-3 text-brand-sand/80">
            <li><Link to="/story" className="hover:text-white transition-colors"><Translate>Our Story</Translate></Link></li>
            <li><Link to="/coffee" className="hover:text-white transition-colors"><Translate>The Menu</Translate></Link></li>
            <li><Link to="/community" className="hover:text-white transition-colors"><Translate>Events</Translate></Link></li>
            <li><Link to="/visit" className="hover:text-white transition-colors"><Translate>Contact</Translate></Link></li>
            <li><Link to="/supporters" className="hover:text-white transition-colors"><Translate>Founding Supporters</Translate></Link></li>
          </ul>
        </div>

        {/* Visit Column */}
        <div>
          <h4 className="font-bold uppercase tracking-widest mb-6 text-sm text-brand-terra">
            <Translate>Visit</Translate>
          </h4>
          <ul className="space-y-3 text-brand-sand/80">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="mt-1 shrink-0" />
              <span>123 Community Ave,<br />Neighbourhood, ST 90210</span>
            </li>
            <li className="pt-2">
              <span className="block text-white font-semibold"><Translate>Open Daily</Translate></span>
              7:00 AM – 8:00 PM
            </li>
          </ul>
        </div>

        {/* Vision Supporters Column */}
        <div>
          <h4 className="font-bold uppercase tracking-widest mb-6 text-sm text-brand-terra">
            <Translate>Vision Supporters</Translate>
          </h4>
          <p className="text-brand-sand/80 mb-6 leading-relaxed">
            <Translate>Help us anchor this space in our city. We invite you to partner with us—whether through a founding gift or by sharing your time as a volunteer in the café. Together, we can create a place where everyone is seen and welcomed.</Translate>
          </p>
          <div className="border-t border-brand-sand/20 pt-4 mt-4">
             <Link 
               to="/visit#support" 
               className="text-sm font-bold text-brand-terra hover:text-white transition-colors underline underline-offset-4"
             >
               <Translate>How to help</Translate> →
             </Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-brand-sand/10 text-center text-sm text-brand-sand/40">
        &copy; {new Date().getFullYear()} Third Space Café. <Translate>All rights reserved.</Translate>
      </div>
    </footer>
  );
};
