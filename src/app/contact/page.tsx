import { ContactForm } from '@/components/landscaping/ContactForm';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Get In Touch | Robert Bryant Landscaping',
    description: 'Ready for a yard you actually love? Get a free estimate for landscaping, lawn care, and hardscaping in Marietta, Acworth, Kennesaw, and Woodstock.',
};

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background font-sans">
            <Navbar />

            <section className="bg-primary py-20 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="mb-4 font-heading text-4xl font-bold md:text-6xl">Let&apos;s Talk About Your Yard</h1>
                    <p className="text-xl text-white/90">We&apos;re friendly, we&apos;re fast, and we don&apos;t do pushy sales calls.</p>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid gap-16 lg:grid-cols-2">
                        <div>
                            <h2 className="mb-6 font-heading text-3xl font-bold text-foreground">Here&apos;s How to Reach Us</h2>
                            <p className="mb-8 text-lg text-muted-foreground">
                                Whether it&apos;s a quick mowing question or a full backyard overhaul, we&apos;d love to hear from you. Drop us a line or just call — we pick up.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-white">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-foreground">Give Us a Ring</h3>
                                        <p className="text-muted-foreground mb-1">Mon–Fri, 8am–6pm (we text back too)</p>
                                        <a href="tel:7067104494" className="text-primary font-bold hover:underline">+1 (706) 710-4494</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-white">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-foreground">Shoot Us an Email</h3>
                                        <p className="text-muted-foreground mb-1">We usually reply same-day</p>
                                        <a href="mailto:info@robertbryant.com" className="text-primary font-bold hover:underline">info@robertbryant.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-white">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-foreground">Where We Work</h3>
                                        <p className="text-muted-foreground">
                                            Marietta, Acworth, Kennesaw, Woodstock, Holly Springs<br />
                                            <span className="text-sm text-gray-400">+ surrounding communities</span>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
