import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const rewriteAssetImages = {
	name: 'rewrite-asset-images',
	image(node, ctx) {
		if (!node.url || !node.url.startsWith('/assets/')) return;
		if (!ctx.fileURL) return;

		const filename = node.url.slice('/assets/'.length);

		const mdDir = path.dirname(fileURLToPath(ctx.fileURL));
		const parts = mdDir.split(path.sep);
		const srcIdx = parts.lastIndexOf('src');
		const srcDir = srcIdx === -1 ? mdDir : parts.slice(0, srcIdx + 1).join(path.sep);

		const assetsDir = path.join(srcDir, 'assets');
		const rel = path.relative(mdDir, assetsDir).split(path.sep).join('/');
		const newUrl = rel ? `${rel}/${filename}` : filename;

		ctx.setProperty(node, 'url', newUrl);
	},
};
