import logout from "@/features/auth/mutations/logout";
import { useCurrentUser } from "@/features/users/hooks/useCurrentUser";
import { useSession } from "@blitzjs/auth";
import { Routes } from "@blitzjs/next";
import { useMutation } from "@blitzjs/rpc";
import { Box, Indicator, Menu, Tooltip, rem } from "@mantine/core";
import {
  IconBook,
  IconHome,
  IconLogout,
  IconPencil,
  IconSettings,
  IconTrain,
  IconUserCircle,
  IconUserShield,
} from "@tabler/icons-react";
import { RouteUrlObject } from "blitz";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Conditional from "../Conditional";
import UserAvatar from "../UserAvatar";

const UserHeaderMenu = () => {
  const currentUser = useCurrentUser();
  const session = useSession();
  const [$logoutMutation] = useMutation(logout);
  const router = useRouter();

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <div style={{ cursor: "pointer" }}>
          <Conditional
            condition={currentUser?.role === "ADMIN"}
            wrap={(children) => (
              <Indicator
                color="none"
                position="bottom-end"
                label={
                  <Tooltip label="Admin" color="dark">
                    <Box>
                      <IconUserShield size={13} />
                    </Box>
                  </Tooltip>
                }
              >
                {children}
              </Indicator>
            )}
          >
            <UserAvatar user={currentUser} />
          </Conditional>
        </div>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <MenuItemLink text="Home" href={Routes.Home()} Icon={IconHome} />
        <MenuItemLink text="Blog" href={Routes.BlogPage()} Icon={IconBook} />

        {session.role === "ADMIN" && <MenuItemLink text="Users" href={Routes.UsersPage()} Icon={IconUserCircle} />}
        {session.role === "ADMIN" && <MenuItemLink text="Coaches" href={Routes.CoachesPage()} Icon={IconTrain} />}

        <MenuItemLink text="Edit profile" href={Routes.EditProfilePage()} Icon={IconPencil} />

        <MenuItemLink text="Settings" href={Routes.SettingsPage()} Icon={IconSettings} />

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>

        <Menu.Item
          color="red"
          onClick={async () => {
            await $logoutMutation();
            await router.push("/");
          }}
          leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

type MenuItemLinkProps = {
  text: string;
  Icon: React.ComponentType<{ style?: React.CSSProperties }>;
  href: RouteUrlObject;
};

const MenuItemLink: React.FC<MenuItemLinkProps> = ({ text, Icon, href }) => {
  return (
    <Link href={href}>
      <Menu.Item leftSection={<Icon style={{ width: rem(14), height: rem(14) }} />}>{text}</Menu.Item>
    </Link>
  );
};
export default UserHeaderMenu;
