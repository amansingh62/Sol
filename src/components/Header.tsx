'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import Link from "next/link"
import Image from "next/image"
import Button from "./Button"
import { TbBrandTelegram, TbBrandTwitter, TbMenu2, TbX, TbHome, TbBook, TbCoin } from 'react-icons/tb';

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
    { icon: TbCoin, text: "Buy $DART", href: "https://pump.fun/coin/6st8YVjqDjeetAx9uySEXWcn9xj56dKirThNmUPNpump", target: "_blank", rel: "noopener noreferrer", isSpecial: true },
    { icon: TbBook, text: "Docs", href: "https://solecho.gitbook.io/documents", target: "_blank", rel: "noopener noreferrer" },
  ], []);

  // Memoize social links to prevent recreation
  const socialLinks = useMemo(() => [
    { icon: TbBrandTwitter, href: "https://x.com/DartSol_io" },
    { icon: TbBrandTelegram, href: "https://t.me/SolDart_io" }
  ], []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Optimized announcement banner */}
      <div className="w-full bg-black py-1.5 text-sm text-center font-medium relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent"></div>
        <span className="inline-block">
          The Future of Social Media is Decentralized,{" "}
          <Link href="https://app.soldart.io/" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:opacity-80 transition-opacity">
            Start darting today!
          </Link>
        </span>
      </div>

      {/* Navigation with optimized transitions */}
      <header className={`transition-all duration-200 ${scrolled ? 'bg-black/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="container px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-11 h-10 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#32CD32] via-[#7CFC00] to-[#90EE90] rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <a href="#" className="group">
                <Image
                  src="/soldart_1.png"
                  alt="Solana Logo"
                  width={50}
                  height={50}
                  className="rounded-md relative z-10 group-hover:scale-105 transition-transform duration-200"
                  priority
                  unoptimized
                />
              </a>
            </div>
            <a href="#" className="text-2xl font-semibold ml-1">
              Sol<span className='bg-gradient-to-r from-[#32CD32] via-[#7CFC00] to-[#90EE90] text-transparent bg-clip-text'>Dart</span>
            </a>

            <nav className="hidden md:flex ml-10 items-center gap-6">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target={item.target}
                  rel={item.rel}
                  className="group flex items-center gap-2 font-medium text-sm px-3 py-2 rounded-xl hover:bg-white/5 transition-colors duration-200"
                >
                  {item.isSpecial ? (
                    <span className="relative overflow-hidden shine-container flex items-center">
                      <item.icon className="w-4 h-4 ml-2 text-[#32CD32] group-hover:scale-110 transition-transform duration-200" />
                      <span className="bg-gradient-to-r from-[#32CD32] via-[#7CFC00] to-[#90EE90] text-transparent bg-clip-text font-semibold animate-shine-text">
                        {item.text}
                      </span>
                      <div className="absolute inset-0 animate-shine-overlay"></div>
                    </span>
                  ) : (
                    <>
                      <item.icon className="w-4 h-4 text-[#32CD32] group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-white/90 group-hover:text-white transition-colors duration-200">{item.text}</span>
                    </>
                  )}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <Link key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="group">
                  <div className="p-2 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-[#32CD32] hover:via-[#7CFC00] hover:to-[#90EE90] transition-all duration-200">
                    <social.icon className="text-xl text-white group-hover:text-black transition-colors duration-200" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="hidden md:block">
              <Link href="https://app.soldart.io/" target="_blank" rel="noopener noreferrer">
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
                target={item.target}
                rel={item.rel}
                className="group flex items-center gap-3 font-medium text-sm px-4 py-3 rounded-xl hover:bg-white/5 transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                <item.icon className="w-5 h-5 text-[#32CD32] group-hover:scale-110 transition-transform duration-200" />
                {item.isSpecial ? (
                  <span className="relative overflow-hidden shine-container">
                    <span className="bg-gradient-to-r from-[#32CD32] via-[#7CFC00] to-[#90EE90] text-transparent bg-clip-text font-semibold animate-shine-text">
                      {item.text}
                    </span>
                    <div className="absolute inset-0 animate-shine-overlay"></div>
                  </span>
                ) : (
                  <span className="text-white/90 group-hover:text-white transition-colors duration-200">{item.text}</span>
                )}
              </Link>
            ))}
            <div className="flex items-center gap-3 py-2">
              {socialLinks.map((social, index) => (
                <Link key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="group">
                  <div className="p-2 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-[#32CD32] hover:via-[#7CFC00] hover:to-[#90EE90] transition-all duration-200">
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
        
        @keyframes shine-text {
          0%, 100% {
            background-position: -200% center;
          }
          50% {
            background-position: 200% center;
          }
        }
        
        @keyframes shine-overlay {
          0% { 
            transform: translateX(-100%);
            border-radius: 0.75rem;
          }
          100% { 
            transform: translateX(100%);
            border-radius: 0.75rem;
          }
        }
        
        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 5px rgba(50, 205, 50, 0.3), 0 0 10px rgba(124, 252, 0, 0.2), 0 0 15px rgba(144, 238, 144, 0.1);
          }
          50% {
            box-shadow: 0 0 10px rgba(50, 205, 50, 0.6), 0 0 20px rgba(124, 252, 0, 0.4), 0 0 30px rgba(144, 238, 144, 0.2);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        
        .animate-slideDown {
          animation: slideDown 0.15s ease-out forwards;
        }
        
        .animate-shine-text {
          background-size: 400% 100%;
          animation: shine-text 2.5s ease-in-out infinite;
          padding: 0.25rem 0.75rem;
          border-radius: 0.75rem;
          position: relative;
          z-index: 1;
        }
        
        .animate-shine-overlay {
          animation: shine-overlay 2.5s ease-in-out infinite;
          border-radius: 0.75rem;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
        }
        
        .shine-container {
          border-radius: 0.75rem;
          background: linear-gradient(135deg, rgba(50, 205, 50, 0.1), rgba(124, 252, 0, 0.1), rgba(144, 238, 144, 0.1));
          backdrop-filter: blur(4px);
          border: 1px solid rgba(50, 205, 50, 0.2);
          animation: glow-pulse 3s ease-in-out infinite;
          transition: all 0.3s ease;
        }
        
        .shine-container:hover {
          background: linear-gradient(135deg, rgba(50, 205, 50, 0.2), rgba(124, 252, 0, 0.2), rgba(144, 238, 144, 0.2));
          border: 1px solid rgba(50, 205, 50, 0.4);
          transform: translateY(-1px);
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