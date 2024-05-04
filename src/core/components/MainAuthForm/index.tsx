import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm, zodResolver } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  rem,
} from "@mantine/core";
import { GoogleButton } from "./Icons/GoogleButton";
import { TwitterButton } from "./Icons/TwitterButton";
import login from "@/features/auth/mutations/login";
import { useMutation } from "@blitzjs/rpc";
import signup from "@/features/auth/mutations/signup";
import { Vertical } from "../MantineLayout";
import { InputSginUp } from "@/features/auth/schemas";
import { z } from "zod";

type SignupFormType = z.infer<typeof InputSginUp>;

export const bindCheckboxToForm = (form: any, key: string) => {
  const inputProps = form.getInputProps(key);
  return {
    checked: form.values[key],
    ...inputProps,
  };
};

export function AuthenticationForm(props: PaperProps) {
  const [type, toggle] = useToggle(["login", "register"]);
  const [$login, { isLoading: isLogginIn }] = useMutation(login);
  const [$signup, { isLoading: isSigningUp }] = useMutation(signup);

  const form = useForm<SignupFormType>({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },

    validate: zodResolver(InputSginUp),
    validateInputOnBlur: true,
    validateInputOnChange: ["email", "password", "terms"],
  });

  const onSubmit = async (values) => {
    if (type === "login") {
      await $login(values);
    } else {
      await $signup(values);
    }
  };

  const isLoading = isLogginIn || isSigningUp;
  return (
    <Vertical fullW fullH align="center" justify="center">
      <Paper
        radius="md"
        p="xl"
        withBorder
        {...props}
        w={{
          base: rem(400),
        }}
      >
        <Text size="lg" fw={500}>
          Welcome to Hajem, {type} with
        </Text>

        <Group grow mb="md" mt="md">
          <GoogleButton radius="xl">Google</GoogleButton>
          <TwitterButton radius="xl">Twitter</TwitterButton>
        </Group>

        <Divider
          label="Or continue with email"
          labelPosition="center"
          my="lg"
        />

        <form onSubmit={form.onSubmit(onSubmit)}>
          <Stack>
            {type === "register" && (
              <TextInput
                required
                label="Name"
                placeholder="Your name"
                {...form.getInputProps("name")}
                radius="md"
              />
            )}

            <TextInput
              required
              label="Email"
              placeholder="hello@mantine.dev"
              {...form.getInputProps("email")}
              radius="md"
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              {...form.getInputProps("password")}
              radius="md"
            />

            {type === "register" && (
              <Checkbox
                label="I accept terms and conditions"
                {...bindCheckboxToForm(form, "terms")}
              />
            )}
          </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor
              component="button"
              type="button"
              c="dimmed"
              onClick={() => toggle()}
              size="xs"
            >
              {type === "register"
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </Anchor>
            <Button
              disabled={!form.isValid()}
              loading={isLoading}
              type="submit"
              radius="xl"
            >
              {upperFirst(type)}
            </Button>
          </Group>
        </form>
      </Paper>
    </Vertical>
  );
}
