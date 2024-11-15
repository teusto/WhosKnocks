import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import "./styles.scss";

interface UserPassCardProps {
  userInfo?: {
    name: string;
    role: string;
    avatar?: string;
    email?: string;
    department?: string;
  };
}

export const UserPassCard = ({ userInfo }: UserPassCardProps) => {
  return (
    <div className="container">
      <AspectRatio.Root ratio={3 / 4}>
      </AspectRatio.Root>
    </div>
  );
};

export default UserPassCard;
