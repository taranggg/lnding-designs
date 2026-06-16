import { Shield, Zap, Lock, Users, TrendingUp, FileCheck } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const features = [
  {
    icon: Shield,
    title: "Verified Network",
    description:
      "Every creator and brand is manually verified by our team to ensure quality and authenticity.",
  },
  {
    icon: Zap,
    title: "AI-Powered Matching",
    description:
      "Smart algorithms match creators with brands based on audience, niche, and campaign goals.",
  },
  {
    icon: Lock,
    title: "Secure Contracts",
    description:
      "Auto-generated contracts protect both parties with clear terms, deliverables, and payment schedules.",
  },
  {
    icon: Users,
    title: "Premium Brands",
    description:
      "Work with top-tier brands that value quality content and fair compensation.",
  },
  {
    icon: TrendingUp,
    title: "Campaign Analytics",
    description:
      "Track performance metrics and insights to optimize your collaborations and grow your reach.",
  },
  {
    icon: FileCheck,
    title: "Compliance First",
    description:
      "Built-in compliance tools ensure all campaigns meet regulatory requirements and platform guidelines.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-6 bg-card" id="features">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-500 font-medium">
            Why Choose{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              LinkFluence
            </span>
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Built for Premium Collaborations
          </h2>
          <p className="text-[17px] leading-7 text-neutral-700">
            Everything you need to create successful, compliant partnerships
            between verified creators and trusted brands.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border border-border bg-card p-6 md:p-7 hover-lift"
            >
              <CardHeader className="p-0 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-[15px] leading-6 text-neutral-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
