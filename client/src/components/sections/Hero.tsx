import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-background opacity-90" />
      </div>
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="font-space-grotesk text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Hi, I'm{" "}
            <span className="text-primary">Harsh Vashishth</span>
          </h1>
          <p className="font-inter text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A software developer and cloud/DevOps enthusiast passionate about
            building innovative solutions.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary text-primary-foreground font-bold py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get in touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}