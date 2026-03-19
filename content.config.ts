import { defineContentConfig, defineCollection } from '@nuxt/content'
import {z} from 'zod'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**',
    }),

    comments: defineCollection({
      type: 'data',
      source: 'comments/**.json',
      schema: z.object({
        comment: z.string(),
        commentator: z.string(),
      })
    })
  },
})
