import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, TrendingUp, Target, CheckCircle2, Calendar, BarChart3 } from "lucide-react"

export const metadata = {
    title: "Scale Your Growth - Analytics Case Study | Epta Sky",
    description: "How we achieved 140% traffic increase and improved domain rating from 10 to 29 in just 3 months.",
}

export default function AnalyticsCaseStudy() {
    return (
        <article className="container mx-auto px-4 py-20 max-w-5xl">
            <Link href="/case-studies" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Case Studies
            </Link>

            <div className="mb-8">
                <div className="text-primary text-sm font-bold mb-2 uppercase tracking-wider">Analytics</div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Scale Your Growth</h1>
                <p className="text-xl text-muted-foreground">
                    Through a targeted SEO strategy focusing on content optimization, keyword restructuring, and internal linking improvements, the website saw a steady traffic increase.
                </p>
            </div>

            <div className="relative w-full h-[500px] mb-12 rounded-2xl overflow-hidden shadow-lg border border-white/5">
                <Image
                    src="/images/growth.png"
                    alt="Scale Your Growth"
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
                        <div className="text-green-400 text-3xl font-bold mb-1">+140%</div>
                        <div className="text-sm text-slate-400">Traffic Increase</div>
                    </div>
                    <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
                        <div className="text-blue-400 text-3xl font-bold mb-1">10 → 29</div>
                        <div className="text-sm text-slate-400">Domain Rating Growth</div>
                    </div>
                    <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-4">
                        <div className="text-purple-400 text-3xl font-bold mb-1">3 Months</div>
                        <div className="text-sm text-slate-400">Time to Results</div>
                    </div>
                    <div className="bg-orange-500/5 border border-orange-500/20 rounded-lg p-4">
                        <div className="text-orange-400 text-3xl font-bold mb-1">85%</div>
                        <div className="text-sm text-slate-400">Keyword Rankings Improved</div>
                    </div>
                </div>
            </div>

            <div className="prose prose-invert prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl prose-p:text-slate-300 max-w-none">
                <h2 className="flex items-center gap-2 mt-12 mb-6">
                    <Target className="w-7 h-7 text-primary" />
                    The Challenge
                </h2>
                <p>
                    Our client, a rapidly growing e-commerce platform in the health and wellness sector, was struggling with stagnant organic traffic despite having quality products and competitive pricing. Their website had decent content but suffered from:
                </p>
                <ul>
                    <li>Poor keyword targeting and cannibalization issues</li>
                    <li>Weak internal linking structure preventing link equity distribution</li>
                    <li>Outdated content that no longer matched search intent</li>
                    <li>Limited analytics tracking, making it impossible to measure content performance</li>
                </ul>

                <h2 className="flex items-center gap-2 mt-12 mb-6">
                    <BarChart3 className="w-7 h-7 text-primary" />
                    Our Approach
                </h2>
                <p>
                    We implemented a comprehensive analytics-driven SEO strategy divided into three core phases:
                </p>

                <h3>Phase 1: Deep Analytics Audit (Week 1-2)</h3>
                <p>
                    We began by implementing advanced tracking using Google Analytics 4, Google Search Console, and custom event tracking to understand user behavior. This revealed:
                </p>
                <ul>
                    <li>High bounce rates on product category pages (78%)</li>
                    <li>Strong engagement on blog content but weak conversion paths</li>
                    <li>Mobile users represented 65% of traffic but had poor UX</li>
                </ul>

                <h3>Phase 2: Content Optimization & Keyword Restructuring (Week 3-8)</h3>
                <p>
                    Armed with data insights, we executed a targeted content overhaul:
                </p>
                <ul>
                    <li><strong>Keyword Mapping:</strong> Restructured 150+ pages to target specific long-tail keywords with commercial intent</li>
                    <li><strong>Content Updates:</strong> Rewrote 45 critical pages to match current search intent and user questions</li>
                    <li><strong>Internal Linking:</strong> Built a strategic internal linking framework connecting high-authority pages to conversion-focused landing pages</li>
                    <li><strong>Schema Markup:</strong> Implemented product, review, and FAQ schema to enhance SERP visibility</li>
                </ul>

                <h3>Phase 3: Performance Monitoring & Iteration (Week 9-12)</h3>
                <p>
                    We established weekly review cycles, analyzing:
                </p>
                <ul>
                    <li>Rankings movement for target keywords</li>
                    <li>Click-through rates from search results</li>
                    <li>User engagement metrics and conversion paths</li>
                    <li>Technical performance (Core Web Vitals, page speed)</li>
                </ul>

                <h2 className="flex items-center gap-2 mt-12 mb-6">
                    <CheckCircle2 className="w-7 h-7 text-primary" />
                    The Results
                </h2>
                <p>
                    Within just 3 months, the data-driven approach delivered exceptional results:
                </p>
                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-8">
                    <ul className="space-y-3 mb-0">
                        <li><strong>140% increase in organic traffic</strong> - from 12,500 to 30,000 monthly visits</li>
                        <li><strong>Domain Rating jumped from 10 to 29</strong> - a 190% improvement</li>
                        <li><strong>85% of target keywords</strong> moved to page 1 of Google</li>
                        <li><strong>Bounce rate decreased by 32%</strong> through improved content relevance</li>
                        <li><strong>Conversion rate improved by 23%</strong> from organic traffic</li>
                    </ul>
                </div>

                <h2 className="mt-12 mb-6">Client Testimonial</h2>
                <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-slate-200 bg-primary/5 py-4 rounded-r-lg">
                    "Epta Sky transformed how we approach SEO. Their analytics-first methodology gave us clear visibility into what was working and what wasn't. The results speak for themselves - we're now competing with industry leaders in search rankings."
                    <footer className="mt-4 not-italic text-sm text-slate-400">
                        — Sarah Mitchell, Marketing Director
                    </footer>
                </blockquote>
            </div>

            <div className="mt-16 p-8 bg-primary/10 rounded-2xl border border-primary/20 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Scale Your Growth?</h3>
                <p className="text-slate-300 mb-6">Let's discuss how data-driven SEO can transform your business.</p>
                <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                    Get Started Today
                </Link>
            </div>
        </article>
    )
}
