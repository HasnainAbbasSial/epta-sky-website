import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { ArrowLeft, Target, Lightbulb, Users } from "lucide-react"

export const metadata = {
    title: "Our Mission | Epta Sky",
    description: "Read about the mission and values that drive Epta Sky."
}

export default function MissionPage() {
    return (
        <div className="container mx-auto px-4 py-32 max-w-4xl">
            <div className="mb-8">
                <Link href="/about" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to About Us
                </Link>
            </div>

            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                    Our <span className="text-primary">Mission</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                    To democratize digital success by providing transparent, data-driven, and ethical SEO solutions for businesses of all sizes.
                </p>
            </div>

            <div className="grid gap-12">
                {/* Core Value 1 */}
                <div className="bg-card/50 border border-white/5 rounded-2xl p-8 backdrop-blur-sm flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 border border-primary/20">
                        <Target className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-3 text-white">Democratizing Visibility</h3>
                        <p className="text-slate-400 leading-relaxed">
                            We believe that ranking on the first page shouldn't be a luxury reserved for Fortune 500 companies.
                            We build strategies that allow startups and SMEs to compete with industry giants through smart, agile SEO.
                        </p>
                    </div>
                </div>

                {/* Core Value 2 */}
                <div className="bg-card/50 border border-white/5 rounded-2xl p-8 backdrop-blur-sm flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 border border-primary/20">
                        <Lightbulb className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-3 text-white">Transparency First</h3>
                        <p className="text-slate-400 leading-relaxed">
                            The SEO industry is plagued by "black box" agencies. We maintain radical transparency.
                            You own your data, you see our work logs, and you understand exactly where every dollar goes.
                        </p>
                    </div>
                </div>

                {/* Core Value 3 */}
                <div className="bg-card/50 border border-white/5 rounded-2xl p-8 backdrop-blur-sm flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 border border-primary/20">
                        <Users className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-3 text-white">Human-Centric Digital</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Algorithms change, but human psychology remains constant. We optimize for users first,
                            creating experiences that delight humans and, as a byproduct, satisfy search engines.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-20 text-center">
                <h2 className="text-2xl font-bold mb-6">Join Us on Our Journey</h2>
                <Button size="lg" href="/contact">Partner With Us</Button>
            </div>
        </div>
    )
}
