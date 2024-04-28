import { useCurrentUser } from "@/features/users/hooks/useCurrentUser";

const UserInfo = () => {
  const currentUser = useCurrentUser();

  if (!currentUser) return;
  return (
    <>
      <div>
        User id: <code>{currentUser.id}</code>
        <br />
        User role: <code>{currentUser.role}</code>
      </div>
    </>
  );
};

export default UserInfo;
