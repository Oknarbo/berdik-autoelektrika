"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { useChat } from "@/components/chat-provider";
import { Button } from "@/components/ui/button";

export function ServicesSection() {
  const { openChat } = useChat();

  return (
    <section id="usluge" className="relative border-t border-white/5 bg-graphite-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {services.title}
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -3 }}
              className="group flex flex-col rounded-xl border border-white/5 bg-graphite p-5 transition-all duration-300 hover:border-electric/20"
            >
              <h3 className="text-base font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
              <div className="mt-3 rounded-md bg-white/[0.02] px-3 py-2">
                <p className="text-[10px] uppercase tracking-widest text-muted/60">
                  Najčešći simptomi
                </p>
                <p className="mt-0.5 text-xs text-muted">{service.symptoms}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="mt-3 self-start px-0 text-electric hover:bg-transparent"
                onClick={() => openChat(`Trebam pomoć s: ${service.title}`)}
              >
                Pošalji upit →
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
