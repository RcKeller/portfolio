import { createMuiTheme } from "@material-ui/core/styles";
import Color from "color";
import colors from "./colors";

const theme = createMuiTheme({
  base: {
    colors: {
      background: colors.background,
      text: colors.dark,
      link: colors.secondary,
      linkHover: Color(colors.secondary)
        .lighten(0.1)
        .string(),
      icon: colors.primary,
      iconHover: Color(colors.primary)
        .lighten(0.1)
        .string(),
      main: colors.primary,
      accent: colors.secondary,
      lines: colors.quaternary,
      secondary: colors.secondary,
      tertiary: colors.tertiary,
      quaternary: colors.quaternary,
      quinary: colors.quinary
    },
    sizes: {
      linesMargin: "20px"
    },
    fonts: {
      unstyledFamily: `monospace`,
      styledFamily: "Roboto Mono",
      styledFonts: "300,400,600"
    }
  },
  info: {
    colors: {
      text: colors.black,
      background: colors.background,
      socialIcons: colors.lightGray,
      socialIconsHover: colors.secondary,
      menuLink: colors.gray,
      menuLinkHover: colors.secondary
    },
    sizes: {
      width: 320,
      headerHeight: 170
    },
    fonts: {
      boxTitleSize: 1.3,
      boxTitleSizeM: 1.5,
      boxTitleSizeL: 1.7
    }
  },
  navigator: {
    colors: {
      background: colors.background,
      postsListItemLink: colors.gray,
      postsListItemLinkHover: colors.secondary,
      postsHeader: colors.gray
    },
    sizes: {
      closedHeight: 80,
      postsListItemH1Font: 1.3,
      postsListItemH2Font: 1.1,
      fontIncraseForM: 1.15,
      fontIncraseForL: 1.3
    }
  },
  main: {
    colors: {
      background: colors.background,
      // title: colors.gray,
      // subtitle: colors.gray,
      title: colors.primary,
      subtitle: colors.secondary,
      meta: colors.gray,
      content: colors.dark,
      footer: colors.gray,
      contentHeading: colors.gray,
      blockquoteFrame: colors.lightGray,
      link: colors.secondary,
      linkHover: colors.dark,
      fbCommentsColorscheme: "light"
    },
    sizes: {
      articleMaxWidth: "50em"
    },
    fonts: {
      title: {
        size: 1.9,
        sizeM: 2.5,
        sizeL: 2.7,
        weight: 600,
        lineHeight: 1.1
      },
      subtitle: {
        size: 1.5,
        sizeM: 1.8,
        sizeL: 1.95,
        weight: 300,
        lineHeight: 1.1
      },
      meta: {
        size: 0.9,
        weight: 600
      },
      content: {
        size: 1.0,
        sizeM: 1.15,
        sizeL: 1.1,
        lineHeight: 1.6
      },
      contentHeading: {
        h2Size: 1.5,
        h3Size: 1.3,
        weight: 600,
        lineHeight: 1.3
      },
      footer: {
        size: 1,
        lineHeight: 1.4
      }
    }
  },
  footer: {
    colors: {
      text: Color(colors.gray)
        .lighten(0.5)
        .string(),
      link: colors.secondary,
      linkHover: Color(colors.secondary)
        .lighten(0.2)
        .string()
    },
    fonts: {
      footnote: {
        size: 0.8,
        lineHeight: 1.4
      }
    }
  },
  bars: {
    colors: {
      background: colors.background,
      icon: colors.gray,
      text: colors.gray
    },
    sizes: {
      actionsBar: 60,
      infoBar: 60
    }
  },
  mediaQueryTresholds: {
    M: 600,
    L: 1024
  },
  palette: {
    // primary: { main: colors.primary },
    // secondary: { main: colors.secondary },
    primary: { main: colors.secondary },
    secondary: { main: colors.tertiary },
    textSecondary: { main: colors.quinary },
    action: {
      hover: "rgba(0, 0, 0, 0.01)"
    }
  },
  overrides: {
    // Name of the component ⚛️ / style sheet
    MuiButton: {
      // Name of the rule
      root: {
        
      },
      outlined: {
        borderWidth: 'medium !important'
      }
    }
  },
  typography: {
    fontFamily: `'Roboto Mono', monospace`,
    fontSize: 16,
    textSecondary: { color: colors.quinary }
  }
});

export default theme;
