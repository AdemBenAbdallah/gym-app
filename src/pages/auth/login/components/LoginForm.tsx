import { AuthenticationError, PromiseReturnType } from "blitz";
import Link from "next/link";
import { LabeledTextField } from "src/core/components/LabeledTextField";
import login from "@/features/auth/mutations/login";
import { FORM_ERROR } from "@/core/components/Form";
import { useMutation } from "@blitzjs/rpc";
import { Routes } from "@blitzjs/next";
import { useForm } from "@mantine/form";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { Vertical } from "@/core/components/MantineLayout";

type LoginFormProps = {
  onSuccess?: (user: PromiseReturnType<typeof login>) => void;
};

export const LoginForm = (props: LoginFormProps) => {
  const [loginMutation] = useMutation(login);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const onSubmit = async (values) => {
    try {
      const user = await loginMutation(values);
      props.onSuccess?.(user);
    } catch (error: any) {
      if (error instanceof AuthenticationError) {
        return { [FORM_ERROR]: "Sorry, those credentials are invalid" };
      } else {
        return {
          [FORM_ERROR]:
            "Sorry, we had an unexpected error. Please try again. - " +
            error.toString(),
        };
      }
    }
  };

  return (
    <Vertical>
      <h1>Login</h1>

      <form onSubmit={form.onSubmit(onSubmit)}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          key={form.key("email")}
          {...form.getInputProps("email")}
        />

        <PasswordInput
          withAsterisk
          label="Password"
          key={form.key("password")}
          {...form.getInputProps("password")}
        />

        <Button type="submit">Submit</Button>
      </form>

      <Link href={Routes.ForgotPasswordPage()}>Forgot your password?</Link>

      <div style={{ marginTop: "1rem" }}>
        Or <Link href={Routes.SignupPage()}>Sign Up</Link>
      </div>
    </Vertical>
  );
};

export default LoginForm;
