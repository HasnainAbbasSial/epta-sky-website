import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'service',
    title: 'Service',
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
            name: 'description',
            title: 'Short Description',
            type: 'text',
        }),
        defineField({
            name: 'icon',
            title: 'Icon Name (Lucide)',
            type: 'string',
            description: 'Name of the Lucide icon to use (e.g. "Search", "BarChart")',
        }),
        defineField({
            name: 'body',
            title: 'Full Details',
            type: 'blockContent',
        }),
    ],
})
