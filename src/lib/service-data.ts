export interface ServiceData {
    title: string;
    subtitle: string;
    eyebrow: string;
    description: string;
    image: string;
    benefits: string[];
    features: { title: string; text: string }[];
}

export const servicesData: Record<string, ServiceData> = {
    "lawn-care": {
        title: "Lawn Care & Maintenance",
        subtitle: "Your Weekends Back — Guaranteed",
        eyebrow: "Sit Back & Relax With",
        description: "Let's be honest: nobody dreams about spending Saturday behind a mower. That's where we come in. Our weekly and bi-weekly maintenance plans handle the mowing, edging, fertilization, and all the stuff you'd rather not think about — so your lawn looks incredible and your weekends stay yours.",
        image: "/images/services/lawn-care.jpg",
        benefits: [
            "Consistent Weekly or Bi-Weekly Mowing",
            "Clean Edging & Precision Trimming",
            "Seasonal Weed Control & Fertilization",
            "Fall Leaf Removal & Spring Cleanup",
            "Proactive Disease & Pest Management"
        ],
        features: [
            { title: "We Actually Show Up", text: "Same day, same crew, every time. You'll never wonder if we're coming — we always do." },
            { title: "Turf Science, Not Guesswork", text: "We mow at the right height for your grass type and adjust seasonally. Your lawn notices the difference." },
            { title: "Pro-Grade Equipment", text: "Sharp blades, clean lines, zero clippings left behind. The cut itself is a statement." }
        ]
    },
    "retaining-walls": {
        title: "Retaining Walls",
        subtitle: "Where Engineering Meets Curb Appeal",
        eyebrow: "Tame That Slope With",
        description: "Got a slope that's more problem than feature? We build retaining walls that do double duty — holding back the earth while looking like they belong on a magazine cover. Stone, block, or timber — we'll help you pick the right material and build it to last decades, not just years.",
        image: "/images/services/retaining-wall.jpg",
        benefits: [
            "Erosion Control & Soil Stabilization",
            "Expanded Usable Yard Space",
            "Natural Stone & Modular Block Options",
            "Integrated Steps & Landscape Lighting",
            "Built-to-Last Structural Durability"
        ],
        features: [
            { title: "Engineered Right", text: "Proper drainage, compaction, and base work — the stuff you can't see is what makes it last." },
            { title: "Designed to Match", text: "We select materials that complement your home's style, not compete with it." },
            { title: "More Yard, More Value", text: "A well-built wall literally adds usable square footage to your property." }
        ]
    },
    "landscape-design": {
        title: "Landscape Design",
        subtitle: "Your Vision, Our Green Thumb",
        eyebrow: "Dream Big With",
        description: "Great landscaping doesn't happen by accident — it starts with a plan. We sit down with you, learn what you love (and what you hate mowing), and design a property that's beautiful, low-maintenance, and completely yours. From the first sketch to the final mulch ring, we've got you covered.",
        image: "/images/services/landscape-design.jpg",
        benefits: [
            "2D & 3D Landscape Plans",
            "Curated Plant Selection & Placement",
            "Smart Drainage Solutions",
            "Outdoor Lighting Design",
            "Full Property Renovations & Makeovers"
        ],
        features: [
            { title: "It's Your Style", text: "We design around your taste, your budget, and how much yard work you actually want to do (hint: less is usually the answer)." },
            { title: "Georgia-Smart Plants", text: "We choose native and adapted species that love our climate — so your yard thrives without babysitting." },
            { title: "Turnkey Execution", text: "We don't just hand you a drawing and wave goodbye. We design it, source it, and install it." }
        ]
    },
    "sod-installation": {
        title: "Sod Installation",
        subtitle: "A New Lawn by Dinnertime",
        eyebrow: "Get Instant Green With",
        description: "Seed is great if you've got three months and a lot of patience. We don't. We install premium Bermuda, Zoysia, and Fescue sod with proper soil prep so your new lawn roots deep and stays green. One day's work, years of payoff.",
        image: "/images/services/sod-installation.jpg",
        benefits: [
            "Old Grass Removal & Professional Grading",
            "Soil Conditioning & Deep Tilling",
            "Premium Sod Varieties (Bermuda, Zoysia, Fescue)",
            "Seamless Layout & Installation",
            "Post-Install Care Guide & Follow-Up"
        ],
        features: [
            { title: "Instant Gratification", text: "Bare dirt in the morning, lush green lawn by the afternoon. It never gets old." },
            { title: "Prep Is Everything", text: "We don't just slap sod on dirt. We grade, till, and condition the soil so your grass actually thrives." },
            { title: "Farm-Fresh Sod", text: "Cut from local farms and delivered on install day — not sitting on a pallet in the sun for a week." }
        ]
    },
    "tree-shrub-care": {
        title: "Tree & Shrub Care",
        subtitle: "Healthy Plants, Happy Yard",
        eyebrow: "Keep Things Growing With",
        description: "A beautiful yard isn't just about the grass — it's the canopy above it, the hedges framing it, and the ornamentals that give it character. We handle the pruning, feeding, and disease prevention so your woody plants stay healthy, safe, and looking sharp year-round.",
        image: "/images/services/tree-shrub-care.jpg",
        benefits: [
            "Corrective & Structural Pruning",
            "Deep Root Fertilization",
            "Disease & Insect Diagnosis + Treatment",
            "Hedge Trimming & Artful Shaping",
            "Seasonal Dormant Oil Applications"
        ],
        features: [
            { title: "Prevention First", text: "We catch problems early — before that one branch becomes a roof repair bill." },
            { title: "Safety Matters", text: "Dead limbs and overgrown canopies aren't just ugly — they're dangerous. We handle it." },
            { title: "Intentional Aesthetics", text: "We prune and shape with purpose, so your landscape looks curated, not neglected." }
        ]
    }
};
