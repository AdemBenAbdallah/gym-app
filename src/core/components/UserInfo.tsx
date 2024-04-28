import logout from "@/features/auth/mutations/logout"
import { useCurrentUser } from "@/features/users/hooks/useCurrentUser"
import { Routes } from "@blitzjs/next"
import { useMutation } from "@blitzjs/rpc"
import { Button } from "@mantine/core"
import Link from "next/link"

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <>
        <button
          onClick={async () => {
            await logoutMutation()
          }}
        >
          Logout
        </button>
        <div>
          User id: <code>{currentUser.id}</code>
          <br />
          User role: <code>{currentUser.role}</code>
        </div>
      </>
    )
  } else {
    return (
      <>
        <Button component={Link} href={Routes.SignupPage()}>
          <strong>Sign Up</strong>
        </Button>
        <Button component={Link} href={Routes.LoginPage()}>
          <strong>Login</strong>
        </Button>
      </>
    )
  }
}

export default UserInfo
