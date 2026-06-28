import { business, footer } from "@/lib/data";
import { FaFacebook } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-graphite-light py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <p className="text-sm font-bold tracking-[0.15em] text-white">
              {business.name}
            </p>
            <p className="mt-2 text-sm text-muted">{business.tagline}</p>
            <p className="mt-4 text-xs text-muted/60">{footer.disclaimer}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted/60">
              Kontakt
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <a
                  href={business.phoneHref}
                  className="transition-colors hover:text-white"
                >
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={business.landlineHref}
                  className="transition-colors hover:text-white"
                >
                  {business.landline}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted/60">
              Lokacija
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>{business.address}</li>
              <li>
                <a
                  href={business.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <FaFacebook className="h-4 w-4" />
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-muted/50">
          © {new Date().getFullYear()} Autoelektrika Berdik. Sva prava pridržana.
        </div>
      </div>
    </footer>
  );
}
