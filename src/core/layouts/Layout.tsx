import Head from "next/head"
import React, { FC, Suspense } from "react"
import { BlitzLayout } from "@blitzjs/next"

type Props = { title?: string; children?: React.ReactNode; maxWidth?: number }

const Layout: BlitzLayout<Props> = ({ title, maxWidth = 800, children }) => {
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
        <Suspense fallback="loading...">{children}</Suspense>
      </div>
    </>
  )
}

export default Layout
