"use client"
import React from 'react'
import { blogPosts } from '../data/data';
import { useRouter } from 'next/navigation';


export const BlogPage = () => {
  const router= useRouter()
    
  return (
    
    <div className='grid  gap-5 md:grid-cols-2   my-4 mx-2'>
      {
        blogPosts.map((post)=>(
          <div key={post.slug} className='w-full cursor-pointer' onClick={()=>router.push(`/${post.slug}`)}>
            <h1 className='text-3xl'>{post.title}</h1>
            <p className='font-sans '>{post.description}</p>
            <p className='font-serif'>{post.content}</p>
          </div>
        ))
      }
    </div>
  )
}
