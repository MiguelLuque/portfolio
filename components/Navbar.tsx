import { profile } from "@/data/profile";

const navItems = [
  { href: "#work", label: "Work" },
  { href: "#products", label: "Products" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/95 px-5 backdrop-blur sm:px-8">
      <div className="mx-auto flex max-w-page items-center justify-between gap-4 py-2">
        <a href="#top" className="py-2 text-[0.95rem] font-bold tracking-tight">
          {profile.displayName}
        </a>
        <nav aria-label="Main">
          <ul className="flex items-center gap-4 text-[0.95rem] sm:gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="block py-2 text-muted transition-colors hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href={profile.cvPath} download className="block py-2 font-semibold text-tile hover:text-ink">
                CV
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
