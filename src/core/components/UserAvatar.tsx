import { UserType } from "@/features/auth/schemas";
import { useCurrentUser } from "@/features/users/hooks/useCurrentUser";
import { InputUpdateUserType } from "@/features/users/schemas";
import { getAvatarFallbackName, getUploadThingUrl } from "@/utils/image-utils";
import { Avatar, AvatarProps } from "@mantine/core";
import React from "react";

type Props = Partial<AvatarProps> & {
  user: UserType;
};
const UserAvatar = ({ user, ...res }: Props) => {
  return (
    <Avatar
      src={getUploadThingUrl(user?.avatarImageKey)}
      radius={"xl"}
      {...res}
    >
      {getAvatarFallbackName(user?.name)}
    </Avatar>
  );
};

export default UserAvatar;
