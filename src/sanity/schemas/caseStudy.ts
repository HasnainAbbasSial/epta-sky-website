import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'caseStudy',
    title: 'Case Study',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'client',
            title: 'Client Name',
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
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'results',
            title: 'Results',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Key results e.g. "Increased traffic by 50%"',
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            description: 'Short summary for the case study list',
        }),
        defineField({
            name: 'metaDescription',
            title: 'Meta Description',
            type: 'text',
            description: 'SEO description for search engines',
            rows: 3,
        }),
        defineField({
            name: 'body',
            title: 'Case Study Details',
            type: 'blockContent',
        }),
    ],
})
