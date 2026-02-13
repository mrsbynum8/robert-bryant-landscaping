'use client';

import { useState } from 'react';
import { PremiumButton } from '@/components/ui/premium-button';
import { Upload, CheckCircle } from 'lucide-react';

export function ContactForm() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        // Simulate submission
        setTimeout(() => {
            setFormStatus('success');
        }, 1500);
    };

    if (formStatus === 'success') {
        return (
            <div className="flex flex-col items-center justify-center p-12 text-center bg-green-50 rounded-xl border border-green-100">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">We Got Your Message! 🎉</h3>
                <p className="text-green-700">We&apos;ll be in touch within 24 hours — usually much sooner. Talk soon!</p>
                <PremiumButton
                    onClick={() => setFormStatus('idle')}
                    variant="ghost"
                    size="sm"
                    className="mt-6 text-green-800 underline hover:bg-green-100"
                >
                    Send another message
                </PremiumButton>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-xl border-t-4 border-secondary">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-gray-700">Your Name</label>
                    <input
                        required
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="e.g. Jane Smith"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-gray-700">Phone Number</label>
                    <input
                        required
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="+1 (706) 710-4494"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-gray-700">Email Address</label>
                <input
                    required
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-bold text-gray-700">What Do You Need Help With?</label>
                <select
                    id="service"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                >
                    <option value="lawn-care">Lawn Care & Maintenance</option>
                    <option value="hardscaping">Hardscaping (Patios/Walkways)</option>
                    <option value="design">Landscape Design</option>
                    <option value="sod">Sod Installation</option>
                    <option value="irrigation">Irrigation / Sprinklers</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-gray-700">Tell Us More (Optional)</label>
                <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Anything we should know? Yard size, timeline, dream features..."
                />
            </div>

            <div className="space-y-2">
                <span className="text-sm font-bold text-gray-700">Upload Photos (Optional)</span>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group">
                    <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400 group-hover:text-primary transition-colors" />
                        <div className="flex text-sm text-gray-600">
                            <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary/80 focus-within:outline-none">
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                </div>
            </div>

            <PremiumButton
                type="submit"
                size="lg"
                className="w-full"
                disabled={formStatus === 'submitting'}
            >
                {formStatus === 'submitting' ? 'Sending...' : 'Send My Request'}
            </PremiumButton>
        </form>
    );
}
