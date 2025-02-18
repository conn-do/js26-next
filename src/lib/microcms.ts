import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  // 自分で作成したAPIのドメインを指定
  serviceDomain: 'hal-js',
  apiKey: process.env.MICROCMS_API_KEY ?? '',
})

export type Blog = {
  id: string
  title: string
  content: string
}
