import ky from "ky";
import * as v from "valibot";
import { BlogEntriesSchema } from "./schema";
import type { BlogEntry } from "./schema";

const blogEndpoint = 'https://wings.hatenablog.com';

export async function fetchEntries(): Promise<BlogEntry[]> {
	try {
		const xmlText = await ky.get(`${blogEndpoint}/feed`).text();
		const parser = new DOMParser();
		const doc = parser.parseFromString(xmlText, 'text/xml');
		const entries = Array.from(doc.querySelectorAll('entry'));

		const data = entries.map(entry => ({
			title: entry.querySelector('title')?.textContent || '',
			link: entry.querySelector('link')?.getAttribute('href') || '',
			published: entry.querySelector('published')?.textContent || '',
			summary: entry.querySelector('summary')?.textContent || '',
		})).slice(0, 5);

		return v.parse(BlogEntriesSchema, data) as BlogEntry[];
	} catch (error) {
		console.error(error);

		return [];
	}
}
