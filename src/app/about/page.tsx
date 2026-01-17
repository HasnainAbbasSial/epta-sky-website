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
            <div className="text-center max-w-4xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
                    We Build <span className="text-primary">Digital Empires</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    Epta Sky is not just an SEO agency. We are your strategic growth partner,
                    transforming search engine visibility into sustainable revenue through
                    data-driven precision and technical excellence.
                </p>
            </div>

            {/* Founder Section */}
            <section className="bg-slate-900/50 border border-white/5 rounded-3xl p-8 md:p-12 mb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 items-center relative z-10">
                    <div className="relative h-[300px] w-full md:w-[300px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 mx-auto">
                        <Image
                            src="/images/founder-ceo.jpeg"
                            alt="Hasnain Abbas - Founder & CEO"
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 300px"
                        />
                    </div>
                    <div className="text-center md:text-left">
                        <div className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                            Founder & CEO
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Hasnain Abbas</h2>
                        <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                            "I built Epta Sky with a single mission: to cut through the noise of generic marketing.
                            We don't just chase traffic; we chase revenue. My approach combines deep technical
                            audits with aggressive content strategies to dominate niche markets globally."
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <Button href="https://www.linkedin.com/in/hasnain-abbas-eptasky/" variant="outline" className="gap-2">
                                <span className="font-bold text-primary">in</span> Connect on LinkedIn
                            </Button>
                            <Button href="/contact">Book a Strategy Call</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Epta Sky */}
            <section className="mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Industry Leaders Choose Us</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We move faster and deeper than traditional agencies. Here is how we deliver unfair advantages for our clients.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-muted/30 p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">Data-First Strategy</h3>
                        <p className="text-slate-400 leading-relaxed">We don't guess. We analyze millions of data points to find low-competition, high-value keywords that your competitors missed.</p>
                    </div>

                    <div className="bg-muted/30 p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">Technical Excellence</h3>
                        <p className="text-slate-400 leading-relaxed">A beautiful site means nothing if Google can't crawl it. We build and optimize technical infrastructures for maximum indexability and speed.</p>
                    </div>

                    <div className="bg-muted/30 p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">Global Reach</h3>
                        <p className="text-slate-400 leading-relaxed">Based in Pakistan, serving the world. We bring international standards of quality at competitive rates, managing campaigns across US, UK, and UAE.</p>
                    </div>
                </div>
            </section>

            {/* Stats/Facts - Credible */}
            <section className="bg-slate-900 border-y border-white/10 py-16 mb-24 relative">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        <div>
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">3+</h3>
                            <p className="text-sm text-primary font-medium tracking-wide uppercase">Years Experience</p>
                        </div>
                        <div>
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">50+</h3>
                            <p className="text-sm text-primary font-medium tracking-wide uppercase">Projects Delivered</p>
                        </div>
                        <div>
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">93%</h3>
                            <p className="text-sm text-primary font-medium tracking-wide uppercase">Client Retention</p>
                        </div>
                        <div>
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</h3>
                            <p className="text-sm text-primary font-medium tracking-wide uppercase">Support Availability</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden bg-muted border border-white/10 shadow-2xl">
                    {/* About Image */}
                    <Image
                        src="/images/team.png"
                        alt="Epta Sky Team Office"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
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
        </div>
    )
}
