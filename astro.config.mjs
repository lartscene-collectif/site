// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import { rewriteAssetImages } from './src/lib/rewrite-asset-images.mjs';

export default defineConfig({
	markdown: {
		processor: satteri({ mdastPlugins: [rewriteAssetImages] }),
	},
});
