"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { business, contactSection } from "@/lib/data";
import { useChat } from "@/components/chat-provider";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const { openChat } = useChat();

  return (
    <section
      id="kontakt"
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
            {contactSection.title}
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-white/5 bg-graphite-light p-8"
          >
            <h3 className="text-xl font-bold text-white">{business.name}</h3>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-electric" />
                <div>
                  <p className="text-sm font-medium text-white">Lokacija</p>
                  <p className="text-sm text-muted">{business.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-electric" />
                <div>
                  <p className="text-sm font-medium text-white">Telefon</p>
                  <a
                    href={business.phoneHref}
                    className="text-sm text-muted transition-colors hover:text-electric"
                  >
                    {business.phone}
                  </a>
                  <br />
                  <a
                    href={business.landlineHref}
                    className="text-sm text-muted transition-colors hover:text-electric"
                  >
                    Fiksni: {business.landline}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaFacebook className="mt-0.5 h-5 w-5 shrink-0 text-electric" />
                <div>
                  <p className="text-sm font-medium text-white">Facebook</p>
                  <a
                    href={business.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted transition-colors hover:text-electric"
                  >
                    autoelektrika.berdik
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button onClick={() => openChat()}>
                <MessageCircle className="h-4 w-4" />
                {contactSection.ctas.describe}
              </Button>
              <Button variant="secondary" asChild>
                <a href={business.phoneHref}>
                  <Phone className="h-4 w-4" />
                  {contactSection.ctas.call}
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href={business.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="h-4 w-4" />
                  {contactSection.ctas.facebook}
                </a>
              </Button>
            </div>

            <p className="mt-6 text-xs text-muted/70">{contactSection.note}</p>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-xl border border-white/5"
          >
            <iframe
              title="Lokacija Autoelektrika Berdik"
              src="https://maps.google.com/maps?q=Ple%C5%A1ka+92,+Velika+Gorica&output=embed"
              className="h-full min-h-[350px] w-full grayscale contrast-125 invert"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="border-t border-white/5 bg-graphite-light p-4 text-center">
              <Button variant="ghost" size="sm" asChild>
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="h-4 w-4" />
                  Otvori lokaciju
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
