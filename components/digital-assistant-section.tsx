"use client";

import { motion } from "framer-motion";
import { digitalAssistant } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function DigitalAssistantSection() {
  return (
    <section
      id="dijagnostika"
      className="relative border-t border-white/5 bg-graphite-light py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {digitalAssistant.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {digitalAssistant.subheadline}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-electric/40 via-electric/20 to-transparent sm:block lg:left-1/2" />

          <div className="space-y-8 sm:space-y-12">
            {digitalAssistant.steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col sm:flex-row ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-start gap-6 lg:items-center`}
              >
                <div className="hidden lg:block lg:w-1/2" />
                <div
                  className={`sm:w-full lg:w-1/2 ${
                    i % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"
                  }`}
                >
                  <div className="rounded-xl border border-white/5 bg-graphite p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-electric/10 font-mono text-sm font-bold text-electric">
                        {step.step}
                      </span>
                      <h3 className="font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted">{step.description}</p>
                  </div>
                </div>

                {/* Mobile step number */}
                <div className="absolute -left-0 flex h-8 w-8 items-center justify-center rounded-full border border-electric/30 bg-graphite-light font-mono text-xs font-bold text-electric sm:hidden">
                  {step.step}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Badge variant="outline" className="text-xs">
            {digitalAssistant.disclaimer}
          </Badge>
        </motion.div>
      </div>
    </section>
  );
}
