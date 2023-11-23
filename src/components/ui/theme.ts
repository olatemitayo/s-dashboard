import { MantineThemeOverride, rem } from "@mantine/core";

export const theme: MantineThemeOverride = {
  primaryColor: "grey",
  fontFamily: "Poppins",
  primaryShade: 1,
  colors: {
    grey: ["#1F1F1F", "#121212", "#444", "#A8A8A8"],
  },
  headings: {
    sizes: {
      h1: {
        fontSize: rem(28),
        fontWeight: 600,
        lineHeight: "128%",
      },
      h2: {
        fontSize: rem(16),
        fontWeight: 500,
        lineHeight: "normal",
      },
    },
  },
  components: {
    Text: {
      variants: {
        text_14() {
          return {
            root: {
              fontSize: rem(14),
              fontWeight: 400,
            },
          };
        },
        text150_14() {
          return {
            root: {
              fontSize: rem(14),
              fontWeight: 400,
              lineHeight: "150%",
            },
          };
        },
      },
    },
  },
};
