import { slugField, type CollectionConfig } from "payload";

export const Navlinks: CollectionConfig = {
    slug: "navlinks",
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "href",
            label: "Hvilken url skal linken gå til",
            type: "text",
            required: true,
        },
        {
            name: "linkname",
            label: "Hva skal stå inne i linken",
            type: "text",
            required: true,
            unique: true,
        },
        slugField({
            useAsSlug: 'linkname',
            slugify: ({ valueToSlugify }) =>
                valueToSlugify
                .toLowerCase()
                .replace(/æ/g, 'ae')
                .replace(/ø/g, 'o')
                .replace(/å/g, 'a')
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, ''),               
            }),
        ],
};