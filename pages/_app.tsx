import { theme } from "@/components";
import "@/styles/globals.css";
import { MantineProvider, createEmotionCache } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";

const emotionCache = createEmotionCache({ key: "xds", prepend: true });

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        theme={theme}
        emotionCache={emotionCache}
        withGlobalStyles
        withNormalizeCSS
      >
        <Component {...pageProps} />
      </MantineProvider>
    </QueryClientProvider>
  );
}
