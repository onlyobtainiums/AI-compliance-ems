"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const clientLogos = [
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
];

const HeroSection = () => {
  return (
    <section className="relative h-[calc(100vh-80px)] flex items-center justify-center text-center overflow-hidden bg-lekker-neutral-light dark:bg-lekker-neutral-dark py-16 px-4">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-lekker-primary-blue/10 to-lekker-secondary-coral/10 opacity-50 animate-gradient-pulse"></div>

      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        {/* Pre-headline Badge */}
        <span className="inline-block bg-lekker-primary-blue/10 text-lekker-primary-blue text-sm font-semibold px-3 py-1 rounded-full mb-4 animate-fade-in-up">
          Award-Winning Digital Agency
        </span>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-heading font-extrabold leading-tight mb-6 text-lekker-neutral-dark dark:text-lekker-neutral-light animate-fade-in-up delay-100">
          Digital Experiences That Drive Results
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
          Lekkersite crafts stunning, high-performance websites and digital solutions that transform visitors into loyal customers. Your vision, our expertise.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 animate-fade-in-up delay-300">
          <a href="/portfolio">
            <Button className="rounded-full bg-gradient-to-r from-lekker-primary-blue to-lekker-secondary-coral px-8 py-3 text-white text-lg shadow-soft-layered hover:from-lekker-secondary-coral hover:to-lekker-primary-blue transition-all duration-300">
              View Our Work
            </Button>
          </a>
          <a href="/contact">
            <Button variant="outline" className="rounded-full border-2 border-lekker-primary-blue text-lekker-primary-blue px-8 py-3 text-lg hover:bg-lekker-primary-blue hover:text-white transition-colors duration-300 dark:border-lekker-primary-blue dark:text-lekker-primary-blue dark:hover:bg-lekker-primary-blue dark:hover:text-white">
              Book a Free Consultation
            </Button>
          </a>
        </div>

        {/* Trust Elements */}
        <div className="flex flex-col items-center space-y-6 animate-fade-in-up delay-400">
          {/* Star Rating */}
          <div className="flex items-center text-lekker-neutral-dark dark:text-lekker-neutral-light">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-base font-medium">4.9 based on 50+ reviews</span>
          </div>

          {/* Client Logos */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-4">
            {clientLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Client logo ${index + 1}`}
                className="h-8 md:h-10 grayscale opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            ))}
          </div>

          {/* Experience Text */}
          <p className="text-sm text-foreground/70 mt-4">
            10+ Years Experience | 500+ Projects Delivered
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;