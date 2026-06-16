import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RoleSelectionInvite, InviteRole } from "./RoleSelectionInvite";

interface RequestInviteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Hook your own routing/submission logic here. Defaults to just closing the modal. */
  onRoleSelect?: (role: InviteRole) => void;
}

export const RequestInviteModal = ({
  open,
  onOpenChange,
  onRoleSelect,
}: RequestInviteModalProps) => {
  const handleRoleSelect = (role: InviteRole) => {
    onOpenChange(false);
    onRoleSelect?.(role);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-[#3BA9FF] to-[#5A5CFF] bg-clip-text text-transparent">
            Request Your Invite
          </DialogTitle>
          <DialogDescription>
            An invite-only platform connecting verified creators and trusted
            brands. Choose your role to continue.
          </DialogDescription>
        </DialogHeader>
        <RoleSelectionInvite onRoleSelect={handleRoleSelect} />
      </DialogContent>
    </Dialog>
  );
};
