"use client";

import { motion } from "framer-motion";
import { ScanLine, CalendarCheck, MessageSquare, type LucideIcon } from "lucide-react";
import { premiumSection } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  ScanLine,
  CalendarCheck,
  MessageSquare,
};

export function PremiumSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-graphite py-20 sm:py-28">
      {/* Accent background */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-electric/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-amber/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-electric">
              Appointment only
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {premiumSection.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              {premiumSection.description}
            </p>
          </motion.div>

          <div className="space-y-4">
            {premiumSection.principles.map((principle, i) => {
              const Icon = iconMap[principle.icon] ?? ScanLine;
              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 rounded-xl border border-white/5 bg-graphite-light/50 p-5 backdrop-blur-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-electric/20 bg-electric/5">
                    <Icon className="h-5 w-5 text-electric" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      {principle.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
