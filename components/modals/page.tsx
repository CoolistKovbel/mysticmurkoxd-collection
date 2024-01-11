"use client";

import Image from "next/image";
import { useCurrentUser } from "@/hooks/use-current-user";

import ChangeProfileImage from "@/components/profile-settings/changeProfileImage";
import ChangeProfileUsername from "@/components/profile-settings/changeUsername";
import ChangeUserEmail from "@/components/profile-settings/changeProfileEmail";

const SettingsPage = () => {
  const session = useCurrentUser();



  return (
    <div className="min-h-screen">

      <div className="p-4">
        <h2 className="text-2xl md:text-6xl font-bold">User Settings</h2>
        <p className="text-2xl font-bold">Review or edit your details...</p>
      </div>

      <div className="flex items-center gap-10 flex-col">

        <div className="flex items-center justify-between gap-20 flex-col md:flex-row">

          {/* Image */}
          <div className="flex items-center justify-center flex-col p-4">
            
            <div className="w-[300px] h-[300px] relative mb-5">
              <Image src="/MysticMurkoNFT.png" alt="kill myself" fill />
            </div>

            <ChangeProfileImage />
          </div>

          <div className="p-4">
            <h2 className="text-2xl font-bold">Current Account:</h2>
            <p className="text-sm">{session?.metaAddress}</p>
          </div>

        </div>

        {/* Username */}
        <div className="w-[50%]">
          <h2 className="text-2xl md:text-6xl font-bold mb-4">Change Username</h2>
          <p className="text-md md:text-xl font-bold">Current Name: {session?.username}</p>

          <ChangeProfileUsername />
        </div>

        {/* Email */}
        <div className="w-[50%]">
          <h2 className="text-2xl md:text-6xl font-bold mb-4">Change Email</h2>
          <p className="text-md md:text-xl font-bold">Current Email: {session?.email}</p>

          <ChangeUserEmail />
        </div>

      </div>

      
    </div>
  );
};

export default SettingsPage;
