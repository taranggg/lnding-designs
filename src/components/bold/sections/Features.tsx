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
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    icon: Zap,
    title: "Dolor Sit Amet",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
  {
    icon: Lock,
    title: "Consectetur Elit",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
  },
  {
    icon: Users,
    title: "Sed Do Eiusmod",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
  },
  {
    icon: TrendingUp,
    title: "Tempor Incididunt",
    description:
      "Mollit anim id est laborum, sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    icon: FileCheck,
    title: "Labore Et Dolore",
    description:
      "Accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore.",
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
              Us
            </span>
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Lorem Ipsum Dolor Sit Amet
          </h2>
          <p className="text-[17px] leading-7 text-neutral-700">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
