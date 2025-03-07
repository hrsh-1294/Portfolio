import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GithubIcon, ExternalLink } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const projects = [
  {
    title: "Cloud Deployment Platform",
    description: "Automated deployment platform built with AWS and Kubernetes",
    github: "https://github.com/hrsh-1294/cloud-platform",
    demo: "https://platform.harshvs.dev",
    image: "https://placehold.co/600x400/png", // Replace with actual project image
    tags: ["AWS", "Kubernetes", "TypeScript"],
  },
  {
    title: "DevOps Dashboard",
    description: "Real-time monitoring dashboard for DevOps metrics",
    github: "https://github.com/hrsh-1294/devops-dashboard",
    demo: "https://dashboard.harshvs.dev",
    image: "https://placehold.co/600x400/png", // Replace with actual project image
    tags: ["React", "Node.js", "Docker"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-space-grotesk text-4xl font-bold mb-12 text-center text-primary">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-card/20 backdrop-blur-lg border-border hover:border-primary transition-all duration-300">
                  <div className="overflow-hidden rounded-t-lg">
                    <AspectRatio ratio={16 / 9}>
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                      />
                    </AspectRatio>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-foreground">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-primary/10 text-primary px-2 py-1 rounded text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button variant="ghost" size="sm">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <GithubIcon className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}