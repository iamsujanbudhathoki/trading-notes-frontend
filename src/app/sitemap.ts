import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://tradenotes.com'; // Replace with actual domain

    // Static routes
    const routes = [
        '',
        '/learn',
        '/articles',
        '/tools',
        '/brokers',
        '/community',
        '/resources/books',
        '/about',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Add dynamic routes here (e.g., fetch from DB/CMS)
    // For now, we'll just return the static ones

    return routes;
}
