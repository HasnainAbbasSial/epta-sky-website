import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"
import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"

export const revalidate = 60 // Revalidate every 60 seconds

async function getPosts() {
    const query = `*[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt,
    "authorName": author->name,
    "categories": categories[]->title
  }`
    try {
        return await client.fetch(query)
    } catch (error) {
        console.error("Failed to fetch posts:", error)
        return []
    }
}

export default async function BlogPage() {
    const posts = await getPosts()

    // Filter out posts without valid slugs to prevent crashes
    const validPosts = posts.filter((post: any) => post?.slug?.current && post?.title)

    if (!validPosts || validPosts.length === 0) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-4xl font-bold mb-4">Latest Insights</h1>
                <p className="text-muted-foreground">No posts found. Please check back later.</p>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-20 max-w-6xl">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Latest Insights & News</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Expert advice, industry updates, and tips to improve your SEO strategy.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {validPosts.map((post: any) => (
                    <article key={post.slug.current} className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all flex flex-col">
                        <div className="relative h-48 w-full overflow-hidden">
                            {post.mainImage?.asset ? (
                                <Image
                                    src={urlForImage(post.mainImage).url()}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center bg-muted/30">
                                    <span className="text-primary/30 font-bold text-xs uppercase tracking-widest">{post.categories?.[0] || 'Insights'}</span>
                                </div>
                            )}
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-3">
                                <span>{post.publishedAt ? format(new Date(post.publishedAt), 'MMM dd, yyyy') : 'Recent'}</span>
                                {post.categories && (
                                    <>
                                        <span>•</span>
                                        <span className="text-primary">{post.categories[0]}</span>
                                    </>
                                )}
                            </div>
                            <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                <Link href={`/blog/${post.slug.current}`}>
                                    {post.title}
                                </Link>
                            </h2>
                            <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
                                {post.excerpt}
                            </p>
                            <div className="mt-auto pt-4 border-t border-border">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">{post.authorName}</span>
                                    <Link href={`/blog/${post.slug.current}`} className="text-sm text-primary font-medium hover:underline">
                                        Read Article
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}
