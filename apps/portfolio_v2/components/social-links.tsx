import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const socialLinks = [
  { name: "GitHub", handle: "@felixmacaspac", url: "https://github.com/felixmacaspac" },
  { name: "v0.dev", handle: "@felixmacaspac", url: "https://v0.dev/@felixmacaspac" },
  { name: "HubSpot Community", handle: "@felixmacaspac", url: "#" },
  { name: "LinkedIn", handle: "felixmacaspac", url: "https://linkedin.com/in/felixmacaspac" },
]

export function SocialLinks() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {socialLinks.map((social) => (
        <Link key={social.name} href={social.url} className="block">
          <Card className="group border-border hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm">
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                  {social.name}
                </div>
                <div className="text-sm text-muted-foreground">{social.handle}</div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
