import Link from 'next/link';

export function ServiceAreas() {
    const locations = [
        { name: 'Marietta', href: '/locations/marietta' },
        { name: 'Acworth', href: '/locations/acworth' },
        { name: 'Kennesaw', href: '/locations/kennesaw' },
        { name: 'Woodstock', href: '/locations/woodstock' },
        { name: 'Holly Springs', href: '/locations/holly-springs' },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="mb-12 font-heading text-4xl font-black uppercase tracking-tight text-foreground">
                    Your Neighbors Already Know Us
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {locations.map((location) => (
                        <Link
                            key={location.name}
                            href={location.href}
                            className="rounded-xl bg-[#FDF8F3] px-8 py-4 text-lg font-bold text-[#594a3c] shadow-sm ring-1 ring-inset ring-[#E6D5C3] transition-all hover:scale-105 hover:bg-[#F5EBE0] hover:shadow-md"
                        >
                            {location.name}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
