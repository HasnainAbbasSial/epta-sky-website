import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"

export const revalidate = 60

async function getCaseStudies() {
    const query = `*[_type == "caseStudy"] | order(_createdAt desc) {
    title,
    slug,
    clientName,
    mainImage,
    results,
    excerpt
  }`
    try {
        return await client.fetch(query)
    } catch (error) {
        console.warn("Failed to fetch case studies:", error)
        return []
    }
}

export default async function CaseStudiesPage() {
    const caseStudies = await getCaseStudies()

    // Filter out invalid case studies
    const validCaseStudies = caseStudies.filter((study: any) => study?.slug?.current && study?.title)

    return (
        <div className="container mx-auto px-4 py-32">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Proven <span className="text-primary">Results</span></h1>
                <p className="text-xl text-slate-400">
                    Real businesses, real growth. See how we've helped our partners dominate their industries.
                </p>
            </div>

            {(!validCaseStudies || validCaseStudies.length === 0) ? (
                // Empty State / Fallback for Display
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            img: "/images/growth.png",
                            title: "Scale Your Growth",
                            label: "Analytics",
                            traffic: "+140%",
                            dr: "10 → 29",
                            timeframe: "3 months",
                            summary: "Through a targeted SEO strategy focusing on content optimization, keyword restructuring, and internal linking improvements, the website saw a steady traffic increase.",
                            href: "/case-studies/analytics-scale-growth"
                        },
                        {
                            img: "/images/network.png",
                            title: "Global Link Network",
                            label: "Off-Page",
                            traffic: "+85%",
                            dr: "15 → 32",
                            timeframe: "3 months",
                            summary: "By leveraging a global link-building strategy with authoritative backlinks, the site gained better visibility and improved domain authority over a short period.",
                            href: "/case-studies/global-link-network"
                        },
                        {
                            img: "/images/tech.png",
                            title: "Technical Core Audit",
                            label: "Infrastructure",
                            traffic: "+240%",
                            dr: "13 → 38",
                            timeframe: "5 months",
                            summary: "A full technical audit addressed site speed, mobile responsiveness, and core web vitals issues, resulting in substantial traffic growth and higher search rankings.",
                            href: "/case-studies/technical-core-audit"
                        }
                    ].map((item, i) => (
                        <div key={i} className="group bg-card/50 border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-all">
                            <Link href={item.href} className="block">
                                <div className="h-56 relative bg-black/20">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-8">
                                    <div className="text-primary text-sm font-bold mb-2 uppercase tracking-wider">{item.label}</div>
                                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-slate-400 mb-4 line-clamp-3">{item.summary}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20">{item.traffic} Traffic</span>
                                        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">DR {item.dr}</span>
                                        <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full border border-purple-500/20">{item.timeframe}</span>
                                    </div>
                                    <Button variant="outline" className="w-full">View Full Case Study</Button>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {validCaseStudies.map((study: any) => (
                        <div key={study.slug.current} className="group bg-card/50 border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-all">
                            <div className="relative h-56 w-full bg-muted/20">
                                {study.mainImage?.asset ? (
                                    <Image
                                        src={urlForImage(study.mainImage).url()}
                                        alt={study.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
                                        <span className="text-primary/10 font-bold text-lg uppercase tracking-widest leading-tight text-center px-4">{study.title}</span>
                                    </div>
                                )}
                            </div>
                            <div className="p-8">
                                {study.clientName && <div className="text-primary text-sm font-bold mb-2 uppercase tracking-wider">{study.clientName}</div>}
                                <h3 className="text-2xl font-bold mb-4 text-white">
                                    <Link href={`/case-studies/${study.slug.current}`} className="hover:text-primary transition-colors">
                                        {study.title}
                                    </Link>
                                </h3>
                                {/* Results Tags would go here if defined in schema result strings properly */}
                                <Link href={`/case-studies/${study.slug.current}`} className="inline-flex items-center text-sm font-semibold text-primary mt-4">
                                    View Full Story <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
