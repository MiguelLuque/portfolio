import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="bg-ink px-5 pb-10 text-paper/60 sm:px-8">
      <div className="mx-auto max-w-page border-t border-paper/15 pt-6 text-sm">
        © {new Date().getFullYear()} {profile.name}
      </div>
    </footer>
  );
}
