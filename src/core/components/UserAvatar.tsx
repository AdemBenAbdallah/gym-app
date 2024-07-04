import { UserType } from "@/features/auth/schemas";
import { getAvatarFallbackName, getUploadThingUrl } from "@/utils/image-utils";
import { Avatar, AvatarProps } from "@mantine/core";

type Props = Partial<AvatarProps> & {
  user: UserType;
};
const UserAvatar = ({ user, ...res }: Props) => {
  return (
    <Avatar src={getUploadThingUrl(user?.avatarImageKey)} radius={"xl"} {...res}>
      {getAvatarFallbackName(user?.name)}
    </Avatar>
  );
};

export default UserAvatar;
