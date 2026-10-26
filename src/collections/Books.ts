import { CollectionConfig, slugField } from "payload";

export const Books: CollectionConfig = {
    slug: "books",
    access: {
        read: () => true
    },
    admin: {
        useAsTitle: "title",
    },
    fields: [
        {
            name: "title",
            type: "text",
            label: "Tittel",
            required: true,            
        },
        {
            name: "synopsis",
            type: "textarea",
            label: "Hva handler boka om?",
            required: true,
        },
        {
            name: "author",
            type: "relationship",
            relationTo: "authors",            
            required: true,
        },
        slugField(),
    ],
};