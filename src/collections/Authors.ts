import { CollectionConfig, slugField } from "payload";

export const Authors: CollectionConfig = {
    slug: "authors",
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: "name",
    },
    fields: [
        {
            name: "name",
            type: "text",
            label: "Navn på forfatter",
            required: true,
            unique: true,
        },
        {
            name: "bio",
            type: "textarea",
            label: "Kort om forfatteren",
            required: true,
        },
        slugField({
            useAsSlug: "name"
        }),
    ],
};