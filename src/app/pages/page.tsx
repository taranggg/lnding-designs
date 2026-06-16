import Link from "next/link";
import { sitePages } from "@/data/site-pages";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-semibold">Pages</h1>
      <div className="flex gap-3">
        {sitePages.map((page) => (
          <Link
            key={page.id}
            href={page.href}
            className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-accent transition-colors"
          >
            {page.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
