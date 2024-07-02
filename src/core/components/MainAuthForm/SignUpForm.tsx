import signup from "@/features/auth/mutations/signup";
import { InputSginUp, SignupFormType } from "@/features/auth/schemas";
import { useMutation } from "@blitzjs/rpc";
import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  rem,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { Vertical } from "../MantineLayout";
import SocialButtonAuth from "./SocialButtonAuth";

export const bindCheckboxToForm = (form: any, key: string) => {
  const inputProps = form.getInputProps(key);
  return {
    checked: form.values[key],
    ...inputProps,
  };
};

export function SignUpForm(props: { toggle: () => void }) {
  const [$signup, { isLoading }] = useMutation(signup);

  const form = useForm<SignupFormType>({
    initialValues: { name: "", email: "", password: "", terms: false },
    validate: zodResolver(InputSginUp),
    validateInputOnBlur: true,
    validateInputOnChange: ["email", "password", "terms"],
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
          Welcome to Hajem, Sign up with
        </Text>

        <SocialButtonAuth />

        <Divider label="Or continue with email" labelPosition="center" my="lg" />

        <form onSubmit={form.onSubmit(async (values) => await $signup(values))}>
          <Stack>
            <TextInput required label="Name" placeholder="Your name" {...form.getInputProps("name")} radius="md" />

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

            <Checkbox label="I accept terms and conditions" {...bindCheckboxToForm(form, "terms")} />
          </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor component="button" type="button" c="dimmed" size="xs" onClick={props.toggle}>
              Already have an account? Login
            </Anchor>
            <Button disabled={!form.isValid()} loading={isLoading} type="submit" radius="xl">
              Sign Up{" "}
            </Button>
          </Group>
        </form>
      </Paper>
    </Vertical>
  );
}
