import { theme } from "@/components";
import "@/styles/globals.css";
import { MantineProvider, createEmotionCache } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
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
      <ThemeProvider attribute="class" enableSystem={false} enableColorScheme>
        <MantineProvider
          theme={theme}
          emotionCache={emotionCache}
          withGlobalStyles
          withNormalizeCSS
        >
          <Component {...pageProps} />
        </MantineProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
