import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'hal-js',
  apiKey: '0hnEA8jSd47RZ1dAekoM9MK4qs538D5LbDLy',
})

export type Blog = {
  id: string
  title: string
  content: string
}
