import { defineCollection, z } from 'astro:content';

/**
 * Content collections prepared for future CMS integration.
 * Blog posts, catalog items, and representative pages.
 */

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    locale: z.enum(['pt', 'en', 'es']).default('pt'),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const catalog = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    category: z.string(),
    image: z.string(),
    locale: z.enum(['pt', 'en', 'es']),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = {
  blog,
  catalog,
};
