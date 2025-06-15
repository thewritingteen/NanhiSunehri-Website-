import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, CreditCard, Gem } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { Icon: Facebook, href: '#', label: 'Facebook' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Youtube, href: '#', label: 'YouTube' },
];

const quickLinks = [
  { href: '#', label: 'About Us' },
  { href: '/#investment', label: 'How It Works' },
  { href: '#', label: 'Testimonials' },
  { href: '#', label: 'Blog' },
  { href: '#', label: 'Careers' },
];

const supportLinks = [
  { href: '#', label: 'Help Center' },
  { href: '#', label: 'FAQs' },
  { href: '#', label: 'Contact Us' },
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms of Service' },
];

export default function AppFooter() {
  return (
    <footer className="bg-foreground text-background/80 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="text-3xl font-tan-meringue text-primary mb-4 block flex items-center">
              <Gem className="w-8 h-8 mr-2"/>
              Nanhi Sunheri
            </Link>
            <p className="text-background/70 mb-6 text-sm">Aapki nanhi jaan ke liye sunheri virasaat.</p>
            <div className="flex space-x-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <Link key={label} href={href} aria-label={label} className="w-10 h-10 rounded-full bg-background/10 text-background/70 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-background/90">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.label}><Link href={link.href} className="text-background/70 hover:text-primary transition-colors duration-300 text-sm">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-background/90">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map(link => (
                <li key={link.label}><Link href={link.href} className="text-background/70 hover:text-primary transition-colors duration-300 text-sm">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-background/90">Subscribe</h4>
            <p className="text-background/70 mb-4 text-sm">Stay updated with our latest news and offers.</p>
            <form className="mb-4">
              <div className="flex">
                <Input type="email" placeholder="Your email" className="bg-background/10 text-background placeholder-background/50 border-none rounded-r-none focus:ring-2 focus:ring-primary" />
                <Button type="submit" variant="primary" className="rounded-l-none whitespace-nowrap">Subscribe</Button>
              </div>
            </form>
            <div className="flex items-center space-x-2 text-background/70">
              <CreditCard size={20} />
              <span className="text-sm">Secure Payments</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Nanhi Sunheri. All rights reserved.</p>
          <div className="flex space-x-4">
            {/* Payment method icons can be added here if needed, using Lucide or custom SVGs */}
             <CreditCard size={24} className="text-background/60" />
             <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current text-background/60"><title>Mastercard</title><path d="M12 12.375c0-2.413 1.79-4.375 4-4.375s4 1.962 4 4.375-1.79 4.375-4 4.375S12 14.788 12 12.375zm0-7.125C7.582 5.25 4 8.437 4 12.375s3.582 7.125 8 7.125c1.73 0 3.353-.525 4.718-1.425a7.963 7.963 0 001.482-1.65V12.375c0-3.938-3.582-7.125-8-7.125zm-4.718 11.044A7.963 7.963 0 005.8 16.65C4.525 15.285 4 13.912 4 12.375c0-1.613.582-3.013 1.282-4.032a7.963 7.963 0 00-1.482 1.65v3.413c0 .987.262 1.887.718 2.637z"/></svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
