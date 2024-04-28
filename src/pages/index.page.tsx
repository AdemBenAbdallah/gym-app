import Layout from "src/core/layouts/Layout"
import { BlitzPage } from "@blitzjs/next"
import UserInfo from "@/core/components/UserInfo"
import React from "react"
import { Horizontal, Vertical } from "@/core/components/MantineLayout"
const Home: BlitzPage = () => {
  return (
    <Layout title="Home">
      <UserInfo />

      <Vertical debug align="center" justify="center">
        <div>Adem</div>
        <div>Ben Abdallah</div>
        <Horizontal debug gap={100}>
          <div>Age</div>
          <div>26</div>
        </Horizontal>
      </Vertical>
    </Layout>
  )
}

export default Home
