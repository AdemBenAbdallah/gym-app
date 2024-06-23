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
  Anchor,
  Stack,
  rem,
} from "@mantine/core";
import login from "@/features/auth/mutations/login";
import { useMutation } from "@blitzjs/rpc";
import { Vertical } from "../MantineLayout";
import { InputLogin, LoginFormType } from "@/features/auth/schemas";
import SocialButtonAuth from "./SocialButtonAuth";

export function LoginForm(props: { toggle: () => void }) {
  const [$login, { isLoading }] = useMutation(login);

  const form = useForm<LoginFormType>({
    initialValues: { email: "", password: "" },
    validate: zodResolver(InputLogin),
    validateInputOnBlur: true,
    validateInputOnChange: ["email", "password"],
  });

  return (
    <Vertical fullW fullH align="center" justify="center">
      <Paper
        radius="md"
        p="xl"
        withBorder
        w={{
          base: rem(400),
        }}
      >
        <Text size="lg" fw={500}>
          Welcome to Hajem, Login with
        </Text>

        <SocialButtonAuth />

        <Divider
          label="Or continue with email"
          labelPosition="center"
          my="lg"
        />

        <form
          onSubmit={form.onSubmit(async (values) => {
            await $login(values);
          })}
        >
          <Stack>
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
          </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor
              component="button"
              type="button"
              c="dimmed"
              size="xs"
              onClick={props.toggle}
            >
              Don$t have an account? Register{" "}
            </Anchor>
            <Button
              disabled={!form.isValid()}
              loading={isLoading}
              type="submit"
              radius="xl"
            >
              Login
            </Button>
          </Group>
        </form>
      </Paper>
    </Vertical>
  );
}
