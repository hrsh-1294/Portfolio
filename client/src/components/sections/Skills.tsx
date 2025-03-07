import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  SiAmazon, 
  SiDocker, 
  SiKubernetes, 
  SiTerraform, 
  SiGithubactions,
  SiJenkins, 
  SiReact, 
  SiTypescript, 
  SiNodedotjs,
  SiCplusplus
} from "react-icons/si";

const skills = [
  { name: "AWS", icon: SiAmazon },
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "Terraform", icon: SiTerraform },
  { name: "GitHub Actions", icon: SiGithubactions },
  { name: "Jenkins", icon: SiJenkins },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "C++", icon: SiCplusplus },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-space-grotesk text-4xl font-bold mb-12 text-center text-primary">
            Skills
          </h2>
          <Card className="bg-card/20 backdrop-blur-lg border-border">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center"
                  >
                    <skill.icon className="w-12 h-12 text-primary mb-2" />
                    <span className="text-muted-foreground text-sm">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}