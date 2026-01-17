import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' },
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                }
            ]
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            description: 'Short summary for the blog list',
        }),
        defineField({
            name: 'metaDescription',
            title: 'Meta Description',
            type: 'text',
            description: 'SEO description for search engines',
            rows: 3,
        }),
        defineField({
            name: 'primaryKeyword',
            title: 'Primary Keyword',
            type: 'string',
            description: 'Main keyword this post targets',
        }),
        defineField({
            name: 'secondaryKeywords',
            title: 'Secondary Keywords',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Supporting keywords and LSI terms',
        }),
        defineField({
            name: 'lastUpdated',
            title: 'Last Updated Date',
            type: 'datetime',
            description: 'Override for content freshness signal',
        }),
        defineField({
            name: 'enableTOC',
            title: 'Enable Table of Contents',
            type: 'boolean',
            initialValue: true,
        }),
        defineField({
            name: 'readingTime',
            title: 'Reading Time (Minutes)',
            type: 'number',
            description: 'Manual override (auto-calculation recommended but optional)',
        }),
        defineField({
            name: 'searchIntent',
            title: 'Search Intent',
            type: 'string',
            options: {
                list: [
                    { title: 'Informational', value: 'informational' },
                    { title: 'Commercial', value: 'commercial' },
                    { title: 'Transactional', value: 'transactional' },
                ],
            },
        }),
        defineField({
            name: 'contentType',
            title: 'Content Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Guide / Tutorial', value: 'guide' },
                    { title: 'Case Study', value: 'case-study' },
                    { title: 'Listicle', value: 'listicle' },
                    { title: 'News / Update', value: 'news' },
                ],
            },
        }),
        defineField({
            name: 'aiSummary',
            title: 'AI Summary',
            type: 'text',
            rows: 4,
            description: 'Short AI-generated summary for quick reading (displayed on click)',
        }),
        defineField({
            name: 'keyTakeaways',
            title: 'Key Takeaways',
            type: 'array',
            of: [{ type: 'string' }],
            description: '3-5 bullet point insights',
        }),
        defineField({
            name: 'contentOutline',
            title: 'Content Outline',
            type: 'text',
            rows: 5,
            description: 'Bullet points of main sections for AI understanding',
        }),
        defineField({
            name: 'faq',
            title: 'Frequently Asked Questions',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'question', type: 'string', title: 'Question' }),
                    defineField({ name: 'answer', type: 'text', title: 'Answer' }),
                ]
            }],
        }),
        defineField({
            name: 'ogTitle',
            title: 'Social Share Title (OG)',
            type: 'string',
        }),
        defineField({
            name: 'ogDescription',
            title: 'Social Share Description (OG)',
            type: 'text',
            rows: 2,
        }),
        defineField({
            name: 'ogImage',
            title: 'Social Share Image (OG)',
            type: 'image',
        }),
        defineField({
            name: 'canonicalUrl',
            title: 'Canonical URL Override',
            type: 'url',
        }),
        defineField({
            name: 'noIndex',
            title: 'No Index',
            type: 'boolean',
            description: 'Hide this post from search engines',
            initialValue: false,
        }),
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection
            return { ...selection, subtitle: author && `by ${author}` }
        },
    },
})
