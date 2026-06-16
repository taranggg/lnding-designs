import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Check } from "lucide-react";
import { useMemo } from "react";

const plans = [
  {
    name: "Creator",
    price: "Free",
    period: "",
    description: "For verified influencers",
    features: [
      "Free to join - no subscriptions",
      "AI-matched campaign offers",
      "Automated contracts & payouts",
      "Secure Stripe Connect payments",
      "Real-time notifications",
      "Portfolio showcase",
      "Performance tracking",
      "Analytics dashboard",
    ],
    cta: "Apply as Creator",
    popular: false,
  },
  {
    name: "Brand",
    price: "12%",
    period: "platform fee",
    description: "For premium brands",
    features: [
      "Free to sign up - no subscriptions",
      "12% platform fee per collaboration",
      "Fee capped at $1,500 maximum",
      "Minimum $65 fee for small campaigns",
      "Unlimited campaign creation",
      "AI creator matching",
      "Secure payment protection",
      "Contract automation",
      "Campaign analytics",
      "Content approval workflow",
      "Brand safety tools",
    ],
    cta: "Apply as Brand",
    popular: true,
  },
  {
    name: "Agency",
    price: "Custom",
    period: "",
    description: "For talent agencies",
    features: [
      "Manage multiple creators",
      "Bulk campaign tools",
      "Advanced analytics & insights",
      "Priority API access",
      "Custom integrations",
      "Priority creator matching",
      "Dedicated account manager",
      "White-label options",
      "Custom reporting dashboards",
      "Multi-workspace support",
      "Team collaboration tools",
    ],
    cta: "Apply as Agency",
    popular: false,
  },
];

interface PricingProps {
  highlightedRole?: "creator" | "brand" | "agency";
  onApply?: (role: string) => void;
}

export const Pricing = ({ highlightedRole, onApply }: PricingProps) => {
  const handleApplyClick = (role: string) => {
    onApply?.(role);
  };

  // Reorder plans to put highlighted role in the middle
  const orderedPlans = useMemo(() => {
    if (!highlightedRole) return plans;

    const highlighted = plans.find(
      (p) => p.name.toLowerCase() === highlightedRole,
    );
    const others = plans.filter(
      (p) => p.name.toLowerCase() !== highlightedRole,
    );

    if (highlighted && others.length === 2) {
      return [others[0], highlighted, others[1]];
    }
    return plans;
  }, [highlightedRole]);

  const maxFeatures = useMemo(
    () => Math.max(...plans.map((p) => p.features.length)),
    [],
  );

  return (
    <section className="py-24 px-6 bg-card" id="pricing">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-500 font-medium">
            Pricing Plans
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Choose Your Path
          </h2>
          <p className="text-[17px] leading-7 text-neutral-700">
            Simple, transparent pricing. Free to join, 12% platform fee per
            successful collaboration.
          </p>
          <div className="mt-4 inline-block px-6 py-2 bg-primary/10 rounded-full">
            <p className="text-sm font-medium text-primary">
              Platform fee: $65 minimum, $1,500 maximum cap
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 pt-6">
          {orderedPlans.map((plan, index) => {
            const isHighlighted =
              highlightedRole && plan.name.toLowerCase() === highlightedRole;

            return (
              <Card
                key={index}
                className={`relative border bg-card hover-lift flex flex-col transition-all duration-300 ${
                  isHighlighted
                    ? "border-primary shadow-premium scale-105"
                    : "border-border hover:border-primary/50"
                }`}
              >
                {isHighlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-block px-6 py-2 bg-gradient-primary text-primary-foreground text-sm font-semibold rounded-full shadow-lg">
                      For You
                    </span>
                  </div>
                )}
                <CardHeader className="pb-6 pt-10">
                  <CardTitle className="text-3xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-8 mb-2">
                    <span
                      className={`text-5xl font-bold ${isHighlighted ? "bg-gradient-primary bg-clip-text text-transparent" : "text-foreground"}`}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-muted-foreground text-lg ml-2">
                        {plan.period}
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="pb-8 flex-1">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-base text-foreground leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                    {Array.from({
                      length: Math.max(0, maxFeatures - plan.features.length),
                    }).map((_, i) => (
                      <li
                        key={`pad-${i}`}
                        className="flex items-start gap-3 opacity-0 select-none pointer-events-none"
                        aria-hidden="true"
                      >
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-base text-foreground">.</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto pt-4">
                  <Button
                    variant="gradient"
                    size="lg"
                    className="w-full text-base font-semibold"
                    onClick={() => handleApplyClick(plan.name.toLowerCase())}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
