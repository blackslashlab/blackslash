import { defineCollection, z } from 'astro:content';

const productsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    category: z.string(),
    shortDescription: z.string(),
    description: z.string(),
    image: z.string(),
    featured: z.boolean().default(false),
    features: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string().optional(),
    })),
    specifications: z.array(z.object({
      parameter: z.string(),
      value: z.string(),
    })),
    downloads: z.array(z.object({
      name: z.string(),
      type: z.enum(['datasheet', 'manual', 'certificate', 'technical', 'other']),
      format: z.string(),
      fileSize: z.string().optional(),
      url: z.string(),
    })),
    applications: z.array(z.string()).optional(),
    seo: z.object({
      title: z.string(),
      description: z.string(),
    }),
  }),
});

export const collections = {
  products: productsCollection,
};
