import fs from "fs";
import { join } from "path";

import matter from "gray-matter";
const postsDir = join(process.cwd(), "posts");

type MetaData = {
  title: string;
  date: Date;
  abstract: string;
  category: string;
  banner_url: string;
  tags?: string[];
  description?: string;
  draft?: boolean;
};

// 根据文件名读取 markdown 文档内容
export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");

  const fullPath = join(postsDir, `${realSlug}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  // 解析 markdown 元数据
  const { data, content, excerpt } = matter(fileContents, {
    excerpt: true,
  });
  console.log("Parsed Content:", content); // 打印解析后的内容
  console.log("Parsed Data:", data);       // 打印解析后的元数据

  // 配置文章元数据
  const meta = { ...data } as MetaData;
  const { banner_url, abstract } = meta;

  return { slug: realSlug, meta, abstract, content, excerpt, banner_url};
}

// 获取 /posts文件夹下所用markdown文档
export function getAllPosts() {
  const slugs = fs.readdirSync(postsDir);

  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // 排除草稿文件
    .filter((c) => !/\.draft$/.test(c.slug)).filter((c) => c.slug.includes('post'));
    // .filter((c) => !c.meta.draft);
  return posts.sort((a, b) => +b.meta.date - +a.meta.date);
}