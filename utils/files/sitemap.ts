import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://your-domain-name.whatever/'
		},
		{
			url: 'https://your-domain-name.whatever/docs'
		},
		{
			url: 'https://your-domain-name.whatever/docs/pick-a-template'
		}
	];
}
