import FullPageLoader from "@/core/components/FulllPageLoader";
import { ErrorBoundary, AppProps } from "@blitzjs/next";
import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";
import React, { Suspense } from "react";
import { withBlitz } from "src/blitz-client";
import { RootErrorFallback } from "src/core/components/RootErrorFallback";
import "@mantine/notifications/styles.css";
import "src/styles/globals.css";

const theme = createTheme({
  /** Put your mantine theme override here */
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Notifications position="top-right" zIndex={1000} />
      <ErrorBoundary FallbackComponent={RootErrorFallback}>
        <Suspense fallback={<FullPageLoader />}>
          <Component {...pageProps} />
        </Suspense>
      </ErrorBoundary>
    </MantineProvider>
  );
}

export default withBlitz(MyApp);
