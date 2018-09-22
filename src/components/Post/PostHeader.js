import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import Button from '@material-ui/core/Button';

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
  image: {
    margin: '1em 0',
    maxWidth: '100%'
  },
  meta: {
    fontSize: `${theme.main.fonts.meta.size}em`,
    fontWeight: theme.main.fonts.meta.weight,
    color: theme.main.colors.meta
  }
  // button: {
  //   width: '100%',
  //   marginBottom: '2em',
  //   padding: '.5em'
  // }
});

const PostHeader = props => {
  const { classes, title, subtitle, date, cover, demo, source } = props;

  function myDate(dateString) {
    const dateObj = new Date(dateString).toUTCString();
    const dateToShow = dateObj
      .split(" ")
      .slice(0, 4)
      .join(" ");

    return dateToShow;
  }
  const src = cover && cover.childImageSharp ? cover.childImageSharp.resize.src : undefined
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>{title}</h1>
      <h2 className={classes.subtitle}>{subtitle}</h2>
      <div className={classes.meta}>{myDate(date)}</div>
      <img className={classes.image} src={src} />
      {source && (
        <a style={{ textDecoration: 'none' }} href={source} target='_blank'>
          <Button style={{ width: '100%', marginBottom: '1em' }} size='large' color='primary' variant='outlined'>
            Source on GitHub
          </Button>
        </a>
      )}
      {demo && (
        <a style={{ textDecoration: 'none' }} href={demo} target='_blank'>
          <Button style={{ width: '100%', marginBottom: '1em' }} size='large' color='primary' variant='outlined'>
            View Demo
          </Button>
        </a>
      )}
    </header>
  );
};

PostHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  cover: PropTypes.object,
  date: PropTypes.string.isRequired,
  demo: PropTypes.string,
  source: PropTypes.string
};

export default injectSheet(styles)(PostHeader);
