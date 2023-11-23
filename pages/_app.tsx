import { theme } from "@/components";
import "@/styles/globals.css";
import { MantineProvider, createEmotionCache } from "@mantine/core";
import type { AppProps } from "next/app";

const emotionCache = createEmotionCache({ key: "xds", prepend: true });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={theme}
      emotionCache={emotionCache}
      withGlobalStyles
      withNormalizeCSS
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}
