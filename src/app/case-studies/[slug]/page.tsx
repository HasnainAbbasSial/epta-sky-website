import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { notFound } from "next/navigation"
import { ArrowLeft, TrendingUp, Calendar } from "lucide-react"
import Link from "next/link"

export const revalidate = 60

async function getCaseStudy(slug: string) {
    const decodedSlug = decodeURIComponent(slug)
    const query = `*[_type == "caseStudy" && (slug.current == $slug || slug.current == $decodedSlug)][0] {
    title,
    clientName,
    mainImage,
    results,
    excerpt,
    body,
    publishedAt
  }`
    try {
        return await client.fetch(query, { slug, decodedSlug })
    } catch (error) {
        console.warn(`Failed to fetch case study ${slug}:`, error)
        return null
    }
}

export default async function CaseStudyPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const caseStudy = await getCaseStudy(params.slug)

    if (!caseStudy) {
        notFound()
    }

    return (
        <article className="container mx-auto px-4 py-20 max-w-5xl">
            {/* Back Button */}
            <Link href="/case-studies" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Case Studies
            </Link>

            {/* Header */}
            <div className="mb-8">
                {caseStudy.clientName && (
                    <div className="text-primary text-sm font-bold mb-2 uppercase tracking-wider">{caseStudy.clientName}</div>
                )}
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{caseStudy.title}</h1>
                {caseStudy.excerpt && (
                    <p className="text-xl text-muted-foreground">{caseStudy.excerpt}</p>
                )}
            </div>

            {/* Main Image */}
            {caseStudy.mainImage?.asset && (
                <div className="relative w-full h-[500px] mb-12 rounded-2xl overflow-hidden shadow-lg border border-white/5">
                    <Image
                        src={urlForImage(caseStudy.mainImage).url()}
                        alt={caseStudy.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            {/* Results Section */}
            {caseStudy.results && caseStudy.results.length > 0 && (
                <div className="bg-muted/20 rounded-2xl p-8 mb-12 border border-border">
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                        <TrendingUp className="w-6 h-6 mr-2 text-primary" />
                        Key Results
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {caseStudy.results.map((result: string, index: number) => (
                            <div key={index} className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                                <p className="text-slate-300">{result}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Body Content */}
            {caseStudy.body && (
                <div className="prose prose-invert prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:text-slate-300 max-w-none">
                    <PortableText
                        value={caseStudy.body}
                        components={{
                            types: {
                                image: ({ value }: any) => {
                                    if (!value?.asset) return null;
                                    return (
                                        <figure className="my-12">
                                            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-slate-900">
                                                <Image
                                                    src={urlForImage(value).url()}
                                                    alt={value.alt || "Case study image"}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            {value.caption && (
                                                <figcaption className="mt-4 text-center text-sm text-slate-400 italic">
                                                    {value.caption}
                                                </figcaption>
                                            )}
                                        </figure>
                                    );
                                },
                            },
                            block: {
                                h1: ({ children }: any) => <h1 className="text-4xl md:text-5xl font-bold mt-16 mb-8 text-white leading-tight">{children}</h1>,
                                h2: ({ children }: any) => <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-white leading-snug">{children}</h2>,
                                h3: ({ children }: any) => <h3 className="text-2xl font-bold mt-10 mb-4 text-white underline decoration-primary/30 decoration-4 underline-offset-8">{children}</h3>,
                                h4: ({ children }: any) => <h4 className="text-xl font-bold mt-8 mb-4 text-slate-100">{children}</h4>,
                                normal: ({ children }: any) => <p className="text-slate-300 text-lg leading-relaxed mb-8">{children}</p>,
                                blockquote: ({ children }: any) => (
                                    <blockquote className="border-l-4 border-primary pl-6 my-10 italic text-slate-200 bg-primary/5 py-4 rounded-r-lg">
                                        {children}
                                    </blockquote>
                                ),
                            }
                        }}
                    />
                </div>
            )}

            {/* CTA */}
            <div className="mt-16 p-8 bg-primary/10 rounded-2xl border border-primary/20 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready for Similar Results?</h3>
                <p className="text-slate-300 mb-6">Let's discuss how we can help your business grow.</p>
                <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                    Get Started
                </Link>
            </div>
        </article>
    )
}
