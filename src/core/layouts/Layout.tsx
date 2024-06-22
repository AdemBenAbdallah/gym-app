import Head from "next/head";
import React, { Suspense } from "react";
import { ErrorBoundary, Routes } from "@blitzjs/next";
import {
  Anchor,
  AppShell,
  Badge,
  Box,
  Button,
  Indicator,
  Modal,
  RingProgress,
  Text,
  Tooltip,
} from "@mantine/core";
import { Horizontal, Vertical } from "../components/MantineLayout";
import logout from "@/features/auth/mutations/logout";
import { useMutation } from "@blitzjs/rpc";
import { useCurrentUser } from "@/features/users/hooks/useCurrentUser";
import { ReactFC } from "~/types";
import { IconUserPlus, IconUserShield } from "@tabler/icons-react";
import { RootErrorFallback } from "../components/RootErrorFallback";
import { useRouter } from "next/router";
import FullPageLoader from "../components/FulllPageLoader";
import Link from "next/link";
import Conditional from "../components/Conditional";
import UserAvatar from "../components/UserAvatar";
import UserProfileProgress from "../components/Header/UserProfileProgress";
import OnboardingWizard from "../components/OnboardingWzard";
import { openContextModal } from "@mantine/modals";
import { GlobalModal } from "@/modals";

type Props = { title?: string };

export const dynamic = "force-dynamic";

const Layout: ReactFC<Props> = ({ title, children }) => {
  const [logoutMutation] = useMutation(logout);
  const currentUser = useCurrentUser();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title || "barber"}</title>
        <link rel="icon" href="/barber.svg" />
      </Head>

      <AppShell header={{ height: 60 }} padding="md" h={"100%"}>
        <AppShell.Header>
          <Horizontal fullH align="center" justify="space-between" p={"md"}>
            <Anchor component={Link} underline="never" href={Routes.Home()}>
              <Text fz={"h3"} fw={500}>
                Hajem
              </Text>
            </Anchor>
            <Horizontal>
              {currentUser && (
                <Horizontal gap={5} align="center">
                  <Conditional
                    condition={!!currentUser.username}
                    wrap={(children) => {
                      return (
                        <Link
                          href={Routes.ProfilePage({
                            username: currentUser.username as string,
                          })}
                        >
                          {children}
                        </Link>
                      );
                    }}
                  >
                    <Horizontal>
                      <Conditional
                        condition={currentUser?.role === "ADMIN"}
                        wrap={(children) => (
                          <Indicator
                            color="none"
                            position="bottom-end"
                            label={
                              <Tooltip label="Admin" color="dark">
                                <Box>
                                  <IconUserShield size={13} />
                                </Box>
                              </Tooltip>
                            }
                          >
                            {children}
                          </Indicator>
                        )}
                      >
                        <UserAvatar user={currentUser} />
                        <Text>{currentUser.name}</Text>
                      </Conditional>
                    </Horizontal>
                  </Conditional>
                  <Badge
                    onClick={() =>
                      openContextModal({
                        modal: GlobalModal.becomeBro,
                        title: "Become a pro member",
                        innerProps: {
                          price: 28,
                        },
                      })
                    }
                    color="red"
                  >
                    Pro
                  </Badge>
                  <UserProfileProgress />
                  {currentUser.role === "ADMIN" && (
                    <Tooltip label="ADMIN">
                      <IconUserPlus />
                    </Tooltip>
                  )}
                </Horizontal>
              )}
              {currentUser && (
                <Button
                  size="xs"
                  variant="light"
                  onClick={async () => {
                    await logoutMutation();
                    await router.push("/");
                  }}
                >
                  Logout
                </Button>
              )}
            </Horizontal>
          </Horizontal>
        </AppShell.Header>

        <AppShell.Main h={"100%"}>
          <Vertical fullH fullW>
            <ErrorBoundary
              resetKeys={[currentUser]}
              FallbackComponent={RootErrorFallback}
            >
              <Suspense fallback={<FullPageLoader />}>
                {currentUser && (
                  <Modal
                    closeOnClickOutside={false}
                    withCloseButton={false}
                    size={"xl"}
                    centered
                    opened={!currentUser?.onboarded}
                    onClose={() => {}}
                  >
                    <OnboardingWizard />
                  </Modal>
                )}
                {children}
              </Suspense>
            </ErrorBoundary>
          </Vertical>
        </AppShell.Main>
      </AppShell>
    </>
  );
};

export default Layout;
