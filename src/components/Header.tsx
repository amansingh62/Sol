'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import Link from "next/link"
import Image from "next/image"
import Button from "./Button"
import { TbBrandTelegram, TbBrandTwitter, TbMenu2, TbX, TbHome, TbBook, TbCoin, TbUsers } from 'react-icons/tb';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Throttled scroll handler to prevent excessive re-renders
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 10;
          setScrolled(prev => prev !== isScrolled ? isScrolled : prev);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  // Memoize navigation items to prevent recreation on every render
  const navItems = useMemo(() => [
    { icon: TbHome, text: "Home", href: "#" },
    { icon: TbCoin, text: "Buy $ECHO", href: "#" },
  { icon: TbBook, text: "Docs", href: "https://solecho.gitbook.io/documents", target: "_blank", rel: "noopener noreferrer" },
    { icon: TbUsers, text: "Community", href: "#" }
  ], []);

  // Memoize social links to prevent recreation
  const socialLinks = useMemo(() => [
    { icon: TbBrandTelegram, href: "https://t.me/SolEcho" },
    { icon: TbBrandTwitter, href: "https://x.com/SolEcho_io" }
  ], []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Optimized announcement banner */}
      <div className="w-full bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] py-1.5 text-sm text-center font-medium relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        <span className="inline-block">
          The Future of Social Media is Decentralized,{" "}
          <Link href="https://app.solecho.io/" target="_blank"  className="underline font-semibold hover:opacity-80 transition-opacity">
            Start echoing today!
          </Link>
        </span>
      </div>

      {/* Navigation with optimized transitions */}
      <header className={`transition-all duration-200 ${scrolled ? 'bg-black/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="container px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <Image 
                src="/image (1).png" 
                alt="Solana Logo" 
                width={40}
                height={40}
                className="rounded-md relative z-10 group-hover:scale-105 transition-transform duration-200"
                priority
              />
            </div>
            <span className="text-2xl font-semibold ml-2">
              Sol<span className='bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] text-transparent bg-clip-text'>Echo</span>
            </span>

            <nav className="hidden md:flex ml-10 items-center gap-6">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="group flex items-center gap-2 font-medium text-sm px-3 py-2 rounded-xl hover:bg-white/5 transition-colors duration-200"
                >
                  <item.icon className="w-4 h-4 text-[#B671FF] group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-white/90 group-hover:text-white transition-colors duration-200">{item.text}</span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <Link key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="group">
                  <div className="p-2 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-[#B671FF] hover:via-[#C577EE] hover:to-[#E282CA] transition-all duration-200">
                    <social.icon className="text-xl text-white group-hover:text-black transition-colors duration-200" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="hidden md:block">
              <Link href="https://app.solecho.io/" target="_blank" >
                <Button />
              </Link>
            </div>

            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <TbX className="text-xl text-white" />
              ) : (
                <TbMenu2 className="text-xl text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Optimized mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm shadow-lg z-50 py-4 px-6 animate-slideDown border-t border-white/10">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group flex items-center gap-3 font-medium text-sm px-4 py-3 rounded-xl hover:bg-white/5 transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                <item.icon className="w-5 h-5 text-[#B671FF] group-hover:scale-110 transition-transform duration-200" />
                <span className="text-white/90 group-hover:text-white transition-colors duration-200">{item.text}</span>
              </Link>
            ))}
            <div className="flex items-center gap-3 py-2">
              {socialLinks.map((social, index) => (
                <Link key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="group">
                  <div className="p-2 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-[#B671FF] hover:via-[#C577EE] hover:to-[#E282CA] transition-all duration-200">
                    <social.icon className="text-xl text-white group-hover:text-black transition-colors duration-200" />
                  </div>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        
        .animate-slideDown {
          animation: slideDown 0.15s ease-out forwards;
        }
        
        /* Hardware acceleration for smooth animations */
        .group:hover .group-hover\\:scale-105,
        .group:hover .group-hover\\:scale-110 {
          will-change: transform;
        }
        
        /* Optimize repaints */
        .transition-all,
        .transition-colors,
        .transition-transform,
        .transition-opacity {
          will-change: auto;
        }
      `}</style>
    </div>
  );
}