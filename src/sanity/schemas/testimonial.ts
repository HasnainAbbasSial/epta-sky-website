import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Client Name',
            type: 'string',
        }),
        defineField({
            name: 'role',
            title: 'Role / Company',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Client Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'quote',
            title: 'Quote',
            type: 'text',
        }),
    ],
})
