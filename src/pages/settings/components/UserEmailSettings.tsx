import { Vertical } from "@/core/components/MantineLayout";
import ToggleUserSettings from "@/core/components/ToogleUserSettings";
import setUserSettings from "@/features/users/mutations/setUserSettings";
import getUserEmailSettings from "@/features/users/queries/getUserEmailSettings";
import { useMutation, useQuery } from "@blitzjs/rpc";
import { Checkbox } from "@mantine/core";
import React from "react";

const UserEmailSettings = () => {
  const [settings] = useQuery(getUserEmailSettings, {});

  return (
    <Vertical>
      <ToggleUserSettings
        settingKey="settingsEmailMarketing"
        value={settings?.settingsEmailMarketing || false}
        label="Marketing emails"
      />
      <ToggleUserSettings
        settingKey="settingsEmailProduct"
        value={settings?.settingsEmailProduct || false}
        label="MarketiProductng emails"
      />
    </Vertical>
  );
};

export default UserEmailSettings;
