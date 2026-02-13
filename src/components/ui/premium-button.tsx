import Link from 'next/link';
import { cn } from '@/lib/utils';


interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    className?: string;
}

export function PremiumButton({
    href,
    variant = 'primary',
    size = 'md',
    children,
    className,
    ...props
}: PremiumButtonProps) {
    const baseStyles = "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transform active:scale-95 text-center leading-tight";

    const variants = {
        primary: "bg-secondary text-white hover:bg-secondary/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5", // Orange
        secondary: "bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg", // Green
        outline: "border-2 border-primary text-primary hover:bg-primary/5",
        ghost: "text-primary hover:bg-primary/5",
    };

    const sizes = {
        sm: "min-h-[2.25rem] h-auto py-2 px-4 text-sm",
        md: "min-h-[3rem] h-auto py-3 px-6 text-base",
        lg: "min-h-[3.5rem] h-auto py-4 px-8 text-lg",
    };

    const combinedClassName = cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
    );

    if (href) {
        return (
            <Link href={href} className={combinedClassName}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
}
