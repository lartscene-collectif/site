// @ts-check
import { defineConfig } from 'astro/config'
import { satteri } from '@astrojs/markdown-satteri'
import { rewriteAssetImages } from './src/lib/rewrite-asset-images.mjs'

export default defineConfig({
  site: 'https://www.collectiflartscene.com',
  markdown: {
    processor: satteri({ mdastPlugins: [rewriteAssetImages] })
  }
})
