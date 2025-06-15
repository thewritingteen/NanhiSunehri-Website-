
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // Gem removed
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const navLinks = [
  { href: '/#investment', label: 'Nanhi Tijori' },
  { href: '/#milestones', label: 'Sunheri Virasaat' },
  { href: '/jewelry-advisor', label: 'Jewelry Advisor' },
  { href: '/digital-journal', label: 'Digital Journal' },
  { href: '/legacy-letters', label: 'Legacy Letters' },
  { href: '/gift-registry', label: 'Gift Registry' },
  { href: '/#pricing', label: 'Pricing' },
];

export default function AppNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-2xl md:text-3xl text-primary font-tan-meringue flex items-center">
          <span className="w-7 h-7 mr-2 inline-block align-middle">
  <img
    src="https://i.ibb.co/8jNrYXn/image.png" // replace with the actual image URL
    alt="icon"
    className="w-full h-full object-contain"
  />
</span>
          Nanhi Sunheri
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-foreground hover:text-primary transition-colors duration-300">
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="ghost" asChild>
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-6">
              <div className="flex flex-col space-y-6">
                <div className="flex justify-between items-center">
                 <Link href="/" className="text-2xl text-primary font-tan-meringue flex items-center">
                    <span className="w-6 h-6 mr-2 inline-block align-middle">{/* Your Logo SVG/Image Here */}</span>
                    Nanhi Sunheri
                  </Link>
                  <SheetClose asChild>
                     <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                     </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                     <SheetClose key={link.href} asChild>
                        <Link href={link.href} className="text-lg text-foreground hover:text-primary transition-colors duration-300 py-2 border-b border-border last:border-b-0">
                        {link.label}
                        </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="flex flex-col space-y-3 pt-6 border-t border-border">
                  <SheetClose asChild>
                    <Button variant="outline" className="w-full" asChild>
                        <Link href="/login">Log In</Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button className="w-full" asChild>
                        <Link href="/signup">Sign Up</Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
