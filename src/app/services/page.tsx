import { ServicesSection } from "@/components/home/ServicesSection";

export const metadata = {
    title: "Our Services | Epta Sky",
    description: "Explore our comprehensive SEO services designed to grow your business.",
};

import { client } from "@/sanity/lib/client";

async function getServices() {
    const query = `*[_type == "service"] {
    title,
    description,
    "iconName": icon,
    slug
  }`
    try {
        return await client.fetch(query)
    } catch (error) {
        console.warn("Failed to fetch services for services page:", error)
        return []
    }
}

export default async function ServicesPage() {
    const services = await getServices()

    return (
        <div className="pt-20">
            <div className="container mx-auto px-4 text-center mb-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Expertise</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    From technical implementation to creative content, we cover every aspect of SEO.
                </p>
            </div>
            <ServicesSection initialServices={services} />

            {/* Process Section */}
            <section className="py-20 bg-background text-center container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12">How We Work</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                        { step: "01", title: "Analyze", desc: "Deep dive into your current performance." },
                        { step: "02", title: "Strategy", desc: "Custom roadmap tailored to your goals." },
                        { step: "03", title: "Execute", desc: "Implementation of best-in-class SEO tactics." },
                        { step: "04", title: "Scale", desc: "Continuous monitoring and optimization." }
                    ].map(item => (
                        <div key={item.step} className="p-6 border border-border rounded-xl relative overflow-hidden group">
                            <span className="text-6xl font-bold text-primary/5 absolute top-0 right-0 -mt-2 -mr-4 group-hover:text-primary/10 transition-colors">
                                {item.step}
                            </span>
                            <h3 className="text-xl font-bold mb-2 relative z-10">{item.title}</h3>
                            <p className="text-sm text-muted-foreground relative z-10">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
