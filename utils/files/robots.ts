import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/'
		},
		sitemap: 'https://your-domain-name.whatever/sitemap.xml'
	};
}
