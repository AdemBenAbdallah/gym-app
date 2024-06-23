import { Menu, Text, rem, Indicator, Tooltip, Box } from "@mantine/core";
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
  IconUserShield,
  IconHome,
  IconUserCircle,
} from "@tabler/icons-react";
import Conditional from "../Conditional";
import { useCurrentUser } from "@/features/users/hooks/useCurrentUser";
import UserAvatar from "../UserAvatar";
import Link from "next/link";
import { Routes } from "@blitzjs/next";
import { RouteUrlObject } from "blitz";

const UserHeaderMenu = () => {
  const currentUser = useCurrentUser();
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
        <MenuItemLink
          text="Home"
          href={Routes.Home()}
          icon={<IconHome style={{ width: rem(14), height: rem(14) }} />}
        />

        <MenuItemLink
          text="Go to profile"
          href={Routes.EditProfilePage()}
          icon={<IconUserCircle style={{ width: rem(14), height: rem(14) }} />}
        />

        <MenuItemLink
          text="Settings"
          href={Routes.AboutPage()}
          icon={<IconSettings style={{ width: rem(14), height: rem(14) }} />}
        />

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item
          leftSection={
            <IconArrowsLeftRight style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Transfer my data
        </Menu.Item>
        <Menu.Item
          color="red"
          leftSection={
            <IconTrash style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

type MenuItemLinkProps = {
  text: string;
  icon: React.ReactElement;
  href: RouteUrlObject;
};

const MenuItemLink: React.FC<MenuItemLinkProps> = ({ text, icon, href }) => {
  return (
    <Link href={href}>
      <Menu.Item leftSection={icon}>{text}</Menu.Item>
    </Link>
  );
};
export default UserHeaderMenu;
