"use client";

import { motion } from "framer-motion";
import {
  PenLine,
  MessagesSquare,
  ClipboardCheck,
  Calendar,
  type LucideIcon,
} from "lucide-react";
import { howItWorks } from "@/lib/data";
import { useChat } from "@/components/chat-provider";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, LucideIcon> = {
  PenLine,
  MessagesSquare,
  ClipboardCheck,
  Calendar,
};

export function HowItWorks() {
  const { openChat } = useChat();

  return (
    <section
      id="kako-radi"
      className="relative border-t border-white/5 bg-graphite py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {howItWorks.title}
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.steps.map((step, i) => {
            const Icon = iconMap[step.icon] ?? PenLine;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative text-center"
              >
                {i < howItWorks.steps.length - 1 && (
                  <div className="absolute left-[calc(50%+40px)] top-8 hidden h-px w-[calc(100%-80px)] bg-gradient-to-r from-electric/30 to-transparent lg:block" />
                )}
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-electric/20 bg-electric/5">
                  <Icon className="h-7 w-7 text-electric" />
                </div>
                <span className="font-mono text-xs text-electric">
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button size="lg" onClick={() => openChat()}>
            {howItWorks.cta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
