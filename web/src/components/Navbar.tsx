import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white border-neutral-border border-b">
      <nav className="flex justify-between items-center mx-auto px-4 py-4 max-w-6xl">
        <Link href="/" className="font-heading text-brand-primary text-xl">Lawnsly</Link>
        <div className="space-x-4 text-brand-primary">
          <Link href="#features" className="hover:underline" scroll={true}>Features</Link>
          <Link href="#how-it-works" className="hover:underline" scroll={true}>How It Works</Link>
        </div>
      </nav>
    </header>
  );
}
