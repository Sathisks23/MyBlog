import React from 'react'
import { BlogPage } from '@/src/components/BlogPage'

export const metadata = {
  title: "My Blog - Latest Articles",
  description: "Read the latest blog posts on SEO, Next.js, and more!",
  keywords: "SEO, Next.js, Blogging",
  openGraph: {
    title: "My Blog - Latest Articles",
    description: "Read the latest blog posts on SEO, Next.js, and more!",
    url: `${process.env.BASE_URL}`,
    siteName: "My Blog",
    type: "website",
  },
}

export default function page(){
    return(
        <>
        <BlogPage/>
        </>
    )
}