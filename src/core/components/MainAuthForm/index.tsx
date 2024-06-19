import { useToggle } from "@mantine/hooks";
import { LoginForm } from "./LoginForm";
import { SignUpForm } from "./SignUpForm";

export function AuthenticationForm() {
  const [type, toggle] = useToggle(["login", "register"]);

  return (
    <>
      {type === "login" && <LoginForm toggle={toggle} />}
      {type === "register" && <SignUpForm toggle={toggle} />}
    </>
  );
}
