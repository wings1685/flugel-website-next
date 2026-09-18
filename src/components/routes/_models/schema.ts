import * as v from "valibot";

const BlogEntrySchema = v.object({
	title: v.string(),
	link: v.string(),
	published: v.string(),
	summary: v.string(),
});
export type BlogEntry = v.InferOutput<typeof BlogEntrySchema>;
export const BlogEntriesSchema = v.array(BlogEntrySchema);
export type BlogEntries = v.InferOutput<typeof BlogEntriesSchema>;
