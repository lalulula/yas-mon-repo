import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

const socialLinks = [
  {
    name: 'GitHub(1)',
    handle: '@yunahkim',
    url: 'https://github.com/lalulula'
  },
  { name: 'GitHub(2)', handle: '@yunahkim', url: 'https://github.com/yunahya' },
  {
    name: 'LinkedIn',
    handle: 'yunahkim',
    url: 'https://www.linkedin.com/in/yunah-kim-b0ba76232/'
  }
];

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
                <div className="text-sm text-muted-foreground">
                  {social.handle}
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
