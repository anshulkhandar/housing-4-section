"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col pt-24 pb-8 px-6 lg:px-12 xl:px-16 max-w-[1600px] mx-auto w-full snap-start relative overflow-hidden">
      
      {/* Hero Banner Area */}
      <div className="relative w-full flex-grow rounded-[3rem] overflow-hidden z-10 flex flex-col items-center justify-center text-center px-4 md:px-12 shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
        <Image 
          src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=2000"
          alt="Modern Apartment Living"
          fill
          priority
          className="object-cover"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
        
        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-white flex flex-col items-center max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight mb-6 text-shadow-sm leading-[1.1]">
            Find Your Perfect<br />Apartment in Germany
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl font-light">
            Discover carefully selected apartments that are privately owned, professionally maintained, and designed for comfortable living. We make finding your next home simple, transparent, and stress-free.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
            <Link 
              href="/properties"
              className="bg-brand hover:bg-brand-hover text-white text-base md:text-lg font-medium px-8 py-4 rounded-full shadow-[0_8px_30px_rgba(184,155,94,0.4)] hover:shadow-[0_12px_40px_rgba(184,155,94,0.5)] hover:-translate-y-1 transition-all flex items-center gap-2 border-2 border-brand"
            >
              Explore Apartments <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link 
              href="/contact"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 hover:border-white/50 text-base md:text-lg font-medium px-8 py-4 rounded-full transition-all flex items-center gap-2 hover:-translate-y-1"
            >
              Contact Us <MessageCircle className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
