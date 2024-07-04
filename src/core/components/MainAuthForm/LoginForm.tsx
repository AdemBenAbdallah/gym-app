import login from "@/features/auth/mutations/login";
import { InputLogin, LoginFormType } from "@/features/auth/schemas";
import { Routes } from "@blitzjs/next";
import { useMutation } from "@blitzjs/rpc";
import { Anchor, Button, Divider, Group, Paper, PasswordInput, Stack, Text, TextInput, rem } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import Link from "next/link";
import { Vertical } from "../MantineLayout";

export function LoginForm(props: { toggle: () => void }) {
  const [$login, { isLoading }] = useMutation(login);

  const form = useForm<LoginFormType>({
    initialValues: { email: "", password: "" },
    validate: zodResolver(InputLogin),
    validateInputOnBlur: true,
    validateInputOnChange: ["email", "password"],
  });

  return (
    <Vertical align="center" justify="center">
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

        {/* <SocialButtonAuth /> */}

        <Divider label="Or continue with email" labelPosition="center" my="lg" />

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

            <Vertical gap={"xs"}>
              <PasswordInput
                required
                label="Password"
                placeholder="Your password"
                {...form.getInputProps("password")}
                radius="md"
              />
              <Text
                fz={"xs"}
                c={"dimed"}
                style={{ alignSelf: "flex-end" }}
                component={Link}
                href={Routes.ForgotPasswordPage()}
              >
                Forgot password?
              </Text>
            </Vertical>
          </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor component="button" type="button" c="dimmed" size="xs" onClick={props.toggle}>
              Don't have an account? Register{" "}
            </Anchor>
            <Button disabled={!form.isValid()} loading={isLoading} type="submit" radius="xl">
              Login
            </Button>
          </Group>
        </form>
      </Paper>
    </Vertical>
  );
}
