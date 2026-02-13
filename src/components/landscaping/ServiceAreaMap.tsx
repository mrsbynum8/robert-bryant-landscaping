import { MapPin } from 'lucide-react';

export function ServiceAreaMap() {
    return (
        <div className="rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-gray-900/5">
            <div className="bg-secondary px-6 py-4 rounded-t-xl flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <MapPin className="h-5 w-5" /> Service Area
                    </h3>
                    <p className="text-white/90 text-xs mt-0.5">Marietta &bull; Acworth &bull; Kennesaw &bull; Woodstock &bull; Holly Springs</p>
                </div>
            </div>
            <div className="relative aspect-video w-full overflow-hidden rounded-b-xl bg-muted">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d211756.2413498838!2d-84.549927!3d34.023348!3m2!1i1024!2i768!4f13.1!2m1!1sMarietta%2C%20Acworth%2C%20Kennesaw%2C%20Woodstock%2C%20Holly%20Springs!5e0!3m2!1sen!2sus!4v1707758928421!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full"
                />
            </div>
        </div>
    );
}
