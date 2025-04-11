import { formatDate } from "@/lib/utils"
import Link from "next/link"

// This would typically come from a database
async function getBlogPosts() {
  // Simulating a database fetch
  return [
    {
      id: 1,
      title: "Getting Started with Next.js",
      date: "2023-06-15",
      summary: "Learn how to build modern web applications with Next.js and React.",
      slug: "getting-started-with-nextjs",
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS",
      date: "2023-07-22",
      summary: "Tips and tricks for using Tailwind CSS effectively in your projects.Tips and tricks for using Tailwind CSS effectively in your projects.Tips and tricks for using Tailwind CSS effectively in your projects.Tips and tricks for using Tailwind CSS effectively in your projects.Tips and tricks for using Tailwind CSS effectively in your projects.Tips and tricks for using Tailwind CSS effectively in your projects.",
      slug: "mastering-tailwind-css",
    },
    {
      id: 3,
      title: "Building Responsive Layouts",
      date: "2023-08-10",
      summary: "A comprehensive guide to creating responsive web designs that work on all devices.",
      slug: "building-responsive-layouts",
    },
    {
      id: 4,
      
      date: "2023-09-05",
      summary: "Exploring upcoming trends and technologies in the web development landscape.",
      slug: "future-of-web-development",
    },
  ]
}

export default async function BlogPosts() {
  const posts = await getBlogPosts()

  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <article key={post.id} className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md">
          <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
          <time className="mt-1 block text-sm text-gray-500">{formatDate(post.date)}</time>
          <p className="mt-3 text-gray-600">{post.summary}</p>
          
        </article>
      ))}
    </div>
  )
}
