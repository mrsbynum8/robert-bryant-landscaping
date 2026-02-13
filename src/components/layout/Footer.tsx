import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    const services = [
        { name: 'Lawn Care', href: '/services/lawn-care' },
        { name: 'Retaining Walls', href: '/services/retaining-walls' },
        { name: 'Landscape Design', href: '/services/landscape-design' },
        { name: 'Sod Installation', href: '/services/sod-installation' },
        { name: 'Tree & Shrub Care', href: '/services/tree-shrub-care' },
    ];

    const locations = [
        { name: 'Marietta, GA', href: '/locations/marietta' },
        { name: 'Acworth, GA', href: '/locations/acworth' },
        { name: 'Kennesaw, GA', href: '/locations/kennesaw' },
        { name: 'Woodstock, GA', href: '/locations/woodstock' },
        { name: 'Holly Springs, GA', href: '/locations/holly-springs' },
    ];

    return (
        <footer className="bg-foreground text-white border-t border-white/10">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

                    {/* Brand & Contact */}
                    <div>
                        <h2 className="text-2xl font-black font-heading text-white mb-6 uppercase tracking-wider">
                            Robert Bryant <span className="text-primary">Landscaping</span>
                        </h2>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Your neighbors trust us with their yards — and we take that seriously. Premium landscaping, hardscaping, and lawn care across the Atlanta Metro.
                        </p>
                        <div className="space-y-4">
                            <a href="tel:7067104494" className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors">
                                <Phone className="h-5 w-5 text-secondary" /> (706) 710-4494
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-black font-heading text-white mb-6 uppercase tracking-wider">Our Services</h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <Link href={service.href} className="text-gray-400 hover:text-secondary transition-colors block">
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Areas We Serve (SEO) */}
                    <div>
                        <h3 className="text-lg font-black font-heading text-white mb-6 uppercase tracking-wider">Areas We Serve</h3>
                        <ul className="space-y-3">
                            {locations.map((city) => (
                                <li key={city.name}>
                                    <Link href={city.href} className="text-gray-400 hover:text-secondary transition-colors block">
                                        Landscaping in {city.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Empty column or remove if grid needs adjustment. 
                        Keeping it simple: verify grid-cols. 
                        Original: lg:grid-cols-4. 
                        We can reduce to lg:grid-cols-3 or leave it empty/spacer.
                        Let's just remove the content for now or change grid cols.
                    */}

                </div>

                <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {currentYear} Robert Bryant Landscaping. All rights reserved. Made with ❤️ in Marietta, GA.</p>
                </div>
            </div>
        </footer>
    );
}
