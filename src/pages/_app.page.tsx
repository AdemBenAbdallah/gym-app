import FullPageLoader from "@/core/components/FulllPageLoader";
import { ErrorBoundary, AppProps } from "@blitzjs/next";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";
import React, { Suspense } from "react";
import { withBlitz } from "src/blitz-client";
import { RootErrorFallback } from "src/core/components/RootErrorFallback";
import "@mantine/notifications/styles.css";
import "src/styles/globals.css";
import { ModalsProvider } from "@mantine/modals";
import { globalModals } from "@/modals";
import { theme } from "@/styles/mantine-theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Notifications position="top-right" zIndex={1000} />
      <ModalsProvider modals={globalModals}>
        <ErrorBoundary FallbackComponent={RootErrorFallback}>
          <Suspense fallback={<FullPageLoader />}>
            <Component {...pageProps} />
          </Suspense>
        </ErrorBoundary>
      </ModalsProvider>
    </MantineProvider>
  );
}

export default withBlitz(MyApp);
