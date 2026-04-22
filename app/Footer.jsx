import Link from "next/link";

// Footer data - easy to update in one place
const FOOTER_CONFIG = {
  tagline: "We'd love to cooperate to build amazing",
  description:
    "Through a unique combination of construction, architecture, furniture and design disciplines and expertise.",
  contact: {
    phone: {
      label: "Call our office",
      value: "+234 8155045934",
      href: "tel:+2348155045934",
    },
    email: {
      label: "Send a message",
      value: "thobiloba33@gmail.com",
      href: "mailto:thobiloba33@gmail.com",
    },
  },
  companyLinks: [
    { href: "/about", label: "About Us" },
    { href: "/properties", label: "Properties" },
    { href: "/contact", label: "Contact" },
  ],
  address:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, et necessitatibus beatae. Quidem odio similique cum facilis temporibus fuga, soluta consectetur!",
  socialLinks: [
    { href: "https://facebook.com", label: "Facebook" },
    { href: "https://instagram.com", label: "Instagram" },
  ],
  copyright: { brand: "ElJefecito", brandHref: "#" },
};

const linkClassName = "text-xl font-medium text-gray-700 hover:text-black";
const headingClassName = "uppercase text-3xl font-bricolage mb-3";

function FooterContact() {
  const { phone, email } = FOOTER_CONFIG.contact;

  return (
    <div className="flex justify-between items-center w-full max-w-md">
      <div>
        <span className="text-xl block">{phone.label}</span>
        <h4 className="mt-3 text-xl font-semibold">
          <a href={phone.href} className="hover:underline">
            {phone.value}
          </a>
        </h4>
      </div>
      <div>
        <span className="text-xl block">{email.label}</span>
        <a
          href={email.href}
          className={`mt-3 text-lg hover:underline inline-block ${linkClassName}`}
        >
          {email.value}
        </a>
      </div>
    </div>
  );
}

function FooterLinkList({ title, links }) {
  return (
    <div className="flex flex-col space-y-3">
      <h3 className={headingClassName}>{title}</h3>
      {links.map(({ href, label }) => (
        <Link key={href} href={href} className={linkClassName}>
          {label}
        </Link>
      ))}
    </div>
  );
}

function FooterIntro() {
  return (
    <div className="lg:w-1/2 pr-10 lg:pr-0">
      <h2 className="font-bricolage text-6xl mb-6">{FOOTER_CONFIG.tagline}</h2>
      <span className="word-animate" aria-hidden />
      <p className="my-5 text-lg font-medium">{FOOTER_CONFIG.description}</p>
      <FooterContact />
    </div>
  );
}

function FooterColumns() {
  return (
    <div className="lg:w-1/2 flex flex-col lg:flex-row gap-8 lg:gap-12">
      <div>
        <FooterLinkList title="Company" links={FOOTER_CONFIG.companyLinks} />
        <div className="lg:flex-1 mt-5">
          <h5 className="font-bricolage text-3xl mb-3">Address</h5>
          <p className="text-lg font-medium max-w-sm">
            {FOOTER_CONFIG.address}
          </p>
        </div>
      </div>
      <FooterLinkList title="Follow Us" links={FOOTER_CONFIG.socialLinks} />
    </div>
  );
}

function FooterCopyright() {
  const { brand, brandHref } = FOOTER_CONFIG.copyright;
  const year = new Date().getFullYear();

  return (
    <div className="border-b border-gray-300 py-6 bg-white">
      <p className="text-center text-lg">
        © {year} copyright All Rights Reserved By{" "}
        <a href={brandHref} className="font-semibold hover:underline">
          {brand}
        </a>
      </p>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative z-10">
      <div
        className="absolute inset-0 bg-[url('/footer-bg.png')] invert z-[-1]"
        aria-hidden
      />
      <div
        className="absolute bottom-0 right-0 w-full h-full bg-[url('/footer-shape.svg')] bg-no-repeat bg-bottom-right invert z-[-1]"
        aria-hidden
      />

      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
          <FooterIntro />
          <FooterColumns />
        </div>
      </div>

      <FooterCopyright />
    </footer>
  );
}
