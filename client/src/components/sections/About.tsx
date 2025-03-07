import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-space-grotesk text-4xl font-bold mb-12 text-center text-primary">
            About Me
          </h2>
          <Card className="bg-card/20 backdrop-blur-lg border-border">
            <CardContent className="p-6">
              <p className="font-inter text-muted-foreground leading-relaxed mb-6">
                I'm a passionate software developer with a strong focus on cloud
                technologies and DevOps practices. With experience in building
                scalable applications and implementing efficient deployment
                pipelines, I strive to create solutions that make a difference.
              </p>
              <p className="font-inter text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                through technical writing and mentoring.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}