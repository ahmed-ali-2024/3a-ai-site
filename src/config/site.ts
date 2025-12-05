// Import site configuration from JSON file managed by Keystatic
import siteData from './site.json';

export const siteConfig = siteData;

export type SiteConfig = typeof siteConfig;
