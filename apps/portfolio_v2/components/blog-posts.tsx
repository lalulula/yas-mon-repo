import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { POSTS } from '@/lib/constants/data.consts';

export function BlogPosts() {
  return (
    <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
      {POSTS.map((post, index) => (
        <Card
          key={`${post.title}-${index}`}
          className="group cursor-pointer border-border hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
          onClick={() =>
            window.open(post.link, '_blank', 'noopener,noreferrer')
          }
        >
          <CardContent className="p-6 sm:p-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                <span>{post.readTime}</span>
              </div>

              <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300 text-balance">
                {post.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed text-balance">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                <span>Read more</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
