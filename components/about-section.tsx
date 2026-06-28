"use client";

import { motion } from "framer-motion";
import { aboutSection } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  return (
    <section className="relative border-t border-white/5 bg-graphite-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {aboutSection.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              {aboutSection.description}
            </p>
            <p className="mt-4 text-sm italic text-muted/80">
              {aboutSection.note}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {aboutSection.badges.map((badge) => (
              <Badge key={badge} variant="secondary" className="text-sm">
                {badge}
              </Badge>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
