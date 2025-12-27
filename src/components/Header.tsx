"use client";

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-background/80 backdrop-blur-sm shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <span className="text-2xl font-heading font-bold text-lekker-primary-blue">
            Lekkersite
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    "relative text-base font-medium text-foreground transition-colors hover:text-lekker-primary-blue",
                    isActive && "text-lekker-primary-blue",
                  )
                }
              >
                {link.name}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-lekker-primary-blue transition-all duration-300 ease-out",
                    "group-hover:w-full",
                    "w-0", // Default state
                    ({ isActive }) => isActive && "w-full", // Active state
                  )}
                />
              </NavLink>
            ))}
            <Button
              className="ml-4 rounded-full bg-gradient-to-r from-lekker-primary-blue to-lekker-secondary-coral px-6 py-3 text-white shadow-soft-layered hover:from-lekker-secondary-coral hover:to-lekker-primary-blue transition-all duration-300"
            >
              Start Your Project
            </Button>
          </nav>
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                <span className="sr-only">Toggle mobile menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col justify-between p-6">
              <nav className="flex flex-col items-center space-y-6 pt-16">
                {navLinks.map((link, index) => (
                  <NavLink
                    key={link.name}
                    to={link.href}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      cn(
                        "text-2xl font-heading font-bold text-foreground transition-colors hover:text-lekker-primary-blue",
                        isActive && "text-lekker-primary-blue",
                      )
                    }
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>
              <div className="mt-auto pb-8">
                <Button
                  onClick={closeMobileMenu}
                  className="w-full rounded-full bg-gradient-to-r from-lekker-primary-blue to-lekker-secondary-coral px-6 py-3 text-white shadow-soft-layered hover:from-lekker-secondary-coral hover:to-lekker-primary-blue transition-all duration-300"
                >
                  Start Your Project
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
};

export default Header;