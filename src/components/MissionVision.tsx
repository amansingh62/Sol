'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { Target, Eye, Shield, Bot, User, Lock, Building2, BookOpen, Coins, Lightbulb, Search, Rocket } from 'lucide-react';

export default function MissionVision() {
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Memoized animation callback to prevent recreating on every render
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;

        if (target.classList.contains('mission-section')) {
          target.style.animation = 'slideInLeft 0.8s ease-out forwards';
        } else if (target.classList.contains('vision-section')) {
          target.style.animation = 'slideInRight 0.8s ease-out forwards';
        } else if (target.classList.contains('section-title')) {
          target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        } else {
          target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }

        // Unobserve after animation triggers to improve performance
        observerRef.current?.unobserve(entry.target);
      }
    });
  }, []);

  useEffect(() => {
    // Create observer with optimized options
    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px', // Reduced margin for earlier trigger
    });

    // Observe all elements at once using querySelectorAll
    if (containerRef.current) {
      const elementsToObserve = containerRef.current.querySelectorAll('.animate-on-scroll');
      elementsToObserve.forEach((element) => {
        observerRef.current?.observe(element);
      });
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [handleIntersection]);

  // Memoized mission items to prevent recreating on every render
  const missionItems = React.useMemo(() => [
    { icon: Shield, title: "Decentralized Ecosystem", description: "Built on blockchain technology to eliminate central authority and single points of failure." },
    { icon: Lock, title: "Censorship-Resistant", description: "Ensures freedom of expression by preventing content suppression or manipulation." },
    { icon: Bot, title: "AI-Powered Features", description: "Integrates AI for personalized content discovery, moderation assistance, and enhanced user interaction." },
    { icon: User, title: "User Ownership & Control", description: "Users have full ownership of their data, content, and digital identity." },
    { icon: Lock, title: "Secure Infrastructure", description: "Utilizes smart contracts and cryptographic verification." },
    { icon: Building2, title: "Community Governance", description: "Decisions are made through DAO mechanisms, giving power back to users." }
  ], []);

  // Memoized vision items to prevent recreating on every render
  const visionItems = React.useMemo(() => [
    { icon: BookOpen, title: "Content Integrity", description: "Leverage blockchain verification to ensure all content is authentic and tamper-proof." },
    { icon: Coins, title: "Tokenized Incentives", description: "Reward users for their content, engagement, and contributions through decentralized monetization." },
    { icon: Bot, title: "AI-Enhanced Experience", description: "Use AI to boost content discovery, personalize experiences, and drive meaningful engagement." },
    { icon: Lightbulb, title: "Digital Innovation", description: "SolDart as the catalyst for a new era of digital interaction—where technology serves humanity." },
    { icon: Search, title: "Transparency", description: "A platform with transparent algorithms, user-controlled monetization, and community-driven development." },
    { icon: Rocket, title: "Solana Powered", description: "Building the future of social media on the powerful Solana blockchain for speed and scalability." }
  ], []);

  return (
    <section className="py-24 text-white relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900/20 to-slate-900">
      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        {/* Section title */}
        <div className="text-center mb-16 opacity-0 animate-on-scroll section-title">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-white text-transparent bg-clip-text">
            Our Purpose
          </h2>
          <div className="w-64 h-1 bg-gradient-to-r from-[#32CD32] via-[#7CFC00] to-[#90EE90] mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
            Redefining social media through blockchain technology and user empowerment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6">
          {/* Mission Column */}
          <div className="mission-section flex flex-col bg-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 opacity-0 animate-on-scroll">
            <div className="mb-6 flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#32CD32] via-[#7CFC00] to-[#90EE90] flex items-center justify-center mr-4 shadow-lg">
                <Target className="h-6 w-6 text-black" />
              </div>
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {missionItems.map((item, index) => (
                <div
                  key={`mission-${index}`}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 opacity-0 animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-[#32CD32] via-[#7CFC00] to-[#90EE90] bg-opacity-20">
                      <item.icon className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision Column */}
          <div className="vision-section flex flex-col bg-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 opacity-0 animate-on-scroll">
            <div className="mb-6 flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#32CD32] via-[#7CFC00] to-[#90EE90] flex items-center justify-center mr-4 shadow-lg">
                <Eye className="h-6 w-6 text-black" />
              </div>
              <h2 className="text-3xl font-bold text-white">Our Vision</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {visionItems.map((item, index) => (
                <div
                  key={`vision-${index}`}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 opacity-0 animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-[#32CD32] via-[#7CFC00] to-[#90EE90] bg-opacity-20">
                      <item.icon className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Hardware acceleration for smoother animations */
        .animate-on-scroll {
          will-change: transform, opacity;
          transform: translateZ(0);
        }

        /* Ensure smooth transitions */
        * {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}