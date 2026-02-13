import { Sprout } from 'lucide-react';

export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
            <div className="flex flex-col items-center">
                <div className="animate-bounce">
                    <Sprout className="h-16 w-16 text-primary" />
                </div>
                <p className="mt-4 text-lg font-bold text-primary animate-pulse">Loading Landscape...</p>
            </div>
        </div>
    );
}
