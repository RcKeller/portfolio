import { createMuiTheme } from "@material-ui/core/styles";
import Color from "color";
import colors from "./colors";

const theme = createMuiTheme({
  base: {
    colors: {
      background: colors.background,
      text: colors.superLightGray,
      link: colors.secondary,
      linkHover: Color(colors.secondary)
        .lighten(0.1)
        .string(),
      accent: colors.accent,
      lines: colors.lightGray
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
      text: colors.lightGray,
      background: colors.background,
      socialIcons: colors.accent,
      socialIconsHover: colors.lightGray,
      menuLink: colors.secondary,
      menuLinkHover: Color(colors.secondary)
        .lighten(0.1)
        .string()
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
      postsListItemLink: colors.lightGray,
      postsListItemLinkHover: colors.accent,
      postsHeader: colors.superLightGray
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
      title: colors.lightGray,
      subtitle: colors.lightGray,
      meta: colors.lightGray,
      content: colors.superLightGray,
      footer: colors.lightGray,
      contentHeading: colors.lightGray,
      blockquoteFrame: colors.gray,
      link: colors.accent,
      linkHover: colors.superLightGray,
      fbCommentsColorscheme: "dark"
    },
    sizes: {
      articleMaxWidth: "960px"
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
      link: colors.accent,
      linkHover: Color(colors.accent)
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
      icon: colors.white,
      text: colors.white
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
    type: 'dark',
    background: {
      paper: colors.foreground
    },
    primary: {
      main: colors.accent,
      primary: colors.accent,
      secondary: colors.secondary,
      // background: colors.foreground,
    },
    action: {
      hover: "rgba(0, 0, 0, 0.01)"
    }
  },
  typography: {
    fontFamily: `'Roboto Mono', monospace`,
    fontSize: 16
  }
});

export default theme;
