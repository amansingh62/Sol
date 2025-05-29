'use client';

import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { Image, Video, FileText, Link2, Smile, Send, Coins, Lock, Sparkles } from 'lucide-react';

// Custom hook for typing effect
const useTypingEffect = () => {
  const [text, setText] = useState('');
  const fullText = "What's on your mind?";
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateText = () => {
      if (!isDeleting && text === fullText) {
        timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
        return;
      }

      if (isDeleting && text === '') {
        setIsDeleting(false);
        return;
      }

      const delta = isDeleting ? -1 : 1;
      setText(fullText.substring(0, text.length + delta));
      timeoutRef.current = setTimeout(updateText, isDeleting ? 50 : 100);
    };

    timeoutRef.current = setTimeout(updateText, isDeleting ? 50 : 100);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, isDeleting, fullText]);

  return text;
};

export default function CreatePosts() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  // Use the typing effect hook
  const placeholderText = useTypingEffect();

  // Memoized post options to prevent re-renders
  const postOptions = useMemo(() => [
    { icon: Image, label: "Image" },
    { icon: Video, label: "Video" },
    { icon: FileText, label: "Document" },
    { icon: Link2, label: "Link" },
    { icon: Smile, label: "Emoji" }
  ], []);

  // Memoized features to prevent re-renders
  const features = useMemo(() => [
    {
      title: "Content Ownership",
      description: "Your posts are stored on-chain, ensuring true ownership and control over your content.",
      icon: FileText
    },
    {
      title: "Media Support",
      description: "Share images, videos, and documents with built-in IPFS/Arweave storage integration.",
      icon: Image
    },
    {
      title: "Smart Contracts",
      description: "Automated content monetization and reward distribution through smart contracts.",
      icon: Coins
    },
    {
      title: "Privacy Controls",
      description: "Granular privacy settings to control who can view and interact with your content.",
      icon: Lock
    }
  ], []);

  // Optimized intersection observer setup
  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Use requestAnimationFrame for smoother animations
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              entry.target.classList.add('animate-in');
            });
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px' // Trigger animations slightly before element is visible
      }
    );

    // Observe elements with a slight delay to prevent initial render lag
    const timeoutId = setTimeout(() => {
      if (sectionRef.current && observerRef.current) {
        observerRef.current.observe(sectionRef.current);
      }
      cardsRef.current.forEach((card) => {
        if (card && observerRef.current) {
          observerRef.current.observe(card);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Optimized ref callback
  const addToRefs = useCallback((el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  }, []);

  return (
    <section className="py-24 text-white relative bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden">
      {/* Animated background elements - using transform3d for hardware acceleration */}
      <div className="absolute inset-0 overflow-hidden will-change-transform">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-blob transform-gpu"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-blob animation-delay-2000 transform-gpu"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-4000 transform-gpu"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 transform-gpu" ref={sectionRef}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 mr-2 text-[#B671FF] animate-pulse" />
            <span className="text-sm font-medium text-white/90">Create Your Digital Legacy</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-title">
            Create Your <span className="bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] text-transparent bg-clip-text animate-gradient">Echo</span>
          </h2>
          <div className="w-64 h-1 bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] mx-auto animate-line"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg animate-fade-in-up">
            Share your thoughts, media, and experiences with the SolEcho community.
            Your content, your rules, your blockchain.
          </p>
        </div>

        {/* Create Post Interface */}
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 animate-float shadow-2xl shadow-purple-500/10 transform-gpu">
          {/* Post Input */}
          <div className="mb-8">
            <textarea
              className="w-full h-32 bg-white/5 rounded-xl p-4 text-white placeholder-gray-400 border border-white/10 focus:border-[#B671FF] focus:ring-2 focus:ring-[#B671FF]/20 transition-all duration-300 resize-none hover:bg-white/10 backdrop-blur-sm"
              placeholder={placeholderText}
            />
          </div>

          {/* Post Options */}
          <div className="flex flex-wrap gap-4 mb-8">
            {postOptions.map((option, index) => (
              <button
                key={`${option.label}-${index}`}
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group animate-fade-in-up backdrop-blur-sm transform-gpu"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <option.icon className="w-5 h-5 text-[#B671FF] group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-[#B671FF] blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                <span className="text-sm text-gray-300 group-hover:text-white">{option.label}</span>
              </button>
            ))}
          </div>

          {/* Post Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={`${feature.title}-${index}`}
                ref={addToRefs}
                className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 opacity-0 group hover:transform hover:scale-[1.02] shadow-lg shadow-purple-500/5 transform-gpu will-change-transform"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300 relative overflow-hidden transform-gpu">
                    <feature.icon className="w-6 h-6 text-white relative z-10" />
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#B671FF] transition-colors duration-300">{feature.title}</h3>
                </div>
                <p className="text-sm text-gray-300 group-hover:text-white/90 transition-colors duration-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Post Button */}
          <div className="mt-8 flex justify-end">
            <button className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 transform-gpu">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] opacity-100 transition-opacity duration-300 group-hover:opacity-90"></div>
              <div className="relative flex items-center space-x-2 z-10">
                <span>Post to SolEcho</span>
                <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transform -skew-x-12 -translate-x-full group-hover:animate-shine"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          animation: fadeInUp 0.8s ease forwards;
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

        @keyframes float {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -5px, 0);
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-12deg);
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
            opacity: 0;
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes blob {
          0% {
            transform: translate3d(0px, 0px, 0) scale(1);
          }
          33% {
            transform: translate3d(30px, -50px, 0) scale(1.1);
          }
          66% {
            transform: translate3d(-20px, 20px, 0) scale(0.9);
          }
          100% {
            transform: translate3d(0px, 0px, 0) scale(1);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-shine {
          animation: shine 1.5s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-title {
          animation: fadeInUp 0.8s ease forwards;
        }

        .animate-line {
          animation: fadeInUp 0.8s ease forwards 0.2s;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease forwards;
          opacity: 0;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .transform-gpu {
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          perspective: 1000px;
        }

        .will-change-transform {
          will-change: transform;
        }
      `}</style>
    </section>
  );
}