import { ReactNode } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Layout({ children }: { children: ReactNode }) {
  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b border-[#2A2A2A]">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <a className="font-space-grotesk text-2xl font-bold text-[#64FFDA]">
              HV
            </a>
          </Link>
          <div className="hidden md:flex space-x-8">
            {["about", "projects", "skills", "resume", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => handleSectionClick(e, section)}
                className="hover:text-primary transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
          <div className="flex space-x-4 items-center">
            <ThemeToggle />
            <Button variant="ghost" size="icon">
              <a
                href="https://github.com/hrsh-1294"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon">
              <a
                href="https://www.linkedin.com/in/harsh-vashishth-2125b9252/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon">
              <a href="mailto:harshvashishth12@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="bg-background text-foreground py-6 border-t border-[#2A2A2A]">
        <div className="container mx-auto px-6 text-center">
          <p className="font-inter text-sm">
            Designed & Built by Harsh Vashishth © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}