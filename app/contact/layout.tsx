import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact SCS Corp — Get a Free Property Services Quote | Australia-Wide",
  description:
    "Contact SCS Corp for a free quote on cleaning, building maintenance, traffic control, or lawn care. Call +61 1300 223 229 or send us a message. Nationwide service across all Australian states.",
  alternates: { canonical: "https://scscorp.biz/contact" },
  openGraph: {
    title: "Contact SCS Corp — Free Quote for Property Services",
    description:
      "Get in touch for professional cleaning, maintenance, traffic control & lawn care. Free quotes, no obligation. Nationwide coverage.",
    url: "https://scscorp.biz/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
