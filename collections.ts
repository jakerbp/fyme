import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";

// Imports for Markdown processing
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm"; // For GitHub Flavored Markdown
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

// Function to process markdown to HTML
async function processMarkdown(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)        // Parse markdown
    .use(remarkGfm)          // Support GFM (tables, etc.)
    .use(remarkRehype)       // Convert markdown to HTML AST
    .use(rehypeStringify)    // Convert HTML AST to string
    .process(markdown);
  return result.toString();
}

const posts = defineCollection({
  name: "posts",
  directory: "src/content/posts", // We'll create this directory next
  include: "**/*.md(x)?",
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
    date: z.string().transform((str) => new Date(str)),
    // slug and content are automatically generated
  }),
  // Add the transform step
  async transform(document, utils) {
    return {
      ...document,
      // Replace raw content with processed HTML
      content: await processMarkdown(document.content),
    };
  },
});

export default defineConfig({
  collections: [posts],
}); 