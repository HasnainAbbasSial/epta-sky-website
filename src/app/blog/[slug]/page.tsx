import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { notFound } from "next/navigation"
import { format } from "date-fns"
import { Bot, CheckCircle2, List, HelpCircle, Calendar, Clock, Tag } from "lucide-react"

export const revalidate = 60

async function getPost(slug: string) {
    const decodedSlug = decodeURIComponent(slug)
    const query = `*[_type == "post" && (slug.current == $slug || slug.current == $decodedSlug)][0] {
    title,
    mainImage,
    publishedAt,
    lastUpdated,
    body,
    "author": author->{name, image, bio},
    excerpt,
    metaDescription,
    enableTOC,
    readingTime,
    searchIntent,
    aiSummary,
    keyTakeaways,
    faq,
    primaryKeyword,
    secondaryKeywords
  }`
    try {
        return await client.fetch(query, { slug, decodedSlug })
    } catch (error) {
        console.warn(`Failed to fetch post ${slug}:`, error)
        return null
    }
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<import("next").Metadata> {
    const params = await props.params;
    const post = await getPost(params.slug)

    if (!post) {
        return {
            title: "Post Not Found",
        }
    }

    return {
        title: `${post.title} | Epta Sky`,
        description: post.metaDescription || post.excerpt || "Read our latest blog post on Epta Sky.",
        keywords: post.secondaryKeywords ? [post.primaryKeyword, ...post.secondaryKeywords].filter(Boolean) : undefined,
        openGraph: {
            title: post.title,
            description: post.metaDescription || post.excerpt,
            type: "article",
            publishedTime: post.publishedAt,
            modifiedTime: post.lastUpdated,
            authors: [post.author?.name || "Epta Sky"],
        }
    }
}

export default async function BlogPost(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const post = await getPost(params.slug)

    if (!post) {
        notFound()
    }

    // Simple TOC extraction (if enabled)
    // Note: detailed TOC usually requires parsing blocks. For now we will assume blocks have style 'h2' or 'h3'
    const headings = post.enableTOC ? post.body.filter((block: any) => block.style === 'h2' || block.style === 'h3') : []

    return (
        <article className="container mx-auto px-4 py-20 max-w-4xl">
            {/* Header */}
            <div className="mb-8 text-center">
                <div className="flex items-center justify-center gap-4 mb-6 text-sm text-muted-foreground">
                    {post.searchIntent && (
                        <span className="capitalize bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
                            {post.searchIntent}
                        </span>
                    )}
                    {post.readingTime && (
                        <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" /> {post.readingTime} min read
                        </span>
                    )}
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

                <div className="flex items-center justify-center gap-6 text-muted-foreground text-sm">
                    {post.publishedAt && (
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{format(new Date(post.publishedAt), 'MMM dd, yyyy')}</span>
                        </div>
                    )}
                    {post.lastUpdated && (
                        <div className="flex items-center gap-2 text-primary">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Updated: {format(new Date(post.lastUpdated), 'MMM dd, yyyy')}</span>
                        </div>
                    )}
                </div>
            </div>

            {/* AI Summary Button & Modal implementation using <details> for no-js simplicity */}
            {post.aiSummary && (
                <div className="flex justify-center mb-12">
                    <details className="group relative">
                        <summary className="list-none cursor-pointer">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-purple-500/25">
                                <Bot className="w-5 h-5" />
                                Get AI Summary
                            </div>
                        </summary>
                        <div className="absolute top-14 left-1/2 -translate-x-1/2 w-[90vw] max-w-lg bg-slate-900 border border-white/10 p-6 rounded-2xl shadow-2xl z-50 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200">
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-purple-500/10 rounded-lg shrink-0">
                                    <Bot className="w-6 h-6 text-purple-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-2">AI Generated Summary</h4>
                                    <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">{post.aiSummary}</p>
                                </div>
                            </div>
                        </div>
                        {/* Overlay to close when clicking outside logic would require JS, but this is a pure CSS 'popup' 
                            Use a full screen invisible overlay if needed, but for now specific click to close or click summary again works */}
                    </details>
                </div>
            )}

            {post.mainImage?.asset && (
                <div className="relative w-full h-[400px] mb-12 rounded-2xl overflow-hidden shadow-lg border border-white/5">
                    <Image
                        src={urlForImage(post.mainImage).url()}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            {/* Key Takeaways */}
            {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 mb-12">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
                        <CheckCircle2 className="w-6 h-6 text-primary" /> Key Takeaways
                    </h3>
                    <ul className="space-y-4">
                        {post.keyTakeaways.map((takeaway: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-3 text-slate-300">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 shrink-0" />
                                <span>{takeaway}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Table of Contents */}
            {post.enableTOC && headings.length > 0 && (
                <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-8 mb-12">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-white">
                        <List className="w-5 h-5 text-slate-400" /> Table of Contents
                    </h3>
                    <nav className="space-y-2">
                        {headings.map((block: any, idx: number) => {
                            // Simple anchor generation (requires slugifying text in real app, relying on portable text implementation for IDs or manual)
                            // For now validation/display only
                            const text = block.children?.map((c: any) => c.text).join('')
                            return (
                                <div key={block._key || idx} className={`${block.style === 'h3' ? 'pl-4' : ''} text-slate-400 hover:text-white transition-colors cursor-pointer text-sm`}>
                                    {text}
                                </div>
                            )
                        })}
                    </nav>
                </div>
            )}

            <div className="prose prose-invert prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:text-slate-300 max-w-none">
                <PortableText
                    value={post.body}
                    components={{
                        types: {
                            image: ({ value }: any) => {
                                if (!value?.asset) return null;
                                return (
                                    <figure className="my-12">
                                        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-slate-900">
                                            <Image
                                                src={urlForImage(value).url()}
                                                alt={value.alt || "Article content image"}
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

            {/* FAQ Section */}
            {post.faq && post.faq.length > 0 && (
                <div className="mt-20 border-t border-white/10 pt-12">
                    <h3 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
                    <div className="space-y-4 max-w-3xl mx-auto">
                        {post.faq.map((item: any, idx: number) => (
                            <details key={idx} className="group bg-slate-900/50 border border-white/5 rounded-xl overflow-hidden">
                                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/5 transition-colors">
                                    <h4 className="font-semibold text-white pr-4">{item.question}</h4>
                                    <HelpCircle className="w-5 h-5 text-slate-500 group-open:text-primary transition-colors" />
                                </summary>
                                <div className="p-6 pt-0 text-slate-300 leading-relaxed border-t border-white/5 mt-2">
                                    {item.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                    {/* JSON-LD for FAQ Schema */}
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "FAQPage",
                                "mainEntity": post.faq.map((f: any) => ({
                                    "@type": "Question",
                                    "name": f.question,
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": f.answer
                                    }
                                }))
                            })
                        }}
                    />
                </div>
            )}

            {post.author && (
                <div className="mt-16 p-8 bg-muted/30 rounded-2xl flex items-center gap-6 border border-border">
                    {post.author.image?.asset && (
                        <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0">
                            <Image
                                src={urlForImage(post.author.image).url()}
                                alt={post.author.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}
                    <div>
                        <h4 className="text-xl font-bold mb-1">{post.author.name}</h4>
                        <p className="text-sm text-muted-foreground">Author</p>
                    </div>
                </div>
            )}
        </article>
    )
}
