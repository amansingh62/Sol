'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TbBook, TbBrandTwitter, TbBrandTelegram, TbArrowRight } from 'react-icons/tb';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 md:py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#B671FF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#C577EE] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#E282CA] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Top section with logo and social links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-16">
          <div className="flex items-center mb-8 md:mb-0 group">
            <div className="w-12 h-12 md:w-14 md:h-14 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Image 
                src="/image (1).png" 
                alt="Solana Logo" 
                width={56}
                height={56}
                className="rounded-lg relative z-10 transform group-hover:scale-105 transition-transform duration-300" 
                unoptimized
              />
            </div>
            <span className="text-3xl md:text-4xl font-bold ml-4">Sol<span className='bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] text-transparent bg-clip-text'>Echo</span></span>
          </div>

          <div className="flex items-center gap-6 md:gap-8">
            <Link href="https://x.com/SolEcho_io" target="_blank" className="group">
              <div className="p-2.5 md:p-3 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-gradient-to-r hover:from-[#B671FF] hover:via-[#C577EE] hover:to-[#E282CA] transition-all duration-300 transform hover:scale-110">
                <TbBrandTwitter className="text-2xl md:text-3xl text-white group-hover:text-black transition-colors" />
              </div>
            </Link>

            <Link href="https://t.me/SolEcho" target="_blank" className="group">
              <div className="p-2.5 md:p-3 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-gradient-to-r hover:from-[#B671FF] hover:via-[#C577EE] hover:to-[#E282CA] transition-all duration-300 transform hover:scale-110">
                <TbBrandTelegram className="text-2xl md:text-3xl text-white group-hover:text-black transition-colors" />
              </div>
            </Link>
            <Link href="https://solecho.gitbook.io/documents" target="_blank" className="group">
              <div className="p-2.5 md:p-3 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-gradient-to-r hover:from-[#B671FF] hover:via-[#C577EE] hover:to-[#E282CA] transition-all duration-300 transform hover:scale-110">
                <TbBook className="text-2xl md:text-3xl text-white group-hover:text-black transition-colors" />
              </div>
            </Link>
          </div>
        </div>

        {/* Middle section with links */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] text-transparent bg-clip-text">Platform</h3>
            <ul className="space-y-4">
              {[
                { text: "Features", href: "#" },
                { text: "Roadmap", href: "#" },
                { text: "Tokenomics", href: "#" },
                { text: "Partners", href: "#" }
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-base md:text-lg text-white/70 hover:text-white transition-all duration-300"
                  >
                    <span className="relative overflow-hidden">
                      <span className="inline-block transform group-hover:-translate-y-full transition-transform duration-300">
                        {item.text}
                      </span>
                      <span className="absolute top-0 left-0 transform translate-y-full group-hover:-translate-y-0 transition-transform duration-300 text-[#B671FF]">
                        {item.text}
                      </span>
                    </span>
                    <TbArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] text-transparent bg-clip-text">Resources</h3>
            <ul className="space-y-4">
              {[
                { text: "Documentation", href: "#" },
                { text: "API", href: "#" },
                { text: "Tutorials", href: "#" },
                { text: "Blog", href: "#" }
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-base md:text-lg text-white/70 hover:text-white transition-all duration-300"
                  >
                    <span className="relative overflow-hidden">
                      <span className="inline-block transform group-hover:-translate-y-full transition-transform duration-300">
                        {item.text}
                      </span>
                      <span className="absolute top-0 left-0 transform translate-y-full group-hover:-translate-y-0 transition-transform duration-300 text-[#B671FF]">
                        {item.text}
                      </span>
                    </span>
                    <TbArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] text-transparent bg-clip-text">Community</h3>
            <ul className="space-y-4">
              {[
                { text: "Discord", href: "#" },
                { text: "Twitter", href: "#" },
                { text: "Telegram", href: "#" },
                { text: "GitHub", href: "#" }
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-base md:text-lg text-white/70 hover:text-white transition-all duration-300"
                  >
                    <span className="relative overflow-hidden">
                      <span className="inline-block transform group-hover:-translate-y-full transition-transform duration-300">
                        {item.text}
                      </span>
                      <span className="absolute top-0 left-0 transform translate-y-full group-hover:-translate-y-0 transition-transform duration-300 text-[#B671FF]">
                        {item.text}
                      </span>
                    </span>
                    <TbArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] text-transparent bg-clip-text">Legal</h3>
            <ul className="space-y-4">
              {[
                { text: "Terms of Service", href: "#" },
                { text: "Privacy Policy", href: "#" },
                { text: "Cookie Policy", href: "#" },
                { text: "Disclaimer", href: "#" }
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-base md:text-lg text-white/70 hover:text-white transition-all duration-300"
                  >
                    <span className="relative overflow-hidden">
                      <span className="inline-block transform group-hover:-translate-y-full transition-transform duration-300">
                        {item.text}
                      </span>
                      <span className="absolute top-0 left-0 transform translate-y-full group-hover:-translate-y-0 transition-transform duration-300 text-[#B671FF]">
                        {item.text}
                      </span>
                    </span>
                    <TbArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter subscription */}
        <div className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl mb-12 md:mb-16 border border-white/10 hover:border-white/20 transition-all duration-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] text-transparent bg-clip-text">Stay Updated</h3>
              <p className="text-base md:text-lg text-gray-400">Subscribe to our newsletter for the latest updates and news.</p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 md:px-6 py-3 md:py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B671FF] w-full md:w-80 text-base md:text-lg placeholder-gray-500"
              />
              <button className="bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] text-black px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="border-t border-white/10 pt-8 md:pt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-0 text-center md:text-left">© {new Date().getFullYear()} SolEcho. All rights reserved.</p>
          <div className="flex gap-6 md:gap-8 text-sm md:text-base">
            {[
              { text: "Terms", href: "#" },
              { text: "Privacy", href: "#" },
              { text: "Cookies", href: "#" }
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-gray-400 hover:text-[#B671FF] transition-colors duration-300 relative group"
              >
                <span className="relative">
                  {item.text}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;