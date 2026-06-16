import { Card } from "@/components/ui/card";
import { Users, Building2, Target } from "lucide-react";

export type InviteRole = "creator" | "agency" | "brand";

interface RoleSelectionInviteProps {
  onRoleSelect: (role: InviteRole) => void;
}

export const RoleSelectionInvite = ({
  onRoleSelect,
}: RoleSelectionInviteProps) => {
  const roles = [
    {
      id: "creator" as InviteRole,
      icon: Users,
      title: "Creator",
      description: "Lorem ipsum dolor sit amet",
      comingSoon: false,
    },
    {
      id: "agency" as InviteRole,
      icon: Building2,
      title: "Agency",
      description: "Consectetur adipiscing elit",
      comingSoon: true,
    },
    {
      id: "brand" as InviteRole,
      icon: Target,
      title: "Brand",
      description: "Sed do eiusmod tempor",
      comingSoon: false,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Choose Your Role</h2>
        <p className="text-muted-foreground">
          Select how you'd like to join
        </p>
      </div>

      <div className="grid gap-4">
        {roles.map((role) => (
          <Card
            key={role.id}
            className={`p-6 transition-all ${role.comingSoon ? "opacity-60 cursor-not-allowed" : "cursor-pointer hover:border-primary hover:shadow-md"}`}
            onClick={() => !role.comingSoon && onRoleSelect(role.id)}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                <role.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold mb-1">{role.title}</h3>
                  {role.comingSoon && (
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      Coming Soon
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {role.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
