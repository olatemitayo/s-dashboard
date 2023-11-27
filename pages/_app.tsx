import { theme } from "@/components";
import "@/styles/globals.css";
import { MantineProvider, createEmotionCache } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, useTheme } from "next-themes";
import type { AppProps } from "next/app";
import { IntlProvider, MessageFormatElement } from "react-intl";
import { useRouter } from "next/router";
import ar from "../Lang/ar.json";
import en from "../Lang/en.json";
import fr from "../Lang/fr.json";

const emotionCache = createEmotionCache({ key: "xds", prepend: true });

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const messages = {
  ar,
  en,
  fr,
};

function getDirection(locale: string) {
  if (locale === "ar") {
    return "rtl";
  }

  return "ltr";
}
export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const messagesForLocale = messages[locale as keyof typeof messages];
  const { resolvedTheme } = useTheme();

  return (
    <IntlProvider
      locale={String(locale)}
      messages={
        messagesForLocale as unknown as
          | Record<string, string>
          | Record<string, MessageFormatElement[]>
      }
    >
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          forcedTheme={resolvedTheme || undefined}
          enableColorScheme
        >
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
    </IntlProvider>
  );
}
