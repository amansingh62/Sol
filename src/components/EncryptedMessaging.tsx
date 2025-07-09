'use client';

import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import { Lock, Shield, MessageSquare, Send, Smile, CheckCheck } from 'lucide-react';

export default function EncryptedMessaging() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<Set<HTMLElement>>(new Set());

  // Memoized observer callback to prevent recreation
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        // Unobserve after animation to reduce overhead
        observerRef.current?.unobserve(entry.target);
      }
    });
  }, []);

  // Initialize observer once
  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    // Observe all collected elements
    elementsRef.current.forEach(el => {
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [handleIntersection]);

  // Optimized ref callback
  const addToObserver = useCallback((el: HTMLElement | null) => {
    if (el && !elementsRef.current.has(el)) {
      elementsRef.current.add(el);
      observerRef.current?.observe(el);
    }
  }, []);

  // Memoized feature data to prevent recreation
  const features = useMemo(() => [
    {
      icon: Lock,
      title: "Military-Grade Encryption",
      description: "Your messages are protected with state-of-the-art encryption algorithms, ensuring maximum security."
    },
    {
      icon: Shield,
      title: "Zero-Knowledge Protocol",
      description: "We can't read your messages even if we wanted to. Your privacy is guaranteed by design."
    },
    {
      icon: MessageSquare,
      title: "Secure File Sharing",
      description: "Share files and media with the same level of encryption and security as your messages."
    }
  ], []);

  return (
    <>
      <style jsx>{`
        .animate-in {
          animation: fadeInUp 0.8s ease forwards;
          will-change: auto;
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

        .phone-container {
          opacity: 0;
          transform: translate3d(0, 30px, 0);
          will-change: auto;
        }

        .message-bubble {
          opacity: 0;
          transform: translate3d(0, 30px, 0);
          transition-delay: 0.3s;
          will-change: auto;
        }

        .message-bubble-animation {
          animation: float 3s ease-in-out infinite;
          will-change: auto;
        }

        .feature-card {
          opacity: 0;
          transform: translate3d(0, 30px, 0);
          will-change: auto;
        }

        .section-header {
          opacity: 0;
          transform: translate3d(0, 30px, 0);
          will-change: auto;
        }

        @keyframes float {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -10px, 0);
          }
        }

        .typing-dot-1 { animation-delay: 0s; }
        .typing-dot-2 { animation-delay: 0.2s; }
        .typing-dot-3 { animation-delay: 0.4s; }

        @media (prefers-reduced-motion: reduce) {
          .animate-in,
          .message-bubble-animation {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <section id="messaging" className="py-24 text-white relative bg-gradient-to-br from-slate-900 via-slate-900/20 to-slate-900">
        <div className="container mx-auto px-4">
          <div
            className="text-center mb-16 section-header"
            ref={addToObserver}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
              <span className="bg-gradient-to-r from-white via-white to-white text-transparent bg-clip-text">
                End-to-End Encrypted Messaging
              </span>
            </h2>
            <div className="w-64 h-1 bg-gradient-to-r from-[#32CD32] via-[#7CFC00] to-[#90EE90] mx-auto"></div>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
              Send private messages that only the recipient can read. Your conversations are secured with military-grade encryption.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left side - Phone mockup */}
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0 phone-container" ref={addToObserver}>
              <div className="relative mx-auto" style={{ maxWidth: '320px' }}>
                {/* Phone frame */}
                <div className="bg-black rounded-[40px] p-3 shadow-2xl border border-white/10">
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[32px] overflow-hidden h-[600px] relative">
                    {/* Phone header */}
                    <div className="bg-gradient-to-r from-[#32CD32] via-[#7CFC00] to-[#90EE90] p-4 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3 border border-white/20">
                        <span className="text-lg font-bold text-black">S</span>
                      </div>
                      <div>
                        <p className="font-bold text-black">SolDart Messenger</p>
                        <p className="text-xs text-black/80">Online</p>
                      </div>
                    </div>

                    {/* Chat area */}
                    <div className="p-4 h-[500px] bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-y-auto flex flex-col">
                      {/* Received message */}
                      <div className="flex mb-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#32CD32] via-[#7CFC00] to-[#90EE90] flex items-center justify-center mr-3 flex-shrink-0">
                          <MessageSquare className="w-5 h-5 text-black" />
                        </div>
                        <div className="bg-white/10 rounded-2xl rounded-tl-none p-4 shadow-lg max-w-[80%] border border-white/10">
                          <p className="text-sm">Hey! How&apos;s it going? 👋</p>
                          <p className="text-xs text-white/60 mt-1">10:24 AM</p>
                        </div>
                      </div>

                      {/* Sent message */}
                      <div className="flex mb-4 justify-end">
                        <div className="bg-gradient-to-r from-[#32CD32] via-[#7CFC00] to-[#90EE90] rounded-2xl rounded-tr-none p-4 shadow-lg max-w-[80%]">
                          <p className="text-sm">I&apos;m great! Just trying out the new SolDart messenger 🚀</p>
                          <div className="flex justify-end items-center mt-1">
                            <p className="text-xs text-white/80 mr-1">10:25 AM</p>
                            <CheckCheck className="w-4 h-4 text-black" />
                          </div>
                        </div>
                      </div>

                      {/* Received message with encryption animation */}
                      <div className="flex mb-4 message-bubble" ref={addToObserver}>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#32CD32] via-[#7CFC00] to-[#90EE90] flex items-center justify-center mr-3 flex-shrink-0">
                          <Shield className="w-5 h-5 text-black" />
                        </div>
                        <div className="bg-white/10 rounded-2xl rounded-tl-none p-4 shadow-lg max-w-[80%] message-bubble-animation border border-white/10">
                          <div className="flex items-center mb-2">
                            <Lock className="w-4 h-4 text-[#32CD32] mr-2" />
                            <p className="text-sm text-[#32CD32] font-medium">End-to-End Encrypted</p>
                          </div>
                          <p className="text-sm">Only you and I can read this message. No one else can access it, not even SolDart! 🛡️</p>
                          <p className="text-xs text-white/60 mt-2">10:26 AM</p>
                        </div>
                      </div>

                      {/* Typing indicator */}
                      <div className="flex mb-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#32CD32] via-[#7CFC00] to-[#90EE90] flex items-center justify-center mr-3 flex-shrink-0">
                          <MessageSquare className="w-5 h-5 text-black" />
                        </div>
                        <div className="bg-white/10 rounded-2xl rounded-tl-none p-4 shadow-lg border border-white/10">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 rounded-full bg-white/60 animate-bounce typing-dot-1"></div>
                            <div className="w-2 h-2 rounded-full bg-white/60 animate-bounce typing-dot-2"></div>
                            <div className="w-2 h-2 rounded-full bg-white/60 animate-bounce typing-dot-3"></div>
                          </div>
                        </div>
                      </div>

                      {/* Input area */}
                      <div className="mt-auto bg-white/10 rounded-full flex items-center p-2 border border-white/10">
                        <button className="w-10 h-10 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors">
                          <Smile className="w-5 h-5" />
                        </button>
                        <input
                          type="text"
                          placeholder="Type a message..."
                          className="flex-1 border-none outline-none px-4 bg-transparent text-white placeholder-white/50"
                          readOnly
                        />
                        <button className="w-10 h-10 rounded-full bg-gradient-to-r from-[#32CD32] via-[#7CFC00] to-[#90EE90] flex items-center justify-center hover:opacity-90 transition-opacity">
                          <Send className="w-5 h-5 text-black" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Features */}
            <div className="w-full lg:w-1/2 space-y-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  ref={addToObserver}
                  className="flex items-start p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 feature-card"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#32CD32] via-[#7CFC00] to-[#90EE90] flex items-center justify-center mr-6 shadow-lg">
                    <feature.icon className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}