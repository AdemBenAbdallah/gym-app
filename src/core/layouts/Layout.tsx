import Head from "next/head"
import React, { FC, Suspense } from "react"
import { BlitzLayout } from "@blitzjs/next"
import { AppShell, Burger, Group, Stack } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"

type Props = { title?: string; children?: React.ReactNode; maxWidth?: number }

const Layout: BlitzLayout<Props> = ({ title, maxWidth = 800, children }) => {
  const [opened, { toggle }] = useDisclosure()

  return (
    <>
      <Head>
        <title>{title || "barber"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          width: "100%",
          maxWidth,
        }}
      >
        <AppShell
          header={{ height: 60 }}
          navbar={{
            width: 300,
            breakpoint: "sm",
            collapsed: { mobile: !opened },
          }}
          padding="md"
        >
          <AppShell.Header>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <div>Logo</div>
          </AppShell.Header>

          <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

          <AppShell.Main>
            <Stack>
              <Suspense fallback="loading...">{children}</Suspense>
            </Stack>
          </AppShell.Main>
        </AppShell>
      </div>
    </>
  )
}

export default Layout
