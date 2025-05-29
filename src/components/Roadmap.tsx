'use client';

import React, { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Roadmap() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const phaseRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Initialize the refs array
  useEffect(() => {
    phaseRefs.current = phaseRefs.current.slice(0, 4);

    // Animate the roadmap title underline
    setTimeout(() => {
      const underline = document.querySelector('.roadmap-underline');
      if (underline) underline.classList.add('scale-x-100');
    }, 500);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            if (entry.target.classList.contains('timeline-section')) {
              entry.target.classList.add('reveal');
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    phaseRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-24 text-white relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#B671FF]/10 via-transparent to-transparent"></div>

      <style jsx>{`
        .timeline-section {
          opacity: 0;
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 1.5s ease, opacity 0.5s ease;
          box-shadow: 0 0 15px rgba(182, 113, 255, 0.2);
        }

        .timeline-section.reveal {
          opacity: 1;
          transform: scaleY(1);
        }

        .phase-item {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .phase-item.animate-fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .timeline-dot {
          transition: all 0.3s ease;
          box-shadow: 0 0 0 4px rgba(182, 113, 255, 0.2);
        }

        .phase-item:hover .timeline-dot {
          background: linear-gradient(to right, #B671FF, #C577EE, #E282CA);
          transform: scale(1.2);
          box-shadow: 0 0 0 8px rgba(182, 113, 255, 0.2);
        }

        .phase-card {
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          padding: 20px;
          background: linear-gradient(to bottom right, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95));
          backdrop-filter: blur(10px);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .phase-item:hover .phase-card {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          background: linear-gradient(to bottom right, rgba(15, 23, 42, 1), rgba(30, 41, 59, 1));
        }

        .check-icon {
          transition: all 0.3s ease;
        }

        .phase-item:hover .check-icon {
          transform: scale(1.2);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        .floating {
          animation: float 3s ease-in-out infinite;
        }

        .pulsing {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4 relative inline-block">
            Roadmap
            <div className="absolute -bottom-6 w-64 -left-4 right-0 h-1 bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] transform scale-x-0 transition-transform duration-500 origin-left roadmap-underline"></div>
          </h2>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
            Our strategic plan for building and evolving the SolEcho platform
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Center timeline */}
          <div
            ref={timelineRef}
            className="timeline-section absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#B671FF] via-[#C577EE] to-[#E282CA] h-full z-10"
            style={{ height: 'calc(100% - 60px)', top: '30px', filter: 'drop-shadow(0 0 8px rgba(182, 113, 255, 0.3))' }}
          ></div>

          {/* Timeline content */}
          <div className="relative z-20 p-20">
            {/* Phase 1 - Left */}
            <div
              ref={(el) => { phaseRefs.current[0] = el; }}
              className="phase-item flex items-center mb-32"
            >
              <div className="w-1/2 pr-12 text-right">
                <div className="phase-card bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-t-4 border-[#B671FF] inline-block hover:shadow-xl transition-all duration-300 group">
                  <h3 className="text-2xl font-bold mb-4 flex items-center justify-start">
                    <span className="flex w-8 h-8 rounded-full bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] text-white items-center justify-center mr-2 floating" style={{ filter: 'drop-shadow(0 0 2px rgba(182, 113, 255, 0.5))' }}>1</span>
                    <span className="bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] bg-clip-text text-transparent">Phase 1</span>
                  </h3>
                  <ul className="space-y-3 text-left">
                    {[
                      "Enable users to create and manage personalized profiles.",
                      "Allow users to create and share posts (\"echos\") on the platform.",
                      "Connect Phantom, Backpack & others for login and transactions.",
                      "Native $ECHO token and basic AI-powered moderation."
                    ].map((item, index) => (
                      <li key={index} className="flex items-center justify-end group/item">
                        <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">{item}</span>
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] ml-3 flex items-center justify-center check-icon" style={{ filter: 'drop-shadow(0 0 2px rgba(182, 113, 255, 0.5))' }}>
                          <CheckCircle2 className="h-3 w-3 text-white" />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] rounded-full border-4 border-white z-20 timeline-dot floating" style={{ filter: 'drop-shadow(0 0 5px rgba(182, 113, 255, 0.5))' }}></div>
              <div className="w-1/2"></div>
            </div>

            {/* Phase 2 - Right */}
            <div
              ref={(el) => { phaseRefs.current[1] = el; }}
              className="phase-item flex items-center mb-32"
            >
              <div className="w-1/2"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] rounded-full border-4 border-white z-20 timeline-dot floating" style={{ filter: 'drop-shadow(0 0 5px rgba(182, 113, 255, 0.5))' }}></div>
              <div className="w-1/2 pl-12">
                <div className="phase-card bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-t-4 border-[#B671FF] inline-block hover:shadow-xl transition-all duration-300 group">
                  <h3 className="text-2xl font-bold mb-4 flex items-center justify-start">
                    <span className="flex w-8 h-8 rounded-full bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] text-white items-center justify-center mr-2 floating" style={{ filter: 'drop-shadow(0 0 2px rgba(182, 113, 255, 0.5))' }}>2</span>
                    <span className="bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] bg-clip-text text-transparent">Phase 2</span>
                  </h3>
                  <ul className="space-y-3 text-left">
                    {[
                      "Introduce rewards for engagement and contribution using $ECHO.",
                      "Enable users to stake $ECHO tokens for benefits and platform influence.",
                      "Implement a decentralized governance system to let users vote on platform decisions.",
                      "Expand AI capabilities to deliver highly personalized content feeds."
                    ].map((item, index) => (
                      <li key={index} className="flex items-center group/item">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] mr-3 flex items-center justify-center check-icon" style={{ filter: 'drop-shadow(0 0 2px rgba(182, 113, 255, 0.5))' }}>
                          <CheckCircle2 className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 3 - Left */}
            <div
              ref={(el) => { phaseRefs.current[2] = el; }}
              className="phase-item flex items-center mb-32"
            >
              <div className="w-1/2 pr-12 text-right">
                <div className="phase-card bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-t-4 border-[#B671FF] inline-block hover:shadow-xl transition-all duration-300 group">
                  <h3 className="text-2xl font-bold mb-4 flex items-center justify-start">
                    <span className="flex w-8 h-8 rounded-full bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] text-white items-center justify-center mr-2 floating" style={{ filter: 'drop-shadow(0 0 2px rgba(182, 113, 255, 0.5))' }}>3</span>
                    <span className="bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] bg-clip-text text-transparent">Phase 3</span>
                  </h3>
                  <ul className="space-y-3 text-left">
                    {[
                      "Launch NFT-based profile badges and collectibles.",
                      "Integrate with other Web3 platforms and services.",
                      "Implement advanced AI features for content moderation.",
                      "Expand the ecosystem with developer tools and APIs."
                    ].map((item, index) => (
                      <li key={index} className="flex items-center justify-end group/item">
                        <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">{item}</span>
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] ml-3 flex items-center justify-center check-icon" style={{ filter: 'drop-shadow(0 0 2px rgba(182, 113, 255, 0.5))' }}>
                          <CheckCircle2 className="h-3 w-3 text-white" />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] rounded-full border-4 border-white z-20 timeline-dot floating" style={{ filter: 'drop-shadow(0 0 5px rgba(182, 113, 255, 0.5))' }}></div>
              <div className="w-1/2"></div>
            </div>

            {/* Phase 4 - Right */}
            <div
              ref={(el) => { phaseRefs.current[3] = el; }}
              className="phase-item flex items-center"
            >
              <div className="w-1/2"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] rounded-full border-4 border-white z-20 timeline-dot floating" style={{ filter: 'drop-shadow(0 0 5px rgba(182, 113, 255, 0.5))' }}></div>
              <div className="w-1/2 pl-12">
                <div className="phase-card bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-t-4 border-[#B671FF] inline-block hover:shadow-xl transition-all duration-300 group">
                  <h3 className="text-2xl font-bold mb-4 flex items-center justify-start">
                    <span className="flex w-8 h-8 rounded-full bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] text-white items-center justify-center mr-2 floating" style={{ filter: 'drop-shadow(0 0 2px rgba(182, 113, 255, 0.5))' }}>4</span>
                    <span className="bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] bg-clip-text text-transparent">Phase 4</span>
                  </h3>
                  <ul className="space-y-3 text-left">
                    {[
                      "Launch cross-chain integration for broader accessibility.",
                      "Implement advanced DAO governance features.",
                      "Develop mobile applications for iOS and Android.",
                      "Create a comprehensive ecosystem for content creators."
                    ].map((item, index) => (
                      <li key={index} className="flex items-center group/item">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] mr-3 flex items-center justify-center check-icon" style={{ filter: 'drop-shadow(0 0 2px rgba(182, 113, 255, 0.5))' }}>
                          <CheckCircle2 className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
