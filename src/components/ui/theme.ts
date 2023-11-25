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
      h3: {
        fontSize: rem(16),
        fontWeight: 500,
        lineHeight: "150%",
      },
    },
  },
  components: {
    Text: {
      variants: {
        text150_16() {
          return {
            root: {
              fontSize: rem(16),
              fontWeight: 400,
              lineHeight: "150%",
            },
          };
        },
        text_14() {
          return {
            root: {
              fontSize: rem(14),
              fontWeight: 400,
            },
          };
        },
        text157_14() {
          return {
            root: {
              fontSize: rem(14),
              fontWeight: 400,
              lineHeight: "157%",
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
        text166_12() {
          return {
            root: {
              fontSize: rem(12),
              fontWeight: 500,
              lineHeight: "166%",
            },
          };
        },
        text1664_12() {
          return {
            root: {
              fontSize: rem(12),
              fontWeight: 400,
              lineHeight: "166%",
            },
          };
        },
        text133_12() {
          return {
            root: {
              fontSize: rem(12),
              fontWeight: 500,
              lineHeight: "133%",
            },
          };
        },
        text116_12() {
          return {
            root: {
              fontSize: rem(12),
              fontWeight: 500,
              lineHeight: "116%",
            },
          };
        },
        text177_9() {
          return {
            root: {
              fontSize: rem(9),
              fontWeight: 400,
              lineHeight: "177%",
            },
          };
        },
        text160_10() {
          return {
            root: {
              fontSize: rem(10),
              fontWeight: 500,
              lineHeight: "160%",
            },
          };
        },
      },
    },
  },
};
