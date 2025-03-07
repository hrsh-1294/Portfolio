import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export function Resume() {
  return (
    <section id="resume" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-space-grotesk text-4xl font-bold mb-12 text-center text-primary">
            Resume
          </h2>
          <Card className="max-w-2xl mx-auto bg-card/20 backdrop-blur-lg border-border">
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground mb-6">
                Download my resume to learn more about my experience and qualifications.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  size="lg"
                >
                  <a
                    href="C:\Users\harsh\Downloads\Resume 4.pdf" // Add your resume PDF path here
                    download
                    className="flex items-center gap-2"
                  >
                    <FileDown className="h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
