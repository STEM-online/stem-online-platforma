import { defineCollection, z } from 'astro:content';

const subjects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number().optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    subject: z.string(),
    date: z.date(),
    author: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = { subjects, blog };