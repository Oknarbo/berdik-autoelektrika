"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="relative border-t border-white/5 bg-graphite-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {testimonials.title}
          </h2>
        </motion.div>

        {/* TODO: zamijeniti stvarnim recenzijama s Facebooka/Googlea ako vlasnik odobri */}
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {testimonials.items.map((item, i) => (
            <motion.div
              key={item.initials}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-xl border border-white/5 bg-graphite p-6"
            >
              <Quote className="mb-4 h-6 w-6 text-electric/40" />
              <p className="text-sm leading-relaxed text-muted">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-electric/10 text-xs font-semibold text-electric">
                  {item.initials}
                </div>
                <span className="text-xs text-muted/60">Klijent</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
