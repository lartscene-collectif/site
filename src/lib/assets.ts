import type { ImageMetadata } from 'astro';

const modules = import.meta.glob<{ default: ImageMetadata }>(
	'/src/assets/*.{jpg,jpeg,png,webp,gif,svg}',
	{ eager: true, import: 'default' },
);

const byName = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(modules)) {
	const filename = path.split('/').pop()!;
	byName.set(filename, mod);
}

export function resolveAsset(filename: string): ImageMetadata | undefined {
	return byName.get(filename);
}

export function resolveAssetUrl(filename: string): string | undefined {
	return byName.get(filename)?.src;
}
