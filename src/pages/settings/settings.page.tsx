import Layout from "@/core/layouts/Layout";
import { BlitzPage } from "@blitzjs/next";
import { Tabs, rem } from "@mantine/core";
import { IconSettings, IconUserCog, IconMail } from "@tabler/icons-react";
import { ChangePassword } from "./components/ChangePassword";
import UserEmailSettings from "./components/UserEmailSettings";

const SettingsPage: BlitzPage = () => {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Layout title="Settings">
      <Tabs defaultValue="gallery" orientation="vertical">
        <Tabs.List>
          <Tabs.Tab
            value="gallery"
            leftSection={<IconUserCog style={iconStyle} />}
          >
            Account
          </Tabs.Tab>
          <Tabs.Tab
            value="messages"
            leftSection={<IconMail style={iconStyle} />}
          >
            Email
          </Tabs.Tab>
          <Tabs.Tab
            value="settings"
            leftSection={<IconSettings style={iconStyle} />}
          >
            Settings
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel pl={"xs"} value="gallery">
          <ChangePassword />
        </Tabs.Panel>

        <Tabs.Panel pl={"xs"} value="messages">
          <UserEmailSettings />
        </Tabs.Panel>

        <Tabs.Panel pl={"xs"} value="settings">
          manage Settings
        </Tabs.Panel>
      </Tabs>
    </Layout>
  );
};

export default SettingsPage;
