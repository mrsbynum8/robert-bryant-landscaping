import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PremiumButton } from '@/components/ui/premium-button';
import { Sprout } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col bg-background font-sans">
            <Navbar />
            <div className="flex flex-col items-center justify-center flex-grow py-32 px-6 text-center">
                <div className="bg-primary/10 p-6 rounded-full mb-8">
                    <Sprout className="h-16 w-16 text-primary" />
                </div>
                <h1 className="font-heading text-6xl font-black text-foreground mb-4">404</h1>
                <h2 className="text-2xl font-bold text-gray-700 mb-6">Looks like you took a wrong turn in the garden.</h2>
                <p className="text-muted-foreground max-w-md mb-10 text-lg">
                    The page you're looking for has been moved, removed, or doesn't exist. Let's get you back on the right path.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <PremiumButton href="/">
                        Return Home
                    </PremiumButton>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full border-2 border-stone-800 bg-transparent px-8 py-3 text-sm font-bold text-stone-800 transition-colors hover:bg-stone-800 hover:text-white"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}
