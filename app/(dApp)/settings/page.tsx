"use client";

import { useCurrentUser } from "@/hooks/use-current-user";
import { logOut } from "@/actions/sign-out";

const SettingsPage = () => {
  const session = useCurrentUser();

  console.log(session);

  const onClick = () => {
    logOut();
  };

  return (
    <div className="min-h-screen">
      <h2>User Settings</h2>
      <p>Review or edit your details...</p>

      <button onClick={onClick}>signout</button>
    </div>
  );
};

export default SettingsPage;
