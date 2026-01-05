"use client"

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'

const DEFAULT_TESTIMONIALS = [
    {
        name: "Alex Morgan",
        role: "CEO, TechFlow",
        quote: "Epta Sky transformed our online presence. Our traffic increased by 200% in just 3 months. Highly recommended!",
    },
    {
        name: "Sarah Chen",
        role: "Marketing Director, StyleHub",
        quote: "Professional, data-driven, and transparent. They delivered exactly what they promised and more.",
    },
    {
        name: "David Miller",
        role: "Founder, GreenSpace",
        quote: "The best SEO agency we've worked with. Their technical expertise is unmatched in the industry.",
    }
]

interface TestimonialsProps {
    initialTestimonials?: any[]
}

export function Testimonials({ initialTestimonials }: TestimonialsProps) {
    const displayTestimonials = initialTestimonials && initialTestimonials.length > 0 ? initialTestimonials : DEFAULT_TESTIMONIALS;
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
                    <p className="text-muted-foreground">Don't just take our word for it. Hear from our success stories.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {displayTestimonials.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-muted/20 p-8 rounded-2xl relative"
                        >
                            <Quote className="absolute top-8 right-8 text-primary/10 w-12 h-12" />
                            <p className="text-lg italic mb-6 relative z-10">"{item.quote}"</p>
                            <div className="flex items-center gap-4">
                                {item.image?.asset && (
                                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                                        <Image
                                            src={urlForImage(item.image).url()}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                                <div>
                                    <h3 className="font-bold">{item.name}</h3>
                                    <p className="text-sm text-muted-foreground">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
