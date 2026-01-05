import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, TrendingUp, Target, CheckCircle2, Link2, Globe } from "lucide-react"

export const metadata = {
    title: "Global Link Network - Off-Page SEO Case Study | Epta Sky",
    description: "Achieved 85% traffic growth and DR improvement from 15 to 32 through strategic link building in 3 months.",
}

export default function GlobalLinkNetworkCaseStudy() {
    return (
        <article className="container mx-auto px-4 py-20 max-w-5xl">
            <Link href="/case-studies" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Case Studies
            </Link>

            <div className="mb-8">
                <div className="text-primary text-sm font-bold mb-2 uppercase tracking-wider">Off-Page SEO</div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Global Link Network</h1>
                <p className="text-xl text-muted-foreground">
                    By leveraging a global link-building strategy with authoritative backlinks, the site gained better visibility and improved domain authority over a short period.
                </p>
            </div>

            <div className="relative w-full h-[500px] mb-12 rounded-2xl overflow-hidden shadow-lg border border-white/5">
                <Image
                    src="/images/network.png"
                    alt="Global Link Network"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="bg-muted/20 rounded-2xl p-8 mb-12 border border-border">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <TrendingUp className="w-6 h-6 mr-2 text-primary" />
                    Key Results
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                        <div className="text-green-400 text-3xl font-bold mb-1">+85%</div>
                        <div className="text-sm text-slate-400">Organic Traffic Growth</div>
                    </div>
                    <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
                        <div className="text-blue-400 text-3xl font-bold mb-1">15 → 32</div>
                        <div className="text-sm text-slate-400">Domain Rating Increase</div>
                    </div>
                    <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-4">
                        <div className="text-purple-400 text-3xl font-bold mb-1">3 Months</div>
                        <div className="text-sm text-slate-400">Campaign Duration</div>
                    </div>
                    <div className="bg-orange-500/5 border border-orange-500/20 rounded-lg p-4">
                        <div className="text-orange-400 text-3xl font-bold mb-1">250+</div>
                        <div className="text-sm text-slate-400">High-Quality Backlinks</div>
                    </div>
                </div>
            </div>

            <div className="prose prose-invert prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl prose-p:text-slate-300 max-w-none">
                <h2 className="flex items-center gap-2 mt-12 mb-6">
                    <Target className="w-7 h-7 text-primary" />
                    The Challenge
                </h2>
                <p>
                    A SaaS company in the project management space approached us with a critical problem: despite having an innovative product and solid on-page SEO, they were being outranked by competitors with inferior products but stronger backlink profiles.
                </p>
                <p>Their main challenges included:</p>
                <ul>
                    <li>Low domain authority (DR 15) limiting their ability to rank for competitive keywords</li>
                    <li>Minimal referring domains (only 45 unique domains)</li>
                    <li>Lack of brand mentions in industry publications</li>
                    <li>Previous link building attempts had resulted in toxic links that needed cleanup</li>
                </ul>

                <h2 className="flex items-center gap-2 mt-12 mb-6">
                    <Globe className="w-7 h-7 text-primary" />
                    Our Link Building Strategy
                </h2>
                <p>
                    We designed a white-hat, sustainable link building campaign focused on quality over quantity:
                </p>

                <h3>Phase 1: Link Profile Cleanup & Analysis (Week 1-2)</h3>
                <p>
                    Before building new links, we needed a clean foundation:
                </p>
                <ul>
                    <li>Conducted comprehensive backlink audit using Ahrefs and Majestic</li>
                    <li>Identified and disavowed 78 toxic/spammy backlinks</li>
                    <li>Analyzed competitor backlink profiles to identify gap opportunities</li>
                    <li>Created a target list of 500+ high-authority prospects</li>
                </ul>

                <h3>Phase 2: Strategic Outreach & Link Acquisition (Week 3-10)</h3>
                <p>
                    We executed a multi-channel link building approach:
                </p>
                <ul>
                    <li><strong>Guest Posting:</strong> Secured 45 guest posts on DR 40+ industry blogs with relevant, engaged audiences</li>
                    <li><strong>Digital PR:</strong> Created newsworthy content that earned coverage in 12 major tech publications including TechCrunch and VentureBeat</li>
                    <li><strong>Resource Page Link Building:</strong> Got featured on 30+ curated resource lists in the project management niche</li>
                    <li><strong>Broken Link Building:</strong> Identified 120 broken links on authoritative sites and secured 28 replacements</li>
                    <li><strong>Strategic Partnerships:</strong> Established relationships with complementary SaaS companies for co-marketing opportunities</li>
                </ul>

                <h3>Phase 3: Content Amplification (Week 11-12)</h3>
                <p>
                    We created linkable assets that naturally attracted backlinks:
                </p>
                <ul>
                    <li>Published an original research study on remote team productivity (earned 85 natural links)</li>
                    <li>Developed a free project management template library (40+ links)</li>
                    <li>Created interactive tools and calculators (25+ links)</li>
                </ul>

                <h2 className="flex items-center gap-2 mt-12 mb-6">
                    <CheckCircle2 className="w-7 h-7 text-primary" />
                    The Results
                </h2>
                <p>
                    The comprehensive link building campaign delivered outstanding results:
                </p>
                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-8">
                    <ul className="space-y-3 mb-0">
                        <li><strong>Domain Rating increased from 15 to 32</strong> - a 113% improvement</li>
                        <li><strong>Organic traffic grew by 85%</strong> - from 8,200 to 15,200 monthly visits</li>
                        <li><strong>Acquired 250+ high-quality backlinks</strong> from DR 30+ domains</li>
                        <li><strong>Referring domains increased by 420%</strong> - from 45 to 234</li>
                        <li><strong>Brand mentions grew by 340%</strong> across the web</li>
                        <li><strong>Average ranking position improved by 18 spots</strong> for target keywords</li>
                    </ul>
                </div>

                <h2 className="mt-12 mb-6">Link Quality Breakdown</h2>
                <p>
                    We maintained strict quality standards throughout the campaign:
                </p>
                <ul>
                    <li>68% of links from DR 40+ domains</li>
                    <li>100% contextual, editorial links (no directories or forum spam)</li>
                    <li>Natural anchor text distribution (75% branded/generic, 25% keyword-rich)</li>
                    <li>Links from 18 different countries, creating a natural global footprint</li>
                </ul>

                <h2 className="mt-12 mb-6">Client Testimonial</h2>
                <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-slate-200 bg-primary/5 py-4 rounded-r-lg">
                    "Epta Sky's link building approach is nothing like the spammy tactics we'd seen before. They focused on building real relationships and creating genuinely valuable content. The authority boost opened doors we didn't even know existed."
                    <footer className="mt-4 not-italic text-sm text-slate-400">
                        — Marcus Chen, Co-Founder & CEO
                    </footer>
                </blockquote>
            </div>

            <div className="mt-16 p-8 bg-primary/10 rounded-2xl border border-primary/20 text-center">
                <h3 className="text-2xl font-bold mb-4">Build Your Link Authority</h3>
                <p className="text-slate-300 mb-6">Let's create a custom link building strategy for your business.</p>
                <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                    Start Building Links
                </Link>
            </div>
        </article>
    )
}
