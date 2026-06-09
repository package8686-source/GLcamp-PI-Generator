import { Globe2, Mail, MessageCircle, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { Logo } from "./Logo";
import { QRPlaceholder } from "./QRPlaceholder";

export function ClosingPage() {
  return (
    <section id="contact" className="ebook-page relative overflow-hidden bg-forest-900 p-0 text-white">
      <img
        className="absolute inset-0 h-full w-full object-cover opacity-28"
        src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2200&q=84"
        alt="Outdoor road landscape for GLcamp closing page"
      />
      <div className="absolute inset-0 bg-forest-900/[0.82]" />
      <div className="relative flex min-h-[inherit] flex-col justify-between p-8 sm:p-12 lg:p-16">
        <Logo light />

        <div className="max-w-4xl py-14">
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-white/60">Contact GLcamp</p>
          <h2 className="mt-6 font-display text-5xl font-extrabold leading-tight tracking-normal sm:text-6xl">
            Thank you
          </h2>
          <p className="mt-5 text-3xl font-extrabold tracking-normal">GO LIMITLESS</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.76]">
            For quotation, product details, model fitment and DDP shipping plan, please contact GLcamp.
          </p>

          <div className="mt-10 grid gap-4 text-base sm:grid-cols-2">
            <ContactItem icon={<MessageCircle className="h-5 w-5" />} label="Contact" value="Eamon" />
            <ContactItem icon={<Globe2 className="h-5 w-5" />} label="Website" value="gltruckcamp.com" />
            <ContactItem icon={<Mail className="h-5 w-5" />} label="Email" value="gltruckcamp@gzgreenlight.com" />
            <ContactItem icon={<Phone className="h-5 w-5" />} label="Phone / WhatsApp" value="+86 18520119770" />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-8 border-t border-white/20 pt-8 sm:flex-row sm:items-end">
          <p className="max-w-lg text-sm leading-6 text-white/[0.62]">
            Premium RV, pickup, camping and overland product supply with custom production and reliable international
            service.
          </p>
          <QRPlaceholder label="WhatsApp / Website" light />
        </div>
      </div>
    </section>
  );
}

type ContactItemProps = {
  icon: ReactNode;
  label: string;
  value: string;
};

function ContactItem({ icon, label, value }: ContactItemProps) {
  return (
    <div className="flex items-center gap-4 border border-white/[0.18] bg-white/[0.08] p-4">
      <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-white text-forest-900">{icon}</span>
      <span>
        <span className="block text-xs font-bold uppercase tracking-[0.2em] text-white/50">{label}</span>
        <span className="mt-1 block font-bold text-white">{value}</span>
      </span>
    </div>
  );
}
