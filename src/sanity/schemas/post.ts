import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    groups: [
        { name: 'main', title: 'Main Content & SEO' },
        { name: 'advanced', title: 'Advanced & Keywords' },
        { name: 'insights', title: 'AI & Insights' },
        { name: 'social', title: 'Social Share' },
    ],
    fields: [
        // --- GROUP 1: MAIN CONTENT & BASIC SEO ---
        defineField({
            name: 'title',
            title: 'H1 Post Title',
            type: 'string',
            group: 'main',
            description: 'The primary title of your article (displayed as H1).',
        }),
        defineField({
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            group: 'main',
            description: 'The unique web address for this post.',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'metaTitle',
            title: 'Meta Title (SEO Title)',
            type: 'string',
            group: 'main',
            description: 'Separate title for Google search results. Recommended: 50-60 characters.',
        }),
        defineField({
            name: 'metaDescription',
            title: 'Meta Description',
            type: 'text',
            group: 'main',
            rows: 3,
            description: 'The snippet shown in search results. Recommended: 150-160 characters.',
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' },
            group: 'main',
        }),
        defineField({
            name: 'mainImage',
            title: 'Featured Image',
            type: 'image',
            group: 'main',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    description: 'Description for accessibility and SEO.',
                }
            ]
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            group: 'main',
            of: [{ type: 'reference', to: { type: 'category' } }],
        }),
        defineField({
            name: 'body',
            title: 'Article Body',
            type: 'blockContent',
            group: 'main',
        }),
        defineField({
            name: 'excerpt',
            title: 'Post Excerpt',
            type: 'text',
            group: 'main',
            rows: 2,
            description: 'Short summary for the blog list view.',
        }),

        // --- GROUP 2: ADVANCED & KEYWORDS ---
        defineField({
            name: 'primaryKeyword',
            title: 'Primary Keyword',
            type: 'string',
            group: 'advanced',
            description: 'The main term you want to rank for.',
        }),
        defineField({
            name: 'secondaryKeywords',
            title: 'Secondary Keywords',
            type: 'array',
            group: 'advanced',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'canonicalUrl',
            title: 'Canonical URL',
            type: 'url',
            group: 'advanced',
            description: 'Point to the original source if this is cross-posted content.',
        }),
        defineField({
            name: 'noIndex',
            title: 'Hide from Search (No Index)',
            type: 'boolean',
            group: 'advanced',
            initialValue: false,
        }),
        defineField({
            name: 'publishedAt',
            title: 'Publish Date',
            type: 'datetime',
            group: 'advanced',
        }),
        defineField({
            name: 'lastUpdated',
            title: 'Last Updated Override',
            type: 'datetime',
            group: 'advanced',
        }),
        defineField({
            name: 'enableTOC',
            title: 'Enable Table of Contents',
            type: 'boolean',
            group: 'advanced',
            initialValue: true,
        }),
        defineField({
            name: 'readingTime',
            title: 'Reading Time (Mins)',
            type: 'number',
            group: 'advanced',
        }),
        defineField({
            name: 'searchIntent',
            title: 'Search Intent',
            type: 'string',
            group: 'advanced',
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
            title: 'Content Format',
            type: 'string',
            group: 'advanced',
            options: {
                list: [
                    { title: 'Guide', value: 'guide' },
                    { title: 'Case Study', value: 'case-study' },
                    { title: 'Listicle', value: 'listicle' },
                    { title: 'News', value: 'news' },
                ],
            },
        }),

        // --- GROUP 3: AI & INSIGHTS ---
        defineField({
            name: 'aiSummary',
            title: 'AI Quick Summary',
            type: 'text',
            group: 'insights',
            rows: 4,
        }),
        defineField({
            name: 'keyTakeaways',
            title: 'Key Takeaways',
            type: 'array',
            group: 'insights',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'contentOutline',
            title: 'Content Outline',
            type: 'text',
            group: 'insights',
            rows: 4,
        }),
        defineField({
            name: 'faq',
            title: 'Frequently Asked Questions',
            type: 'array',
            group: 'insights',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'question', type: 'string', title: 'Question' }),
                    defineField({ name: 'answer', type: 'text', title: 'Answer' }),
                ]
            }],
        }),

        // --- GROUP 4: SOCIAL SHARE ---
        defineField({
            name: 'ogTitle',
            title: 'Social Share Title',
            type: 'string',
            group: 'social',
        }),
        defineField({
            name: 'ogDescription',
            title: 'Social Share Description',
            type: 'text',
            group: 'social',
            rows: 2,
        }),
        defineField({
            name: 'ogImage',
            title: 'Social Share Image',
            type: 'image',
            group: 'social',
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
