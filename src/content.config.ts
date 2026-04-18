import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const dateField = z
  .union([z.string(), z.date()])
  .transform(d => (d instanceof Date ? d.toISOString().split('T')[0] : String(d)));

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: dateField,
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

const jobs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/jobs' }),
  schema: z.object({
    date: dateField,
    title: z.string(),
    company: z.string(),
    location: z.string(),
    range: z.string(),
    url: z.string(),
  }),
});

const featured = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/featured' }),
  schema: ({ image }) =>
    z.object({
      date: z.string(),
      title: z.string(),
      cover: image(),
      github: z.string().optional().default(''),
      external: z.string().optional().default(''),
      cta: z.string().optional().default(''),
      tech: z.array(z.string()).default([]),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    date: dateField,
    title: z.string(),
    github: z.string().optional().default(''),
    external: z.string().optional().default(''),
    tech: z.array(z.string()).default([]),
    company: z.string().optional().default(''),
    ios: z.string().optional().default(''),
    android: z.string().optional().default(''),
    showInProjects: z.boolean().default(true),
  }),
});

export const collections = { posts, jobs, featured, projects };
