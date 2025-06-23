'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { User, FileText, Coins, Bot, Users, ImageIcon, CheckCircle2 } from 'lucide-react';

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<Set<HTMLDivElement>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Memoized features data to prevent recreation on every render
  const features = React.useMemo(() => [
    {
      icon: User,
      title: "Decentralized Identity",
      features: [
        "Sign in with blockchain wallets",
        "No centralized data collection",
        "User identities verified on-chain",
        "Eliminates risks of unauthorized access"
      ]
    },
    {
      icon: FileText,
      title: "Smart Contracts for Content",
      features: [
        "Posts ('Darts') stored on-chain or in IPFS/Arweave",
        "Immutable content resistant to censorship",
        "Verifiable content origin preventing misinformation",
        "Prevents fake news and content manipulation"
      ]
    },
    {
      icon: Coins,
      title: "Tokenized Rewards",
      features: [
        "Earn $DART tokens for engagement and contributions",
        "Staking mechanisms for passive income",
        "Tip creators through micropayments",
        "Promotes high-quality content and engagement"
      ]
    },
    {
      icon: Bot,
      title: "AI-Powered Features",
      features: [
        "AI moderation detecting spam while respecting decentralization",
        "Personalized feeds based on engagement patterns",
        "AI-driven content recommendations for discovery",
        "Respects decentralization principles"
      ]
    },
    {
      icon: Users,
      title: "Community Governance",
      features: [
        "Users vote on trending topics and platform decisions",
        "DAO model ensures fair content visibility",
        "Transparent algorithm prevents manipulation",
        "Community-driven decision making process"
      ]
    },
    {
      icon: ImageIcon,
      title: "NFT-Based Profiles",
      features: [
        "Mint unique NFT profile badges",
        "Exclusive access to premium features",
        "Interoperability with other Web3 platforms",
        "NFTs usable across multiple applications"
      ]
    }
  ], []);

  // Optimized ref callback using useCallback
  const addToRefs = useCallback((el: HTMLDivElement | null) => {
    if (el) {
      cardsRef.current.add(el);
    }
  }, []);

  useEffect(() => {
    // Create observer with optimized options
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Use requestAnimationFrame to batch DOM updates
        requestAnimationFrame(() => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
              // Unobserve after animation to improve performance
              observerRef.current?.unobserve(entry.target);
            }
          });
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px' // Start animation slightly before element is visible
      }
    );

    // Observe section header
    if (sectionRef.current) {
      observerRef.current.observe(sectionRef.current);
    }

    // Observe all cards
    cardsRef.current.forEach((card) => {
      if (observerRef.current) {
        observerRef.current.observe(card);
      }
    });

    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []); // Empty dependency array since we're using refs

  return (
    <section id="features" className="py-24 text-white relative bg-gradient-to-br from-slate-900 via-slate-900/20 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 will-change-transform" ref={sectionRef}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sol<span className="bg-gradient-to-r from-[#32CD32] via-[#7CFC00] to-[#90EE90] text-transparent bg-clip-text">Dart</span> Features
          </h2>
          <div className="w-64 h-1 bg-gradient-to-r from-[#32CD32] via-[#7CFC00] to-[#90EE90] mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
            SolEcho is a user-friendly protocol that allows users to
            communicate and interact in a fully decentralized ecosystem.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 opacity-0 group will-change-transform"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#32CD32] via-[#7CFC00] to-[#90EE90] flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300 will-change-transform">
                  <feature.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              </div>
              <div className="space-y-3">
                {feature.features.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-3 bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#32CD32] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 30px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        /* Hardware acceleration for smooth animations */
        .will-change-transform {
          will-change: transform, opacity;
        }

        /* Optimize backdrop-blur performance */
        .backdrop-blur-sm {
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }
      `}</style>
    </section>
  );
}