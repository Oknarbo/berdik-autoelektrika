"use client";

import { motion } from "framer-motion";
import {
  ZapOff,
  AlertTriangle,
  Lightbulb,
  BatteryWarning,
  Lock,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { problemSection } from "@/lib/data";
import { useChat } from "@/components/chat-provider";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, LucideIcon> = {
  ZapOff,
  AlertTriangle,
  Lightbulb,
  BatteryWarning,
  Lock,
  Wind,
};

export function ProblemSection() {
  const { openChat } = useChat();

  return (
    <section className="relative border-t border-white/5 bg-graphite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {problemSection.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {problemSection.description}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problemSection.cards.map((card, i) => {
            const Icon = iconMap[card.icon] ?? AlertTriangle;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-xl border border-white/5 bg-graphite-light p-6 transition-all duration-300 hover:border-electric/20 hover:shadow-lg hover:shadow-electric/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-electric/0 to-electric/0 transition-all duration-300 group-hover:from-electric/5 group-hover:to-transparent" />
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-electric/10">
                    <Icon className="h-6 w-6 text-electric" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {card.description}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-4 px-0 text-electric hover:bg-transparent hover:text-electric/80"
                    onClick={() => openChat(card.quickMessage)}
                  >
                    Pokreni upit →
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
