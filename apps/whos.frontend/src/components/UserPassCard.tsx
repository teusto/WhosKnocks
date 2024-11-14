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
    <>future card</>
  );
};

export default UserPassCard;
