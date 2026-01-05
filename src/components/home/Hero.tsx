"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 pt-32">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-background">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
                {/* Animated Blobs - Updated to Sky/Cyan/Blue */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
                <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-blue-600/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm"
                    >
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm font-medium text-slate-300">#1 SEO Agency for Growth</span>
                    </motion.div>

                    {/* Heading */}
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]">
                        Scale Your <br />
                        <span className="text-gradient">Digital Empire</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                        Epta Sky combines data-driven SEO strategies with premium design to turn your website into a revenue-generating machine.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-white text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:scale-105" href="/contact">
                            Start Your Growth
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-white/20 hover:bg-white/10 backdrop-blur-md" href="/services">
                            View Our Work
                        </Button>
                    </div>
                </motion.div>

                {/* Floating Stats / Social Proof */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-12"
                >
                    {[
                        { label: "Client Revenue", value: "$50M+" },
                        { label: "Keywords Ranked", value: "10k+" },
                        { label: "Traffic Growth", value: "300%" },
                        { label: "Retention Rate", value: "98%" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                            <p className="text-sm text-slate-500 uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
