"use client";

import { motion } from "framer-motion";
import { Phone, ScanLine, Activity } from "lucide-react";
import { hero, business } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useChat } from "@/components/chat-provider";

export function Hero() {
  const { openChat } = useChat();

  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-graphite via-graphite/95 to-graphite/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,212,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Electric accent line */}
        <motion.div
          className="absolute left-0 top-1/3 h-px w-full bg-gradient-to-r from-transparent via-electric/40 to-transparent"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Badge className="mb-6">{hero.badge}</Badge>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {hero.headline.split(". ").map((part, i) => (
              <span key={i}>
                {i === 0 ? (
                  <span className="text-white">{part}. </span>
                ) : (
                  <span className="bg-gradient-to-r from-electric to-electric/70 bg-clip-text text-transparent">
                    {part}
                  </span>
                )}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {hero.subheadline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button size="lg" onClick={() => openChat()}>
              {hero.primaryCta}
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href={business.phoneHref}>
                <Phone className="h-4 w-4" />
                {hero.secondaryCta}
              </a>
            </Button>
          </div>

          <p className="mt-6 text-xs tracking-wide text-muted/80 sm:text-sm">
            {hero.microcopy}
          </p>
        </motion.div>

        {/* Diagnostic card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-electric/20 via-transparent to-amber/10 blur-xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-graphite-light/90 backdrop-blur-xl">
            {/* Card header */}
            <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] px-5 py-3">
              <div className="flex items-center gap-2">
                <ScanLine className="h-4 w-4 text-electric" />
                <span className="font-mono text-xs font-semibold tracking-widest text-electric">
                  {hero.diagnosticCard.title}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                <span className="font-mono text-[10px] text-muted">LIVE</span>
              </div>
            </div>

            {/* Card body */}
            <div className="space-y-4 p-5 font-mono text-sm">
              <div className="grid gap-3">
                <Row label="Vozilo" value={hero.diagnosticCard.vehicle} />
                <Row label="Problem" value={hero.diagnosticCard.problem} highlight />
                <Row label="Simptomi" value={hero.diagnosticCard.symptoms} />
              </div>

              <div className="rounded-lg border border-amber/20 bg-amber/5 p-3">
                <div className="mb-1 flex items-center gap-2 text-[10px] uppercase tracking-widest text-amber">
                  <Activity className="h-3 w-3" />
                  Preporuka
                </div>
                <p className="text-xs text-white/90">
                  {hero.diagnosticCard.recommendation}
                </p>
              </div>

              {/* Oscilloscope bars */}
              <div className="flex h-8 items-end gap-1 pt-2">
                {[40, 65, 30, 80, 45, 70, 35, 90, 50, 75, 40, 60].map(
                  (h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-sm bg-electric/30"
                      animate={{ height: [`${h * 0.3}%`, `${h}%`, `${h * 0.3}%`] }}
                      transition={{
                        duration: 1.5 + i * 0.1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Row({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
      <span className="min-w-[80px] text-[10px] uppercase tracking-widest text-muted">
        {label}:
      </span>
      <span
        className={
          highlight ? "text-amber" : "text-white/90"
        }
      >
        {value}
      </span>
    </div>
  );
}
