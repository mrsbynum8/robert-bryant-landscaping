import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PremiumButton } from '@/components/ui/premium-button';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
    title: string;
    description: string;
    imageSrc: string;
    href: string;
    className?: string;
    reversed?: boolean;
    eyebrow: string;
}

export function ServiceCard({ title, description, imageSrc, href, className, reversed = false, eyebrow }: ServiceCardProps) {
    return (
        <div
            className={cn(
                "group relative flex flex-col md:flex-row overflow-hidden rounded-2xl bg-stone-50 transition-all duration-300 hover:shadow-xl",
                reversed ? "md:flex-row-reverse" : "",
                className
            )}
        >
            {/* Image Container */}
            <div className="relative h-64 w-full md:h-auto md:w-1/2 overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>

            {/* Content Container */}
            <div className="flex w-full md:w-1/2 flex-col justify-center p-8 md:p-12 lg:p-16">
                <div className="mb-4 text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    {eyebrow}
                </div>
                <h3 className="mb-4 font-heading text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground">
                    {title}
                </h3>
                <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                    {description}
                </p>

                <div>
                    <div>
                        <PremiumButton
                            href={href}
                            variant="outline"
                            size="md"
                        >
                            More About {title}
                        </PremiumButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
