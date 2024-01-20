import React from "react";
import { createRoot } from "react-dom/client";
import { UIBox } from "@monorepoplayground/components";
import { User } from "@monorepoplayground/models";

export function Dashboard(): React.JSX.Element {
  const user: User = {
    name: "funny",
    surname: "things",
  };

  return (
    <>
      <h1>Dashboard 2</h1>

      <UIBox content={`${user.name} ${user.surname}`} />
    </>
  );
}

createRoot(document.body).render(<Dashboard />);
