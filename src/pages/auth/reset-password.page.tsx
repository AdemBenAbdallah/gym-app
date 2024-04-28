import Layout from "src/core/layouts/Layout"
import { LabeledTextField } from "src/core/components/LabeledTextField"
import { Form, FORM_ERROR } from "src/core/components/Form"

import { BlitzPage, Routes } from "@blitzjs/next"
import { useRouter } from "next/router"
import { useMutation } from "@blitzjs/rpc"
import Link from "next/link"
import { assert } from "blitz"
import { ResetPassword } from "src/features/auth/schemas"
import resetPassword from "src/features/auth/mutations/resetPassword"
import { Button, PasswordInput } from "@mantine/core"
import { useForm } from "@mantine/form"

const ResetPasswordPage: BlitzPage = () => {
  const router = useRouter()
  const token = router.query.token?.toString()
  const [resetPasswordMutation, { isSuccess }] = useMutation(resetPassword)

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      password: "",
      ConfirmPassword: "",
    },
  })

  const onSubmit = async (values) => {
    try {
      assert(token, "Token is required.")
      await resetPasswordMutation({ ...values, token })
      return null
    } catch (error: any) {
      if (error.name === "ResetPasswordError") {
        return {
          [FORM_ERROR]: error.message,
        }
      } else {
        return {
          [FORM_ERROR]: "Sorry, we encountered an unexpected error. Please try again.",
        }
      }
    }
  }

  return (
    <Layout title="Reset Your Password">
      <h1>Set a New Password</h1>

      {isSuccess ? (
        <div>
          <h2>Password Reset Successfully</h2>
          <p>
            Go to the <Link href={Routes.Home()}>homepage</Link>
          </p>
        </div>
      ) : (
        <form onSubmit={form.onSubmit(onSubmit)}>
          <PasswordInput
            withAsterisk
            label="Password"
            key={form.key("password")}
            {...form.getInputProps("password")}
          />

          <PasswordInput
            withAsterisk
            label="Confirm Password"
            key={form.key("ConfirmPassword")}
            {...form.getInputProps("ConfirmPassword")}
          />

          <Button type="submit">Submit</Button>
        </form>
      )}
    </Layout>
  )
}

ResetPasswordPage.redirectAuthenticatedTo = "/"

export default ResetPasswordPage
