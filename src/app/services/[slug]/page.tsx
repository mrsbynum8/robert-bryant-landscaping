import { servicesData } from '@/lib/service-data';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

import { ContactForm } from '@/components/landscaping/ContactForm';
import { Check, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({
        slug,
    }));
}

// Correctly typing params as a generic/promise-based structure for Next.js 15+ 
// But keeping it simple for now as { params: { slug: string } } works in most recent versions
interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: PageProps) {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        notFound();
    }

    return (
        <div className="flex min-h-screen flex-col bg-background font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="container relative z-10 mx-auto px-6 text-center text-white">
                    <div className="mb-6 inline-block rounded-full bg-secondary/90 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-white">
                        Expert Service
                    </div>
                    <h1 className="mb-4 font-heading text-4xl font-black uppercase tracking-tight sm:text-6xl drop-shadow-xl">
                        {service.title}
                    </h1>
                    <p className="mx-auto max-w-2xl text-xl font-medium text-gray-200">
                        {service.subtitle}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="grid gap-16 lg:grid-cols-2">

                        {/* Left Column: Details */}
                        <div>
                            <Link href="/#services" className="mb-8 inline-flex items-center text-sm font-bold text-muted-foreground hover:text-primary">
                                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                            </Link>

                            <h2 className="mb-6 font-heading text-3xl font-black uppercase tracking-tight text-foreground">
                                {service.title} Done Right, in Atlanta
                            </h2>
                            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>

                            <div className="mb-10 rounded-xl bg-muted p-8">
                                <h3 className="mb-6 font-bold uppercase tracking-wide text-xl text-foreground">What You Get</h3>
                                <ul className="space-y-4">
                                    {service.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <Check className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                                            <span className="text-foreground/80">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-8">
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="border-l-4 border-primary pl-6">
                                        <h4 className="font-bold text-lg text-foreground mb-1">{feature.title}</h4>
                                        <p className="text-muted-foreground">{feature.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: CTA Form */}
                        <div className="lg:-mt-12 sticky top-24">
                            <div className="rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-gray-900/5">
                                <div className="bg-primary px-8 py-6 rounded-t-xl text-center">
                                    <h3 className="text-2xl font-black uppercase tracking-tight text-white">Get Your Free Quote</h3>
                                    <p className="text-white/80 text-sm mt-1">No obligation — just honest pricing for {service.title}</p>
                                </div>
                                <div className="p-2">
                                    {/* Reusing ContactForm but without the outer padding styling as it has its own container here */}
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
