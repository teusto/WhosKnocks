import React, { useState } from "react";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import "./styles.scss";
import QR from "./QR";

interface UserPassCardProps {
  userInfo?: {
    holderName: string;
    role: string;
    qrData?: string;
    cardTheme?: "default" | "rainbow" | "corporate";
    className?: string;
  };
}

interface EnhancedUserCardProps extends UserPassCardProps {
  location?: { lat: number; long: number };
  credentials: {
    id: string;
    attributes: Record<string, any>;
    expiration: number;
  };
  organizationId: string;
}

export const UserPassCard = ({ userInfo }: UserPassCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getThemeStyles = () => {
    switch (userInfo?.cardTheme) {
      case "rainbow":
        return "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500";
      case "corporate":
        return "bg-gradient-to-r from-blue-600 to-blue-800";
      default:
        return "bg-white";
    }
  };

  return (
    <div
      className={`w-full max-w-md overflow-hidden shadow-lg ${userInfo?.className}`}
    >
      <AspectRatio.Root ratio={3 / 4}>
        <div className={`p-4 ${getThemeStyles()}`}>
          <div>
            Card Header
            <span className="text-white text-lg font-semibold">
              Corporate Access
            </span>
          </div>
          <div>
            Card Body
            <div>
                <p className="text-sm text-gray-600">Holder Name</p>
                <p className="text-lg font-semibold">{userInfo?.holderName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Role</p>
                <p className="text-md">{userInfo?.role}</p>
              </div>
              {isExpanded && (
                <div className="pt-4 border-t">
                  <div className="flex justify-center">
                    {userInfo?.qrData && (
                      <div className="relative group">
                        <QR value={userInfo?.qrData} />
                      </div>
                    )}
                  </div>
                </div>
              )}
          </div>
        </div>
      </AspectRatio.Root>
    </div>
  );
};

export default UserPassCard;
