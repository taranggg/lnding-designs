import { Logo } from "@/components/shared/Logo";

const columns = [
  {
    heading: "Product",
    links: [
      { label: "Creator", href: "/creator" },
      { label: "Brand", href: "/brand" },
      { label: "Agency", href: "/agency" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Support", href: "/support" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-[#0B0B0B] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
          <Logo src="/logoipsum-351.svg" />

          <div className="flex flex-wrap gap-12">
            {columns.map((col) => (
              <div key={col.heading}>
                <p className="text-[13px] font-semibold text-white/90 tracking-wide mb-4">
                  {col.heading}
                </p>
                <ul className="space-y-3">
                  {col.links.map(({ label, href }) => (
                    <li key={href}>
                      <a
                        href={href}
                        className="text-[13px] text-white/50 hover:text-white transition-colors"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-white/40">
          <span>© {new Date().getFullYear()} LinkFluence. All Rights Reserved.</span>
          <span>Influence. Amplified.</span>
        </div>
      </div>
    </footer>
  );
};
