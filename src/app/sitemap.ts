import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eptasky.com'

    let posts: any[] = []
    let caseStudies: any[] = []

    try {
        // Fetch posts with valid slugs only
        posts = await client.fetch(`*[_type == "post" && defined(slug.current)]{ "slug": slug.current, publishedAt }`)
    } catch (error) {
        console.warn("Could not fetch posts for sitemap:", error)
    }

    try {
        // Fetch case studies with valid slugs only
        caseStudies = await client.fetch(`*[_type == "caseStudy" && defined(slug.current)]{ "slug": slug.current, _updatedAt }`)
    } catch (error) {
        console.warn("Could not fetch case studies for sitemap:", error)
    }

    // Static pages
    const routes = [
        '',
        '/about',
        '/mission',
        '/services',
        '/blog',
        '/case-studies',
        '/contact',
        '/services/on-page-seo',
        '/services/off-page-seo',
        '/services/technical-seo',
        '/services/local-seo',
        '/services/seo-audit',
        '/services/keyword-research',
        '/services/content-writing',
        '/services/guest-posting',
        '/case-studies/analytics-scale-growth',
        '/case-studies/global-link-network',
        '/case-studies/technical-core-audit',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: (route === '' || route === '/blog' ? 'daily' : 'weekly') as 'daily' | 'weekly',
        priority: route === '' ? 1 : route.startsWith('/services') ? 0.9 : 0.8,
    }))

    const postRoutes = posts.map((post: any) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt || new Date()),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    const caseStudyRoutes = caseStudies.map((study: any) => ({
        url: `${baseUrl}/case-studies/${study.slug}`,
        lastModified: new Date(study._updatedAt || new Date()),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    return [...routes, ...postRoutes, ...caseStudyRoutes]
}
