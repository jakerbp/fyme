// collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
async function processMarkdown(markdown) {
  const result = await unified().use(remarkParse).use(remarkGfm).use(remarkRehype).use(rehypeStringify).process(markdown);
  return result.toString();
}
var posts = defineCollection({
  name: "posts",
  directory: "src/content/posts",
  // We'll create this directory next
  include: "**/*.md(x)?",
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
    date: z.string().transform((str) => new Date(str))
    // slug and content are automatically generated
  }),
  // Add the transform step
  async transform(document, utils) {
    return {
      ...document,
      // Replace raw content with processed HTML
      content: await processMarkdown(document.content)
    };
  }
});
var collections_default = defineConfig({
  collections: [posts]
});
export {
  collections_default as default
};
