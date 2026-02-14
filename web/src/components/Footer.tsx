import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-primary py-8 text-white text-sm text-center">
      <div className="space-x-4 mb-2">
        <Link href="/privacy-policy" className="text-brand-accent hover:underline">
          Privacy Policy
        </Link>
        <Link href="/terms" className="text-brand-accent hover:underline">
          Terms of Service
        </Link>
      </div>
      <p className="text-neutral-200">
        &copy; {new Date().getFullYear()} Lawnsly. All rights reserved.
      </p>
    </footer>
  );
}
