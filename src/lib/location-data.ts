export interface LocationData {
    name: string;
    slug: string;
    metaTitle: string;
    metaDescription: string;
    description: string;
    neighborhoods: string[];
    mainImage: string;
}

export const locationData: Record<string, LocationData> = {
    "marietta": {
        name: "Marietta",
        slug: "marietta",
        metaTitle: "Marietta Landscaping Services | Robert Bryant Landscaping",
        metaDescription: "Trusted landscaping & lawn care in Marietta, GA. From East Cobb estates to Marietta Square bungalows — premium design, installation, and maintenance.",
        description: "Marietta is our home turf (pun intended). We've been mowing, planting, and building here long enough to know which neighborhoods have clay soil problems and which ones flood after a summer storm. Whether you're in a historic cottage near the Square or a sprawling lot in East Cobb, we know how to make your property shine.",
        neighborhoods: ["East Cobb", "West Cobb", "Marietta Square", "Powers Ferry", "Windy Hill"],
        mainImage: "/images/locations/marietta.jpg"
    },
    "acworth": {
        name: "Acworth",
        slug: "acworth",
        metaTitle: "Acworth, GA Landscaping & Lawn Care | Robert Bryant",
        metaDescription: "Professional landscaping for Acworth, GA. Custom patios, retaining walls, and reliable weekly lawn care for the Lake City and surrounding areas.",
        description: "Acworth's charm is the lake life, and your yard should match it. Whether you're hosting lakeside cookouts in Governors Towne Club or just want your front yard to pop on your evening walk through Bentwater, we design and maintain outdoor spaces that fit right in with Acworth's relaxed-but-polished vibe.",
        neighborhoods: ["Governors Towne Club", "Bentwater", "Brookstone", "Downtown Acworth"],
        mainImage: "/images/locations/acworth.jpg"
    },
    "kennesaw": {
        name: "Kennesaw",
        slug: "kennesaw",
        metaTitle: "Kennesaw Landscaping & Design | Robert Bryant Landscaping",
        metaDescription: "Reliable lawn care and landscape design in Kennesaw, GA. Expert sod installation, hardscaping, and maintenance — on time, every time.",
        description: "Kennesaw homeowners are busy people, and we get it. You want a yard that looks great without eating into your weekends. From Legacy Park to Barrett Parkway, we handle everything from weekly mowing to full design-build projects — so you get the curb appeal without the sweat equity.",
        neighborhoods: ["Legacy Park", "Kennesaw Mountain", "Barrett Parkway", "Due West"],
        mainImage: "/images/locations/kennesaw.jpg"
    },
    "woodstock": {
        name: "Woodstock",
        slug: "woodstock",
        metaTitle: "Woodstock, GA Landscaping & Outdoor Living | Robert Bryant",
        metaDescription: "Premium landscaping in Woodstock, GA. Outdoor living spaces, landscape design, and lawn care for Towne Lake, Eagle Watch, and beyond.",
        description: "Woodstock is growing fast, and your outdoor space should keep up. We specialize in the kind of landscaping that makes you want to spend every evening outside — fire pits, patios, clean lines, and greenery that thrives in Georgia's heat. From Towne Lake to Downtown Woodstock, we're transforming backyards into destinations.",
        neighborhoods: ["Towne Lake", "Downtown Woodstock", "Eagle Watch", "Bradshaw Farm"],
        mainImage: "/images/locations/woodstock.jpg"
    },
    "holly-springs": {
        name: "Holly Springs",
        slug: "holly-springs",
        metaTitle: "Holly Springs, GA Landscaping | Lawn Care & Design",
        metaDescription: "Expert landscaping for Holly Springs, GA homeowners. Sod installation, landscape lighting, and maintenance for new builds and established homes.",
        description: "Holly Springs is one of North Georgia's fastest-growing communities, and we love working here. Whether your home just finished construction and needs that first lawn, or you've been here for years and want a refresh, we offer scalable solutions that make your yard look established, polished, and ready for anything.",
        neighborhoods: ["Harmony on the Lakes", "Holly Springs", "Sixes Road"],
        mainImage: "/images/locations/holly-springs.jpg"
    }
};
