import React from 'react'
import Link from 'next/link'
export const Header = () => {
  return (
    <div className='flex justify-around m-2 '>
       <div><Link href='/'>My Blogs</Link> </div>
       
       <div className='flex justify-center gap-3'>
        {/* <Link href='/blog'>Blog</Link>  */}
        <Link href='/login'>Login</Link> 
       </div>
    </div>
  )
}
