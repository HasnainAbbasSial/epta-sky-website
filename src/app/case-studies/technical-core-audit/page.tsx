import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, TrendingUp, Target, CheckCircle2, Zap, Settings } from "lucide-react"

export const metadata = {
    title: "Technical Core Audit - Infrastructure Case Study | Epta Sky",
    description: "240% traffic increase and DR growth from 13 to 38 through comprehensive technical SEO audit in 5 months.",
}

export default function TechnicalCoreAuditCaseStudy() {
    return (
        <article className="container mx-auto px-4 py-20 max-w-5xl">
            <Link href="/case-studies" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Case Studies
            </Link>

            <div className="mb-8">
                <div className="text-primary text-sm font-bold mb-2 uppercase tracking-wider">Infrastructure</div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Technical Core Audit</h1>
                <p className="text-xl text-muted-foreground">
                    A full technical audit addressed site speed, mobile responsiveness, and core web vitals issues, resulting in substantial traffic growth and higher search rankings.
                </p>
            </div>

            <div className="relative w-full h-[500px] mb-12 rounded-2xl overflow-hidden shadow-lg border border-white/5">
                <Image
                    src="/images/tech.png"
                    alt="Technical Core Audit"
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
                        <div className="text-green-400 text-3xl font-bold mb-1">+240%</div>
                        <div className="text-sm text-slate-400">Organic Traffic Increase</div>
                    </div>
                    <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
                        <div className="text-blue-400 text-3xl font-bold mb-1">13 → 38</div>
                        <div className="text-sm text-slate-400">Domain Rating Jump</div>
                    </div>
                    <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-4">
                        <div className="text-purple-400 text-3xl font-bold mb-1">5 Months</div>
                        <div className="text-sm text-slate-400">Implementation Period</div>
                    </div>
                    <div className="bg-orange-500/5 border border-orange-500/20 rounded-lg p-4">
                        <div className="text-orange-400 text-3xl font-bold mb-1">95/100</div>
                        <div className="text-sm text-slate-400">PageSpeed Score (was 34)</div>
                    </div>
                </div>
            </div>

            <div className="prose prose-invert prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl prose-p:text-slate-300 max-w-none">
                <h2 className="flex items-center gap-2 mt-12 mb-6">
                    <Target className="w-7 h-7 text-primary" />
                    The Challenge
                </h2>
                <p>
                    An established e-commerce retailer with 15,000+ products approached us after their organic traffic had been declining for 8 consecutive months. Despite investing heavily in content, their rankings were dropping.
                </p>
                <p>Our initial audit revealed severe technical issues:</p>
                <ul>
                    <li><strong>Abysmal site speed:</strong> 8.2 second average load time on mobile</li>
                    <li><strong>Core Web Vitals failures:</strong> Failed all three metrics (LCP, FID, CLS)</li>
                    <li><strong>Crawl budget waste:</strong> 78% of crawl budget spent on low-value pages</li>
                    <li><strong>Mobile UX problems:</strong> Intrusive interstitials, tiny tap targets, horizontal scrolling</li>
                    <li><strong>Indexation issues:</strong> 12,000+ pages indexed that shouldn't be</li>
                    <li><strong>JavaScript rendering problems:</strong> Critical content hidden from search engines</li>
                    <li><strong>Broken internal links:</strong> 340+ broken links creating crawl dead-ends</li>
                </ul>

                <h2 className="flex items-center gap-2 mt-12 mb-6">
                    <Settings className="w-7 h-7 text-primary" />
                    Our Technical SEO Overhaul
                </h2>
                <p>
                    We executed a comprehensive 5-month technical transformation:
                </p>

                <h3>Month 1: Critical Issues & Quick Wins</h3>
                <p>
                    We prioritized fixes that would have immediate impact:
                </p>
                <ul>
                    <li><strong>Image Optimization:</strong> Implemented WebP format, lazy loading, and proper sizing - reduced page weight by 65%</li>
                    <li><strong>Code Minification:</strong> Compressed CSS, JavaScript, and HTML</li>
                    <li><strong>Server Response Time:</strong> Migrated to dedicated server with CDN integration (reduced TTFB from 1.8s to 0.3s)</li>
                    <li><strong>Mobile Fixes:</strong> Removed intrusive interstitials, fixed tap targets, eliminated horizontal scroll</li>
                </ul>

                <h3>Month 2-3: Core Web Vitals Optimization</h3>
                <p>
                    Deep performance optimization to pass Google's Core Web Vitals:
                </p>
                <ul>
                    <li><strong>Largest Contentful Paint (LCP):</strong> Reduced from 4.2s to 1.8s through image optimization and critical CSS</li>
                    <li><strong>First Input Delay (FID):</strong> Improved from 280ms to 45ms by removing render-blocking JavaScript</li>
                    <li><strong>Cumulative Layout Shift (CLS):</strong> Fixed from 0.42 to 0.05 by reserving image space and font optimization</li>
                    <li><strong>Implemented HTTP/2:</strong> Enabled multiplexing for faster resource loading</li>
                    <li><strong>Critical CSS:</strong> Inlined above-the-fold styles to eliminate render blocking</li>
                </ul>

                <h3>Month 3-4: Crawl Optimization & Site Architecture</h3>
                <p>
                    Restructured the site to maximize crawl efficiency:
                </p>
                <ul>
                    <li><strong>Robots.txt Overhaul:</strong> Blocked low-value sections while ensuring critical pages were crawlable</li>
                    <li><strong>XML Sitemap Optimization:</strong> Created dynamic, priority-based sitemaps for products, categories, and content</li>
                    <li><strong>Canonical Tags:</strong> Implemented strategic canonicalization to eliminate duplicate content</li>
                    <li><strong>Internal Linking Audit:</strong> Fixed all broken links and improved link equity flow</li>
                    <li><strong>URL Structure:</strong> Simplified product URLs, implemented breadcrumbs</li>
                    <li><strong>Pagination Handling:</strong> Properly implemented rel="next/prev" for category pages</li>
                </ul>

                <h3>Month 4-5: JavaScript Optimization & Schema</h3>
                <p>
                    Final touches to ensure search engines could fully understand the site:
                </p>
                <ul>
                    <li><strong>JavaScript SEO:</strong> Implemented server-side rendering for critical content</li>
                    <li><strong>Dynamic Rendering:</strong> Set up prerendering for search engine bots</li>
                    <li><strong>Schema Markup:</strong> Added comprehensive structured data (Product, Review, Breadcrumb, Organization)</li>
                    <li><strong>HTTPS Migration:</strong> Ensured full site security with proper 301 redirects</li>
                    <li><strong>Monitoring Setup:</strong> Configured advanced tracking in Search Console, Analytics, and PageSpeed monitoring</li>
                </ul>

                <h2 className="flex items-center gap-2 mt-12 mb-6">
                    <Zap className="w-7 h-7 text-primary" />
                    Performance Transformation
                </h2>
                <p>
                    The technical improvements created a dramatic before/after:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                    <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4">
                        <div className="text-xs text-red-400 font-bold mb-2">BEFORE</div>
                        <ul className="text-sm space-y-1 mb-0">
                            <li>PageSpeed Score: 34/100</li>
                            <li>Load Time: 8.2s</li>
                            <li>Core Web Vitals: Failed</li>
                            <li>Mobile-Friendly: No</li>
                        </ul>
                    </div>
                    <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                        <div className="text-xs text-green-400 font-bold mb-2">AFTER</div>
                        <ul className="text-sm space-y-1 mb-0">
                            <li>PageSpeed Score: 95/100</li>
                            <li>Load Time: 1.4s</li>
                            <li>Core Web Vitals: Passed</li>
                            <li>Mobile-Friendly: Yes</li>
                        </ul>
                    </div>
                </div>

                <h2 className="flex items-center gap-2 mt-12 mb-6">
                    <CheckCircle2 className="w-7 h-7 text-primary" />
                    Business Impact
                </h2>
                <p>
                    The technical overhaul delivered exceptional ROI:
                </p>
                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-8">
                    <ul className="space-y-3 mb-0">
                        <li><strong>240% increase in organic traffic</strong> - from 18,000 to 61,200 monthly visits</li>
                        <li><strong>Domain Rating improved from 13 to 38</strong> - nearly 3x increase</li>
                        <li><strong>Mobile traffic grew by 380%</strong> after Core Web Vitals optimization</li>
                        <li><strong>Bounce rate decreased by 48%</strong> due to faster load times</li>
                        <li><strong>Conversion rate increased by 35%</strong> from organic traffic</li>
                        <li><strong>Featured snippets increased by 420%</strong> - now ranking for 67 featured snippets</li>
                        <li><strong>Average session duration up 52%</strong> - users engaging more with faster site</li>
                    </ul>
                </div>

                <h2 className="mt-12 mb-6">Client Testimonial</h2>
                <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-slate-200 bg-primary/5 py-4 rounded-r-lg">
                    "We had no idea how much our technical issues were costing us. Epta Sky didn't just fix problems - they rebuilt our entire technical foundation. The traffic increase paid for their services 10x over in the first quarter alone."
                    <footer className="mt-4 not-italic text-sm text-slate-400">
                        — Jennifer Rodriguez, VP of E-commerce
                    </footer>
                </blockquote>
            </div>

            <div className="mt-16 p-8 bg-primary/10 rounded-2xl border border-primary/20 text-center">
                <h3 className="text-2xl font-bold mb-4">Fix Your Technical SEO Issues</h3>
                <p className="text-slate-300 mb-6">Get a comprehensive technical audit and transformation plan.</p>
                <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                    Request Technical Audit
                </Link>
            </div>
        </article>
    )
}
