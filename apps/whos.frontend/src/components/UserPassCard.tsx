import React, { useState } from "react";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import styles from "./userpasscard.module.scss";
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

  return (
      <AspectRatio.Root ratio={3 / 4}>
        
      </AspectRatio.Root>
  );
};

export default UserPassCard;
