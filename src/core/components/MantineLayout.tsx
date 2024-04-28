import { Group, GroupProps, Stack, StackProps } from "@mantine/core"
import React from "react"

type VerticalProps = StackProps & {
  debug?: boolean
  fullH?: boolean
  fullW?: boolean
  children: React.ReactNode
}
export const Vertical = ({ debug, fullH, fullW, children, ...props }: VerticalProps) => {
  return (
    <Stack
      {...props}
      w={fullW ? "100%" : "auto"}
      h={fullH ? "100%" : "auto"}
      style={{ border: debug ? "2px solid red" : "" }}
    >
      {children}
    </Stack>
  )
}

type HorizontalProps = GroupProps & {
  debug?: boolean
  fullH?: boolean
  fullW?: boolean
  children: React.ReactNode
}
export const Horizontal = ({ debug, fullH, fullW, children, ...props }: HorizontalProps) => {
  return (
    <Group
      {...props}
      w={fullW ? "100%" : "auto"}
      h={fullH ? "100%" : "auto"}
      style={{ border: debug ? "2px solid yellow" : "" }}
    >
      {children}
    </Group>
  )
}
