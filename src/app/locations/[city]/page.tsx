import { locationData } from '@/lib/location-data';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PremiumButton } from '@/components/ui/premium-button';
import { ContactForm } from '@/components/landscaping/ContactForm';
import { MapPin, Check } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateStaticParams() {
    return Object.keys(locationData).map((city) => ({
        city,
    }));
}

interface PageProps {
    params: Promise<{ city: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { city } = await params;
    const location = locationData[city];

    if (!location) return {};

    return {
        title: location.metaTitle,
        description: location.metaDescription,
    };
}

export default async function LocationPage({ params }: PageProps) {
    const { city } = await params;
    const location = locationData[city];

    if (!location) {
        notFound();
    }

    return (
        <div className="flex min-h-screen flex-col bg-background font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={location.mainImage}
                        alt={`Landscaping in ${location.name}, GA`}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="container relative z-10 mx-auto px-6 text-center text-white">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/90 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-white">
                        <MapPin className="h-4 w-4" /> Serving {location.name}, GA
                    </div>
                    <h1 className="mb-4 font-heading text-4xl font-black uppercase tracking-tight sm:text-6xl drop-shadow-xl">
                        Premier Landscaping Services in <span className="text-secondary">{location.name}</span>
                    </h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="grid gap-16 lg:grid-cols-2">

                        {/* Left Column: Details */}
                        <div>
                            <h2 className="mb-6 font-heading text-3xl font-black uppercase tracking-tight text-foreground">
                                Your Go-To {location.name} Landscapers
                            </h2>
                            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                                {location.description}
                            </p>

                            <div className="mb-8">
                                <h3 className="mb-4 font-heading text-xl font-black uppercase tracking-wide text-foreground">Neighborhoods We Serve</h3>
                                <div className="flex flex-wrap gap-3">
                                    {location.neighborhoods.map((hood) => (
                                        <span key={hood} className="bg-muted px-3 py-1 rounded-full text-sm font-medium text-muted-foreground border border-border">
                                            {hood}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-10 rounded-xl bg-primary/5 p-8 border border-primary/10">
                                <h3 className="mb-4 font-bold uppercase tracking-wide text-xl text-foreground">Why {location.name} Homeowners Pick Us</h3>
                                <ul className="space-y-4">
                                    {[
                                        "We know the local soil, slopes, and drainage quirks",
                                        "HOA-friendly designs that pass inspection every time",
                                        "Fast, reliable service built for busy schedules",
                                        "Fully licensed and insured — your property is protected"
                                    ].map((benefit, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                                            <span className="text-foreground/80">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded-xl bg-muted p-8 text-center">
                                <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Ready to love your yard again?</h3>
                                <PremiumButton href="#contact">
                                    Get Your Free {location.name} Quote
                                </PremiumButton>
                            </div>
                        </div>

                        {/* Right Column: CTA Form */}
                        <div id="contact" className="lg:-mt-12 sticky top-24">
                            <div className="rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-gray-900/5">
                                <div className="bg-secondary px-8 py-6 rounded-t-xl text-center">
                                    <h3 className="text-2xl font-black uppercase tracking-tight text-white">Your Free {location.name} Estimate</h3>
                                    <p className="text-white/90 text-sm mt-1">Local crews, fast response times, zero pressure</p>
                                </div>
                                <div className="p-2">
                                    {/* Reusing ContactForm */}
                                    <ContactForm />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
