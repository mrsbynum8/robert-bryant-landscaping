'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { PremiumButton } from '@/components/ui/premium-button';
import { cn } from '@/lib/utils';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '/#services' },
        { name: 'Locations', href: '/#locations' },
        { name: 'About', href: '/#about' },
    ];

    return (
        <>
            <header
                className={cn(
                    "fixed z-50 transition-all duration-500 ease-[bezier(0.4,0,0.2,1)]",
                    isScrolled
                        ? "top-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-7xl rounded-2xl bg-white shadow-2xl border border-white/20 py-3"
                        : "top-0 left-0 right-0 w-full bg-transparent py-6"
                )}
            >
                <div className={cn(
                    "container mx-auto transition-all duration-500",
                    isScrolled ? "px-6" : "px-4 md:px-6"
                )}>
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 z-50">
                            <span className={cn(
                                "font-heading font-black text-2xl tracking-tighter uppercase transition-colors duration-300",
                                isScrolled ? "text-primary" : "text-white"
                            )}>
                                Robert Bryant <span className={cn(isScrolled ? "text-secondary" : "text-secondary")}>Landscaping</span>
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "font-medium text-sm transition-colors hover:text-secondary",
                                        isScrolled ? "text-stone-600 hover:text-primary" : "text-white/90"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* CTA & Mobile Toggle */}
                        <div className="flex items-center gap-4">
                            <PremiumButton href="tel:7067104494" size="sm" className="hidden sm:inline-flex shadow-none">
                                Call for a Quote
                            </PremiumButton>

                            <PremiumButton
                                variant="ghost"
                                size="sm"
                                className="md:hidden z-50 px-2 min-w-[40px]"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? (
                                    <X className={cn("h-6 w-6", "text-stone-800")} />
                                ) : (
                                    <Menu className={cn("h-6 w-6", isScrolled ? "text-stone-800" : "text-white")} />
                                )}
                            </PremiumButton>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 md:hidden animation-fade-in">
                    <nav className="flex flex-col items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="font-heading text-3xl font-black uppercase tracking-tight text-stone-800 hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="tel:7067104494"
                            className="flex items-center gap-2 text-xl font-bold text-primary mt-4"
                        >
                            <Phone className="h-5 w-5" /> (706) 710-4494
                        </Link>
                        <PremiumButton href="tel:7067104494" size="lg" onClick={() => setIsMobileMenuOpen(false)}>
                            Call for a Quote
                        </PremiumButton>
                    </nav>
                </div>
            )}
        </>
    );
}
