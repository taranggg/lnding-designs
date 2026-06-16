import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { sitePages } from "@/data/site-pages";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const pageDetails: Record<string, { description: string; accent: string }> = {
  minimal: {
    description: "Clean typography, generous whitespace, and a calm, understated feel.",
    accent: "from-zinc-400 to-zinc-600",
  },
  bold: {
    description: "Vivid gradients, strong contrast, and confident, energetic visuals.",
    accent: "from-[#53a6ff] to-[#7b5cf6]",
  },
  glass: {
    description: "Frosted layers, soft shimmer, and a refined, airy aesthetic.",
    accent: "from-sky-300 to-indigo-400",
  },
};

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-background px-6 py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,oklch(0.97_0_0),transparent_60%)] dark:bg-[radial-gradient(circle_at_50%_0%,oklch(0.205_0_0),transparent_60%)]" />

      <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Three takes on one landing page
        </h1>
        <p className="max-w-lg text-balance text-lg text-muted-foreground">
          Explore minimal, bold, and glass interpretations of the same product story — pick the
          one that fits your vibe.
        </p>
      </div>

      <div className="mt-14 grid w-full max-w-5xl gap-6 sm:grid-cols-3">
        {sitePages.map((page) => {
          const details = pageDetails[page.id];
          return (
            <Link key={page.id} href={page.href} className="group">
              <Card className="h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:ring-foreground/20">
                <CardHeader>
                  <div
                    className={`mb-4 h-1.5 w-10 rounded-full bg-linear-to-r ${details.accent}`}
                  />
                  <CardTitle className="text-lg">{page.label}</CardTitle>
                  <CardDescription>{details.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors group-hover:gap-2">
                    View design
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
