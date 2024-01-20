import { UIBox } from "@monorepoplayground/components";
import { User } from "@monorepoplayground/models";

export function createDashboard(): string {
  const user: User = {
    name: "funny",
    surname: "things",
  };

  return `dashboard ${UIBox(user.name)}`;
}
