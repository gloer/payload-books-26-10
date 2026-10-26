import { CollectionConfig, slugField } from "payload";

export const Genres: CollectionConfig = {
    slug: "genres",
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: "title",
    },
    fields: [
        {
            name: "title",
            type: "text",
            label: "Tittel på genren",
            required: true,
        },
        slugField(),
    ],
};