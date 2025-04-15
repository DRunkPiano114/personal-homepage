import { Github, Twitter, AtSign } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/DRunkPiano114",
    icon: Github,
  },
  {
    name: "Twitter",
    url: "https://x.com/drunkpiano2005",
    icon: Twitter,
  },
  {
    name: "Weibo",
    url: "https://m.weibo.cn/profile/7960177644",
    icon: AtSign, // Using AtSign as a placeholder for Weibo
  },
]

export default function SocialLinks() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
      {socialLinks.map((link) => (
        <Link
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center rounded-lg border border-gray-200 p-6 transition-colors hover:bg-gray-50"
        >
          <link.icon className="h-8 w-8 text-gray-700" />
          <span className="mt-2 text-sm font-medium text-gray-900">{link.name}</span>
        </Link>
      ))}
    </div>
  )
}
