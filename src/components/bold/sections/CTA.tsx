import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  onRequestInvite?: () => void;
}

export const CTA = ({ onRequestInvite }: CTAProps) => {
  return (
    <section className="py-32 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8 bg-card border border-border rounded-3xl p-12 md:p-16 hover-lift">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Lorem Ipsum Dolor
            <br />
            <span className="gradient-text">Sit Amet Consectetur?</span>
          </h2>

          <p className="text-[17px] leading-7 text-neutral-700 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              variant="gradient"
              size="lg"
              className="group shadow-md hover:shadow-lg"
              onClick={() => onRequestInvite?.()}
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
