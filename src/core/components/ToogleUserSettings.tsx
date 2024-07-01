import setUserSettings from "@/features/users/mutations/setUserSettings";
import { useMutation } from "@blitzjs/rpc";
import { Checkbox } from "@mantine/core";
import React from "react";

const ToggleUserSettings = ({
  settingKey,
  value,
  label,
}: {
  settingKey: string;
  value: boolean;
  label: string;
}) => {
  const [$setUserSettings] = useMutation(setUserSettings);

  return (
    <Checkbox
      onClick={async () =>
        await $setUserSettings({
          key: settingKey,
          value,
        })
      }
      defaultChecked={value}
    />
  );
};

export default ToggleUserSettings;
