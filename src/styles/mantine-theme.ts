import { Loader, createTheme } from "@mantine/core";
import { CssLoader } from "./cssLoader/CssLoader";

export const theme = createTheme({
  components: {
    Loader: Loader.extend({
      defaultProps: {
        loaders: { ...Loader.defaultLoaders, custom: CssLoader },
        type: "custom",
      },
    }),
  },
  cursorType: "pointer",
  /** Put your mantine theme override here */
});
