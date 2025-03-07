import { Scene } from "@/components/canvas/Scene";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";
import { AnimatePresence, motion } from "framer-motion";
import { Suspense, useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-background">
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
          }}
          className="w-12 h-12 bg-primary"
        />
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="fixed inset-0 z-0">
          <Scene />
        </div>
        <div className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Resume />
          <Contact />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}