import Head from "next/head"
import React, { FC, Suspense } from "react"
import { BlitzLayout } from "@blitzjs/next"

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title || "barber"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Suspense fallback="loading...">{children}</Suspense>
    </>
  )
}

export default Layout
