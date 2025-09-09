import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const posts = [
  {
    title: "The Future of Web Development",
    excerpt: "Exploring how AI and automation are reshaping the way we build for the web.",
    date: "Dec 2024",
    readTime: "5 min",
  },
  {
    title: "Design Systems at Scale",
    excerpt: "Lessons learned from building and maintaining design systems across multiple products.",
    date: "Nov 2024",
    readTime: "8 min",
  },
  {
    title: "Performance-First Development",
    excerpt: "Why performance should be a first-class citizen in your development workflow.",
    date: "Oct 2024",
    readTime: "6 min",
  },
  {
    title: "The Art of Code Review",
    excerpt: "Building better software through thoughtful and constructive code reviews.",
    date: "Sep 2024",
    readTime: "4 min",
  },
]

export function BlogPosts() {
  return (
    <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
      {posts.map((post, index) => (
        <Card
          key={index}
          className="group cursor-pointer border-border hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
        >
          <CardContent className="p-6 sm:p-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300 text-balance">
                {post.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed text-balance">{post.excerpt}</p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                <span>Read more</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
