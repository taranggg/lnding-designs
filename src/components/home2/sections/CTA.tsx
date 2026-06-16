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
            Ready to Join the
            <br />
            <span className="gradient-text">Premium Creator Network?</span>
          </h2>

          <p className="text-[17px] leading-7 text-neutral-700 max-w-2xl mx-auto">
            <span className="bg-gradient-primary bg-clip-text text-transparent font-semibold">
              LinkFluence
            </span>{" "}
            is invite-only. Request access and our team will review your
            profile.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              variant="gradient"
              size="lg"
              className="group shadow-md hover:shadow-lg"
              onClick={() => onRequestInvite?.()}
            >
              Request Your Invite
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
