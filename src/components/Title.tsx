'use client';

import React, { memo, useMemo } from 'react';
import { ArrowRight, Users, MessageCircle, Share2, Zap } from "lucide-react";
import Link from 'next/link';

// Memoized Enhanced Button Component
const EnhancedButton = memo(() => {
  return (
    <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 transform will-change-transform hover:scale-105 active:scale-95">
      {/* Animated background */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] opacity-100 transition-opacity duration-300 group-hover:opacity-90 will-change-opacity"></div>

      {/* Button content */}
      <Link 
  href="https://app.solecho.io/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="relative flex items-center space-x-2 z-10 font-semibold hover:opacity-80 transition-opacity"
>
  <span>Get Started</span>
  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 will-change-transform" />
</Link>

      {/* Shine effect */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transform -skew-x-12 -translate-x-full group-hover:animate-shine will-change-transform"></div>
      </div>
    </button>
  );
});

EnhancedButton.displayName = 'EnhancedButton';

// Memoized Feature Component with proper TypeScript interface
interface FeatureItemProps {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

const FeatureItem = memo(({ icon: Icon, text }: FeatureItemProps) => (
  <div
    className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-white/20 group will-change-transform"
  >
    <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 will-change-transform" />
    <span className="text-sm font-medium">{text}</span>
  </div>
));

FeatureItem.displayName = 'FeatureItem';

export default function EnhancedTitle() {
  // Memoize features array to prevent recreation on each render
  const features = useMemo(() => [
    { icon: Users, text: "Community Driven" },
    { icon: MessageCircle, text: "Decentralized Chat" },
    { icon: Share2, text: "Content Ownership" }
  ], []);

  return (
    <>
      <style jsx>{`
        /* CSS moved to head for better performance */
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
          will-change: opacity;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          will-change: transform, opacity;
        }

        .animate-shine-border {
          animation: shineBorder 2s linear infinite;
          will-change: transform;
        }

        .animate-bounce-subtle {
          animation: bounceSubtle 2s ease-in-out infinite;
          will-change: transform;
        }

        .animate-shine {
          animation: shine 0.6s ease-out;
          will-change: transform;
        }

        /* Optimized keyframes with transform3d for GPU acceleration */
        @keyframes fadeIn {
          from { 
            opacity: 0;
            transform: translate3d(0, 0, 0);
          }
          to { 
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes shineBorder {
          0% { transform: translate3d(-100%, 0, 0); }
          100% { transform: translate3d(100%, 0, 0); }
        }

        @keyframes bounceSubtle {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -3px, 0); }
        }

        @keyframes shine {
          0% { transform: translate3d(-100%, 0, 0) skewX(-12deg); }
          100% { transform: translate3d(100%, 0, 0) skewX(-12deg); }
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }

        .animation-delay-800 {
          animation-delay: 800ms;
        }

        /* Optimize background gradients */
        .bg-optimized {
          background: linear-gradient(135deg, #0f172a 0%, rgba(88, 28, 135, 0.2) 50%, #0f172a 100%);
        }

        .bg-pulse-optimized {
          background: linear-gradient(90deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 50%, rgba(168, 85, 247, 0.1) 100%);
          animation: pulseGradient 4s ease-in-out infinite;
        }

        @keyframes pulseGradient {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
      `}</style>

      <main className="relative flex flex-col items-center justify-center px-4 mx-auto text-center overflow-hidden min-h-screen bg-optimized">
        {/* Optimized animated background gradients */}
        <div className="absolute inset-0 bg-pulse-optimized will-change-opacity"></div>

        {/* Main content */}
        <div className="relative z-10 space-y-8 mt-24 md:mt-32 mb-20 md:mb-32 w-full px-4">
          {/* Enhanced Badge */}
          <div className="relative inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/90 animate-fade-in hover:scale-105 transition-transform duration-300 hover:bg-white/10 group will-change-transform">
            {/* Shining border animation */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B671FF] to-transparent animate-shine-border will-change-transform"></div>
            </div>

            {/* Thunder icon with enhanced glow */}
            <div className="relative mr-3">
              <div className="absolute inset-0 bg-[#B671FF] blur-xl opacity-50 animate-pulse will-change-opacity"></div>
              <Zap className="w-4 h-4 text-[#B671FF] relative z-10 animate-bounce-subtle will-change-transform" />
            </div>

            {/* Text with gradient */}
            <span className="relative bg-gradient-to-r from-white via-[#B671FF] to-white bg-clip-text text-transparent">
              Next-Gen Social Experience
            </span>

            {/* Additional glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#B671FF]/20 via-[#C577EE]/20 to-[#E282CA]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 will-change-opacity"></div>
          </div>

          {/* Main heading with enhanced animations */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-6xl mx-auto animate-fade-in-up will-change-transform">
            The First{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] text-transparent bg-clip-text hover:opacity-80 transition-opacity duration-300 will-change-opacity">
                Web3 Social Media
              </span>
            </span>
            {" "}built on{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] text-transparent bg-clip-text hover:opacity-80 transition-opacity duration-300 will-change-opacity">
                Solana
              </span>
            </span>
            {" "}with AI technology to empower{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] text-transparent bg-clip-text hover:opacity-80 transition-opacity duration-300 will-change-opacity">
                Decentralisation
              </span>
            </span>
          </h1>

          {/* Enhanced subtitle */}
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/80 leading-relaxed animate-fade-in-up animation-delay-200 hover:text-white/90 transition-colors duration-300 will-change-auto">
            Connect, share, and engage globally with true ownership of your content.
            Experience the future of social interaction powered by blockchain technology.
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 animate-fade-in-up animation-delay-400 will-change-transform">
            {features.map((feature, index) => (
              <FeatureItem
                key={`${feature.text}-${index}`}
                icon={feature.icon}
                text={feature.text}
              />
            ))}
          </div>

          {/* Enhanced CTA Button */}
          <div className="mt-12 animate-fade-in-up animation-delay-600 will-change-transform">
            <EnhancedButton />
          </div>

          {/* Social proof */}
          <div className="mt-8 text-white/60 animate-fade-in-up animation-delay-800 hover:text-white/70 transition-colors duration-300 will-change-auto">
            <p className="text-sm">Join thousands of early adopters shaping the future of social media</p>
          </div>
        </div>
      </main>
    </>
  );
}