import { profile } from "@/data/profile";

const navItems = [
  { href: "#work", label: "Work" },
  { href: "#products", label: "Products" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/95 px-5 backdrop-blur sm:px-8">
      <div className="mx-auto flex max-w-page items-center justify-between gap-4 py-4">
        <a href="#top" className="text-[0.95rem] font-bold tracking-tight">
          {profile.displayName}
        </a>
        <nav aria-label="Main">
          <ul className="flex items-center gap-5 text-[0.95rem] sm:gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-muted transition-colors hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
