import { client } from "@/sanity/lib/client"
import { PortableText } from "@portabletext/react"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import {
    ArrowLeft, CheckCircle2,
    Search, Layout, Tag, Image as ImageIcon, Link as LinkIcon,
    Globe, Megaphone, Share2, Users,
    MapPin, List, Newspaper, Star,
    Zap, Bot, Smartphone, Lock,
    AlertTriangle, BarChart, MousePointerClick,
    Filter, TrendingUp, HelpCircle,
    BookOpen, PenTool, Mail, FileText
} from "lucide-react"

export const revalidate = 60

// Icon Mapping
const iconMap: Record<string, any> = {
    Search, Layout, Tag, ImageIcon, LinkIcon,
    Globe, Megaphone, Share2, Users,
    MapPin, List, Newspaper, Star,
    Zap, Bot, Smartphone, Lock,
    AlertTriangle, BarChart, MousePointerClick,
    Filter, TrendingUp, HelpCircle,
    BookOpen, PenTool, Mail, FileText
}

// Data Structure
interface ServiceFeature {
    title: string
    description: string
    icon: string
}

interface ServiceData {
    title: string
    description: string // Tagline
    intro: string
    featuresTitle: string
    features: ServiceFeature[]
    conclusion: string
}

// Fallback Content
const fallbackServices: Record<string, ServiceData> = {
    "on-page-seo": {
        title: "On-Page SEO",
        description: "Crafting the Perfect Foundation for Search",
        intro: "In the world of digital marketing, On-Page SEO is the only factor where you have 100% control over the outcome. It is far more than just \"using the right keywords.\" It is about creating a seamless, intuitive, and informative experience for both search engine crawlers and human readers. Our On-Page SEO service focuses on aligning your website’s elements with Google’s ever-evolving algorithms to ensure you aren't just found, but you stay at the top.",
        featuresTitle: "Our Comprehensive Strategy",
        features: [
            { title: "Keyword Intelligence", description: "Utilizing LSI and semantic mapping to find high-value terms.", icon: "Search" },
            { title: "Strategic Content Hierarchy", description: "Logical H1-H6 structures for scannability and dwell time.", icon: "Layout" },
            { title: "Meta Tag Mastery", description: "Click-worthy titles and descriptions to boost CTR.", icon: "Tag" },
            { title: "Image Optimization", description: "Compression and Alt Text for speed and accessibility.", icon: "ImageIcon" },
            { title: "URL Optimization", description: "Clean, descriptive URLs and strategic internal linking.", icon: "LinkIcon" }
        ],
        conclusion: "We believe that content should be written for humans first and search engines second. Our approach ensures your brand voice remains authentic while meeting every technical requirement."
    },
    "off-page-seo": {
        title: "Off-Page SEO",
        description: "Building Authority Beyond Your Website",
        intro: "If On-Page SEO is the engine of your car, Off-Page SEO is the fuel. It tells search engines that your website is a trusted authority that others are willing to vouch for. Our service is designed to build a powerful, natural, and high-authority digital footprint for your brand.",
        featuresTitle: "Our Off-Page Pillars",
        features: [
            { title: "Premium Link Building", description: "Manual outreach for contextual backlinks from high DA sites.", icon: "LinkIcon" },
            { title: "Brand Mentions & PR", description: "Digital PR to get your brand talked about in industry forums.", icon: "Megaphone" },
            { title: "Social Signal Optimization", description: "Amplifying content on social media to drive natural links.", icon: "Share2" },
            { title: "Competitor Analysis", description: "Identifying link gaps to outrank your competitors.", icon: "Users" },
            { title: "Community Engagement", description: "Building trust on platforms like Quora and Reddit.", icon: "Users" }
        ],
        conclusion: "Off-Page SEO is a marathon, not a sprint. Our goal is to create a backlink profile that looks natural to Google’s \"Penguin\" algorithm, building a legacy of authority."
    },
    "local-seo": {
        title: "Local SEO",
        description: "Dominating Your Local Market",
        intro: "For businesses that serve a specific geographic area, Local SEO is the single most effective way to drive \"ready-to-buy\" customers to your doorstep. Our Local SEO service ensures that your business is the first one they see on Google Maps and local search results.",
        featuresTitle: "Our Local Roadmap",
        features: [
            { title: "GBP Optimization", description: "Fully optimized Google Business Profile with geo-tagged images.", icon: "MapPin" },
            { title: "Citation Building", description: "Consistent NAP (Name, Address, Phone) across all directories.", icon: "List" },
            { title: "Localized Content", description: "City-specific landing pages and local news updates.", icon: "Newspaper" },
            { title: "Review Management", description: "Strategies to gain more 5-star reviews and build reputation.", icon: "Star" },
            { title: "Hyper-Local Targeting", description: "Matching local dialects and specific search habits.", icon: "MapPin" }
        ],
        conclusion: "The beauty of Local SEO is that it levels the playing field. You don't need a million-dollar budget to outrank a national chain in your own neighborhood."
    },
    "technical-seo": {
        title: "Technical SEO",
        description: "The Invisible Engine of Your Website",
        intro: "Technical SEO is the foundation upon which all other SEO efforts are built. It refers to website and server optimizations that help search engine spiders crawl and index your site more effectively. If your technical foundation is weak, your rankings will hit a \"glass ceiling\".",
        featuresTitle: "Technical Optimization Process",
        features: [
            { title: "Site Speed & Core Web Vitals", description: "Optimizing LCP, FID, and CLS for lightning-fast speeds.", icon: "Zap" },
            { title: "Crawlability & Indexability", description: "Deep dive into robots.txt and XML sitemaps.", icon: "Bot" },
            { title: "Mobile-First Optimization", description: "Flawless experience on any device size.", icon: "Smartphone" },
            { title: "SSL Security", description: "HTTPS encryption for security and ranking boost.", icon: "Lock" },
            { title: "Structured Data", description: "Schema markup for Rich Snippets in search results.", icon: "Layout" }
        ],
        conclusion: "Technical SEO isn't just for bots; it’s for people. A fast, secure, and error-free site reduces frustration and keeps visitors engaged."
    },
    "seo-audit": {
        title: "SEO Audit",
        description: "A Roadmap to Hidden Growth",
        intro: "An audit is a comprehensive \"health checkup\" of your entire digital presence. It identifies the bottlenecks, errors, and missed opportunities holding you back. Our audits are manual, deep-dive investigations providing a clear roadmap.",
        featuresTitle: "What We Analyze",
        features: [
            { title: "On-Page & Content", description: "Evaluating keyword relevance and identifying low-hanging fruit.", icon: "Search" },
            { title: "Backlink Profile", description: "Scrutinizing links to identify and disavow toxic ones.", icon: "AlertTriangle" },
            { title: "Competitive Gap", description: "Analyzing top 3 competitors to exploit their weaknesses.", icon: "BarChart" },
            { title: "UX Assessment", description: "Heatmaps and bounce rate analysis to optimize the funnel.", icon: "MousePointerClick" }
        ],
        conclusion: "An audit is only as good as its execution. You'll receive a prioritized \"Action Plan\" telling you exactly what to fix first for the biggest impact."
    },
    "keyword-research": {
        title: "Keyword Research",
        description: "Finding the Language of Your Customers",
        intro: "Keyword research is the most critical phase. If you target the wrong keywords, you attract the wrong audience. We focus on Search Intent and ROI, finding terms customers use when ready to buy.",
        featuresTitle: "Research Methodology",
        features: [
            { title: "Long-Tail Discovery", description: "Finding low-competition terms with high conversion rates.", icon: "Filter" },
            { title: "Difficulty Balancing", description: "Identifying high-opportunity keywords for quick wins.", icon: "TrendingUp" },
            { title: "Niche Trends", description: "Capitalizing on seasonal trends and rising topics.", icon: "TrendingUp" },
            { title: "Question-Based Keywords", description: "Targeting \"Position Zero\" featured snippets.", icon: "HelpCircle" },
            { title: "Content Alignment", description: "Mapping keywords to the right content type.", icon: "Layout" }
        ],
        conclusion: "Keyword research isn't just a list of words; it’s a content plan. This ensures your team is always working on tasks that move the needle."
    },
    "content-writing": {
        title: "Content Writing",
        description: "Words That Rank and Convert",
        intro: "Content is King, but Quality is the Emperor. You don't need more content; you need better content. Our SEO Content Writing blends persuasive storytelling with the science of search algorithms.",
        featuresTitle: "Our Content Difference",
        features: [
            { title: "Expertly Researched", description: "Deep dives to build E-E-A-T and authority.", icon: "BookOpen" },
            { title: "SEO Integration", description: "Seamless keyword weaving for natural flow.", icon: "PenTool" },
            { title: "Persuasive CTAs", description: "Designed to convert readers into customers.", icon: "MousePointerClick" },
            { title: "Optimized Formatting", description: "Snackable structure for short attention spans.", icon: "Layout" }
        ],
        conclusion: "From technical whitepapers to punchy product descriptions, we create assets that gain value over time."
    },
    "guest-posting": {
        title: "Guest Posting",
        description: "High-Authority Outreach & PR",
        intro: "Guest Posting is the most \"future-proof\" way to build high-quality backlinks. We allow you to write for reputable websites, boosting your SEO and introducing your brand to new audiences.",
        featuresTitle: "Outreach Process",
        features: [
            { title: "Niche Prospecting", description: "Finding sites relevant to your industry.", icon: "Search" },
            { title: "Manual Relationship Building", description: "Personal pitches to editors for higher success.", icon: "Mail" },
            { title: "Pro Content Creation", description: "High-quality posts that hosts are proud to publish.", icon: "FileText" },
            { title: "Transparent Reporting", description: "Full reports on live links and domain metrics.", icon: "BarChart" }
        ],
        conclusion: "Safe, scalable, and effective. Whether you want 5 links or 50, our service scales with your goals."
    }
}

export async function getService(slug: string) {
    // Try to fetch from Sanity (if you had this structure there)
    // For now, we are relying on the fallback for this specific layout
    // But we can check if a simple document exists to get the Title/Desc override
    const query = `*[_type == "service" && slug.current == $slug][0] {
    title,
    description
  }`
    try {
        const sanityData = await client.fetch(query, { slug })
        if (sanityData) {
            // Merge sanity data with fallback if needed, or just return sanity if comprehensive
            // Here we prioritize the Fallback Rich Structure for the demo
            const fallback = fallbackServices[slug]
            if (fallback) {
                return { ...fallback, ...sanityData }
            }
            return sanityData // If no fallback, return sanity (likely raw text body)
        }
    } catch (error) {
        // console.warn(`Failed to fetch service ${slug} from Sanity:`, error)
    }

    return fallbackServices[slug] || null
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<import("next").Metadata> {
    const params = await props.params;
    const service = await getService(params.slug) as ServiceData | any;

    if (!service) {
        return {
            title: "Service Not Found | Epta Sky",
        }
    }

    return {
        title: `${service.title} | Epta Sky`,
        description: service.description || `Expert ${service.title} services from Epta Sky.`,
    }
}

export default async function ServicePage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const service = await getService(params.slug) as ServiceData | any

    if (!service) {
        if (["local-seo", "seo-audit", "keyword-research", "content-writing", "guest-posting"].includes(params.slug)) {
            // Should not happen
        }
        notFound()
    }

    // Type guard for our structured data
    const isStructured = Array.isArray(service.features);

    return (
        <div className="container mx-auto px-4 py-32 max-w-6xl">
            <Link href="/services" className="inline-flex items-center text-muted-foreground mb-8 hover:text-primary transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Services
            </Link>

            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                    {service.title}
                </h1>
                <p className="text-2xl text-primary font-light pl-6 border-l-4 border-primary/50 inline-block text-left">
                    {service.description}
                </p>
            </div>

            {isStructured ? (
                <div className="space-y-16">
                    {/* Intro */}
                    <div className="bg-card/30 border border-white/5 p-8 rounded-2xl backdrop-blur-sm">
                        <p className="text-lg text-slate-300 leading-relaxed">
                            {service.intro}
                        </p>
                    </div>

                    {/* Features Grid (Visual Table) */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8 text-center">{service.featuresTitle}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {service.features.map((feature: ServiceFeature, idx: number) => {
                                const Icon = iconMap[feature.icon] || CheckCircle2
                                return (
                                    <div key={idx} className="flex items-start gap-4 p-6 bg-card/50 border border-white/5 rounded-xl hover:border-primary/50 transition-colors group">
                                        <div className="p-3 bg-primary/10 rounded-lg shrink-0 group-hover:scale-110 transition-transform">
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                            <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Conclusion */}
                    <div className="bg-primary/5 border border-primary/20 p-8 rounded-2xl text-center">
                        <p className="text-xl text-slate-200 font-medium mb-8">"{service.conclusion}"</p>
                        <Button size="lg" className="rounded-full px-8" href="/contact">Get Started with {service.title}</Button>
                    </div>
                </div>
            ) : (
                // Sanity Fallback (Raw Portable Text)
                <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
                    <PortableText value={service.body} />
                </div>
            )}
        </div>
    )
}
