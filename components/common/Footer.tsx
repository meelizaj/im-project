import Link from "next/link";

const footerSections = {
  links: [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    { name: "Book Appointment", href: "/book-appointment" },
    { name: "Find a Doctor", href: "/doctors" },
    { name: "Telemedicine", href: "/telemedicine" },
    { name: "Patient Support", href: "/support" },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative mt-auto overflow-hidden bg-[#0f1c2f] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
        <div className="space-y-5">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
              Zenith Care
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-white">
              Caring for every step of your health journey.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-300">
            Compassionate doctors, modern facilities, and simple appointment
            booking designed to make care feel more personal and accessible.
          </p>

          <Link
            href="/book-appointment"
            className="inline-flex rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
          >
            Schedule a Visit
          </Link>
        </div>

        <div className="space-y-5">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            {footerSections.links.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="transition hover:text-sky-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5">
          <h3 className="text-lg font-semibold text-white">Services</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            {footerSections.services.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="transition hover:text-sky-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5">
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <div className="space-y-3 text-sm leading-7 text-slate-300">
            <p>123 Wellness Avenue, Singapore 018956</p>
            <p>+65 6123 4567</p>
            <p>care@zenithcare.com</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
              Open Hours
            </p>
            <p className="mt-3 text-sm text-slate-200">
              Mon - Sat: 8:00 AM - 8:00 PM
            </p>
            <p className="text-sm text-slate-400">
              Emergency support available 24/7
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between xl:px-10">
          <p>(c) 2026 Zenith Care. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="transition hover:text-sky-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-sky-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
