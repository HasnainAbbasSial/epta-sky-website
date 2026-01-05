import Image from "next/image"
import { Button } from "@/components/ui/Button"

export const metadata = {
    title: "About Us | Epta Sky",
    description: "Learn more about Epta Sky, our mission, and our team.",
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            {/* Hero */}
            <div className="text-center max-w-4xl mx-auto mb-20">
                <h1 className="text-4xl md:text-6xl font-bold mb-8">We Are Epta Sky</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    A team of passionate digital marketers, developers, and strategists dedicated to redefining
                    what's possible in the world of Search Engine Optimization.
                </p>
            </div>

            {/* Mission */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden bg-muted">
                    {/* About Image */}
                    <Image
                        src="/images/team.png"
                        alt="Epta Sky Team Office"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                    <p className="text-muted-foreground mb-6 text-lg">
                        To democratize digital visibility. We believe that every business, regardless of size,
                        deserves to be found by its audience. We strive to provide transparent, ethical, and
                        high-impact SEO solutions that drive real business results.
                    </p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-primary rounded-full" />
                            <span>Data-Driven Decision Making</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-primary rounded-full" />
                            <span>Total Transparency</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-primary rounded-full" />
                            <span>Continuous Innovation</span>
                        </li>
                    </ul>
                    <Button href="/mission" variant="outline" className="mr-4">Read Full Mission</Button>
                    <Button href="/contact">Work With Us</Button>
                </div>
            </section>

            {/* Stats/Facts */}
            <section className="bg-primary/5 rounded-2xl p-12 mb-24">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <h3 className="text-4xl font-bold text-primary mb-2">3+</h3>
                        <p className="text-sm text-muted-foreground">Years Experience</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
                        <p className="text-sm text-muted-foreground">Clients Served</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-primary mb-2">1M+</h3>
                        <p className="text-sm text-muted-foreground">Keywords Ranked</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-primary mb-2">24/7</h3>
                        <p className="text-sm text-muted-foreground">Support</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
