import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content' }),
  schema: z.object({
    title: z.string().optional()
  })
})

const artistes = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/artistes' }),
  schema: z.object({
    nom: z.string(),
    style: z.string().optional(),
    instagram: z.string().optional(),
    youtube: z.string().optional(),
    spotify: z.string().optional(),
    presse: z.string().optional(),
    rider: z.string().optional(),
    contact: z.string().optional(),
    image_cover: z.string().optional(),
    gallery: z
      .array(
        z.object({
          type: z.enum(['youtube', 'image']),
          url: z.string().optional(),
          src: z.string().optional(),
          alt: z.string().optional()
        })
      )
      .optional()
  })
})

export const collections = { pages, artistes }
