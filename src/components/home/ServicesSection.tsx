"use client"

import { motion } from 'framer-motion'
import {
    FileText, Globe, MapPin, Settings, BarChart, Search, PenTool, Share2, ArrowRight,
    LucideIcon
} from 'lucide-react'
import Link from 'next/link'

const ICON_MAP: Record<string, LucideIcon> = {
    "FileText": FileText,
    "Globe": Globe,
    "MapPin": MapPin,
    "Settings": Settings,
    "BarChart": BarChart,
    "Search": Search,
    "PenTool": PenTool,
    "Share2": Share2
}

const DEFAULT_SERVICES = [
    {
        title: "On-Page SEO",
        description: "Optimize your content and structure for maximum visibility.",
        iconName: "FileText",
        href: "/services/on-page-seo"
    },
    {
        title: "Off-Page SEO",
        description: "Build authority with quality backlinks and mentions.",
        iconName: "Globe",
        href: "/services/off-page-seo"
    },
    {
        title: "Local SEO",
        description: "Dominate local search results and attract nearby customers.",
        iconName: "MapPin",
        href: "/services/local-seo"
    },
    {
        title: "Technical SEO",
        description: "Ensure your site is crawlable, fast, and error-free.",
        iconName: "Settings",
        href: "/services/technical-seo"
    },
    {
        title: "SEO Audit",
        description: "Comprehensive analysis to identify growth opportunities.",
        iconName: "BarChart",
        href: "/services/seo-audit"
    },
    {
        title: "Keyword Research",
        description: "Target the right terms that drive high-intent traffic.",
        iconName: "Search",
        href: "/services/keyword-research"
    },
    {
        title: "Content Writing",
        description: "Engaging, SEO-optimized content that converts.",
        iconName: "PenTool",
        href: "/services/content-writing"
    },
    {
        title: "Guest Posting",
        description: "Expand your reach by publishing on authority sites.",
        iconName: "Share2",
        href: "/services/guest-posting"
    }
]

interface ServicesSectionProps {
    initialServices?: any[]
}

export function ServicesSection({ initialServices }: ServicesSectionProps) {
    const displayServices = initialServices && initialServices.length > 0 ? initialServices : DEFAULT_SERVICES;
    return (
        <section className="py-32 relative">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Our <span className="text-primary">Best Solutions</span></h2>
                    <p className="text-xl text-slate-400 font-light">
                        Comprehensive digital solutions tailored to elevate your brand and drive sustainable growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {displayServices.map((service, index) => {
                        const IconComponent = (service.iconName && ICON_MAP[service.iconName]) || ICON_MAP[service.icon] || FileText;
                        const href = service.href || (service.slug?.current ? `/services/${service.slug.current}` : '#');

                        return (
                            <motion.div
                                key={service.title || index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-card p-8 rounded-2xl group hover:-translate-y-2 relative overflow-hidden"
                            >
                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                                    <IconComponent className="w-7 h-7 text-white group-hover:text-primary transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                                <p className="text-sm text-slate-400 mb-6 line-clamp-2 leading-relaxed">
                                    {service.description}
                                </p>
                                <Link
                                    href={href}
                                    className="inline-flex items-center text-sm font-semibold text-primary hover:text-white transition-colors"
                                >
                                    Learn More <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
