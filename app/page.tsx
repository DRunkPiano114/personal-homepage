import BlogPosts from "@/components/blog-posts"
import SocialLinks from "@/components/social-links"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">DrunkPiano's Profile</h1>
          <p className="mt-3 text-xl text-gray-600">Thank you for visiting my profile. I really appreciate it.</p>
        </header>

        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Contact Me</h2>
          <SocialLinks />
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-bold text-gray-900">My Blog Posts</h2>
          <BlogPosts />
        </section>
      </div>
    </main>
  )
}
