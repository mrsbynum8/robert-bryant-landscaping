'use client';

import { useEffect } from 'react';

export function Chatbot() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://widgets.leadconnectorhq.com/loader.js";
        script.dataset.resourcesUrl = "https://widgets.leadconnectorhq.com/chat-widget/loader.js";
        script.dataset.widgetId = "698e8f51db9feb10284eb45f";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup not strictly necessary for a global widget, but good practice to remove if component unmounts
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return null;
}
