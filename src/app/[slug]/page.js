import { blogPosts } from "@/src/data/data"


async function getBlogpost(slug){
 const post = await blogPosts.find((post)=>post.slug===slug)||null
 return post 
}

export async function generateMetadata({params}){
  const post = await getBlogpost(params.slug)
  if (!post) return { title: "Blog Not Found" };
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${process.env.BASE_URL}/${post.slug}`,
    },
  }
}

export default async function page({params}) {
  const post = await getBlogpost(params.slug)
  if(!post) return (
    <div className="flex w-full h-screen justify-center items-center">
      <h1 className="text-4xl text-red-700">Blog Not Found</h1>
    </div>
  )
  return (
    <>
      <h1>{post.title}</h1>
      <h2>{post.description}</h2>
      <p>{post.content}</p>
    </>
  )
}
export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}
