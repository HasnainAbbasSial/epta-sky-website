import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { notFound } from "next/navigation"
import { format } from "date-fns"

export const revalidate = 60

async function getPost(slug: string) {
    const decodedSlug = decodeURIComponent(slug)
    const query = `*[_type == "post" && (slug.current == $slug || slug.current == $decodedSlug)][0] {
    title,
    mainImage,
    publishedAt,
    body,
    "author": author->{name, image, bio}
  }`
    try {
        return await client.fetch(query, { slug, decodedSlug })
    } catch (error) {
        console.warn(`Failed to fetch post ${slug}:`, error)
        return null
    }
}

export default async function BlogPost(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const post = await getPost(params.slug)

    if (!post) {
        notFound()
    }

    return (
        <article className="container mx-auto px-4 py-20 max-w-4xl">
            <div className="mb-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
                {post.publishedAt && (
                    <p className="text-muted-foreground">{format(new Date(post.publishedAt), 'MMMM dd, yyyy')}</p>
                )}
            </div>

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
                        {/* Bio could be rendered here if needed */}
                        <p className="text-sm text-muted-foreground">Author</p>
                    </div>
                </div>
            )}
        </article>
    )
}
