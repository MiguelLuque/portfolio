import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 px-5 py-8 text-center text-sm text-slate-600 sm:px-8">
      <p>&copy; {new Date().getFullYear()} {profile.name}. Built with Next.js, TypeScript and Tailwind CSS.</p>
    </footer>
  );
}
