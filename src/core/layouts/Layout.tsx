import Head from "next/head";
import React, { Suspense } from "react";
import { BlitzLayout, Routes } from "@blitzjs/next";
import { Anchor, AppShell, Stack, Text } from "@mantine/core";
import { Horizontal, Vertical } from "../components/MantineLayout";
import Link from "next/link";

type Props = { title?: string; children?: React.ReactNode };

const Layout: BlitzLayout<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "barber"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppShell header={{ height: 60 }} padding="md" h={"100%"}>
        <AppShell.Header>
          <Horizontal fullH align="center" p={"md"}>
            <Anchor component={Link} underline="never" href={Routes.Home()}>
              <Text fz={"h3"} fw={500}>
                Hajem
              </Text>
            </Anchor>
          </Horizontal>
        </AppShell.Header>

        <AppShell.Main h={"100%"}>
          <Vertical fullH fullW>
            <Suspense fallback="loading...">{children}</Suspense>
          </Vertical>
        </AppShell.Main>
      </AppShell>
    </>
  );
};

export default Layout;
