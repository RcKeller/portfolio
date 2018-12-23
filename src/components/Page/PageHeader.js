import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

const styles = theme => ({
  header: {
    margin: "0 0 3em",
    borderBottom: `1px solid ${theme.base.colors.lines}`
  },
  title: {
    color: theme.main.colors.title,
    fontSize: `${theme.main.fonts.title.size}em`,
    letterSpacing: "-0.04em",
    fontWeight: theme.main.fonts.title.weight,
    lineHeight: theme.main.fonts.title.lineHeight,
    margin: "0 0 0.4em",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      fontSize: `${theme.main.fonts.title.sizeM}em`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      fontSize: `${theme.main.fonts.title.sizeL}em`,
      letterSpacing: "-0.05em"
    }
  },
  subtitle: {
    color: theme.main.colors.subtitle,
    fontSize: `${theme.main.fonts.subtitle.size}em`,
    lineHeight: theme.main.fonts.subtitle.lineHeight,
    fontWeight: theme.main.fonts.subtitle.weight,
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      fontSize: `${theme.main.fonts.subtitle.sizeM}em`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      fontSize: `${theme.main.fonts.subtitle.sizeL}em`
    }
  },
});

const Header = props => {
  const { classes, title, subtitle } = props;

  return (
    <header className={classes.header}>
      <h1 className={classes.title}>{title}</h1>
      <h2 className={classes.subtitle}>{subtitle}</h2>
    </header>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default injectSheet(styles)(Header);
