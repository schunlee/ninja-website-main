import { MDXRemote } from 'next-mdx-remote/rsc'
 
export default async function RemoteMdxPage() {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  const res = await fetch('https://app-1001.s3.us-west-000.backblazeb2.com/Markdown-Demo.mdx')
  const markdown = await res.text()
  return <MDXRemote source={markdown} />
}

