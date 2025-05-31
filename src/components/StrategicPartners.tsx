'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const StrategicPartners: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const partners = [
    { src: "/coin.png", alt: "CoinGecko", width: 120, height: 48 },
    { src: "/coinmarketcap.png", alt: "CoinMarketCap", width: 160, height: 48 },
    { src: "/dex-1.png", alt: "DexScreener", width: 140, height: 48 },
    { src: "/MEXC.png", alt: "MEXC", width: 144, height: 48 },
    { src: "/kuku.webp", alt: "KuCoin", width: 50, height: 48 },
    { src: "/Solana-1.png", alt: "Solana", width: 50, height: 48 },
    { src: "/phantom1.png", alt: "Phantom", width: 160, height: 64 },
    { src: "/pack-1.png", alt: "Backpack", width: 120, height: 64 },
    { src: "/drip.png", alt: "Drip", width: 96, height: 48 }
  ];

  return (
    <section ref={sectionRef} className="py-24 text-white relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#581c87]/20 to-[#141c2d]">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#B671FF]/10 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 relative inline-block">
            Strategic Partners
            <div className="absolute -bottom-6 w-64 -left-4 right-0 h-1 bg-whit transform scale-x-0 transition-transform duration-500 origin-left roadmap-underline"></div>
          </h2>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
            We collaborate with industry leaders to bring you the best decentralized social experience.
          </p>
        </div>

        <div className="partners-slider-container overflow-hidden">
          <div className="partners-slider">
            {/* First set of partners */}
            <div className="partners-slide">
              {partners.map((partner, index) => (
                <div key={index} className="partner-logo group">
                  <div className="relative w-48 h-32 flex items-center justify-center rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 group-hover:shadow-lg group-hover:shadow-purple-500/20">
                    <div className="relative h-12 w-full flex items-center justify-center">
                      <Image
                        src={partner.src}
                        alt={partner.alt}
                        width={partner.width}
                        height={partner.height}
                        className="object-contain h-full w-auto transition-all duration-300 group-hover:scale-110"
                        style={{ filter: 'brightness(0.9) contrast(1.1)' }}
                        unoptimized
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#B671FF]/0 via-[#B671FF]/0 to-[#B671FF]/0 group-hover:from-[#B671FF]/5 group-hover:via-[#B671FF]/10 group-hover:to-[#B671FF]/5 transition-all duration-300 rounded-2xl"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Duplicate set for seamless looping */}
            <div className="partners-slide ml-8">
              {partners.map((partner, index) => (
                <div key={`duplicate-${index}`} className="partner-logo group">
                  <div className="relative w-48 h-32 flex items-center justify-center rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 group-hover:shadow-lg group-hover:shadow-purple-500/20">
                    <div className="relative h-12 w-full flex items-center justify-center">
                      <Image
                        src={partner.src}
                        alt={partner.alt}
                        width={partner.width}
                        height={partner.height}
                        className="object-contain h-full w-auto transition-all duration-300 group-hover:scale-110"
                        style={{ filter: 'brightness(0.9) contrast(1.1)' }}
                        unoptimized
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#B671FF]/0 via-[#B671FF]/0 to-[#B671FF]/0 group-hover:from-[#B671FF]/5 group-hover:via-[#B671FF]/10 group-hover:to-[#B671FF]/5 transition-all duration-300 rounded-2xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .partners-slider-container {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 20px 0;
        }

        .partners-slider {
          display: flex;
          animation: scroll 30s linear infinite;
          width: fit-content;
        }

        .partners-slide {
          display: flex;
          align-items: center;
          white-space: nowrap;
          gap: 2rem;
        }

        .partner-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          min-width: 12rem;
        }

        .partner-logo:hover {
          transform: translateY(-5px);
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        @media (max-width: 768px) {
          .partner-logo {
            min-width: 10rem;
          }
          .partner-logo > div {
            width: 8rem;
            height: 6rem;
          }
          .partner-logo .h-12 {
            height: 2rem;
          }
          .partner-logo .w-full {
            width: 6rem;
          }
        }

        @media (max-width: 480px) {
          .partner-logo {
            min-width: 8rem;
          }
          .partner-logo > div {
            width: 6rem;
            height: 4rem;
          }
          .partner-logo .h-12 {
            height: 1.5rem;
          }
          .partner-logo .w-full {
            width: 4rem;
          }
          .partners-slider {
            animation: scroll 20s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default StrategicPartners;