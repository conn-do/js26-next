import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'hal-js',
  apiKey: process.env.MICROCMS_API_KEY ?? '',
})

export type Category = {
  id: string
  name: string
}

export type Blog = {
  id: string
  title: string
  content: string
  category: Category
}
