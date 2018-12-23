import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import config from "../../../content/meta/config";

import GithubIcon from "!svg-react-loader!../../images/svg-icons/github.svg?name=GithubIcon";
import FacebookIcon from "!svg-react-loader!../../images/svg-icons/facebook.svg?name=FacebookIcon";
import TwitterIcon from "!svg-react-loader!../../images/svg-icons/twitter.svg?name=TwitterIcon";
import LinkedInIcon from "!svg-react-loader!../../images/svg-icons/linkedin.svg?name=LinkedInIcon";
import ResumeIcon from "!svg-react-loader!../../images/svg-icons/resume.svg?name=ResumeIcon";

const styles = theme => ({
  social: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    margin: '2em auto',
    [`@media (max-height: ${1366}px)`]: {
      margin: '1em auto'
    }
  },
  link: {
    display: "inline-block",
    padding: "5px",
    "&:hover": {
      "& svg": {
        fill: theme.base.colors.linkHover
      }
    }
  },
  svg: {
    width: "30px",
    height: "30px",
    fill: theme.base.colors.link,
    transition: "all .5s"
  }
});

const Socialcons = props => {
  const { classes } = props;
  const items = config.authorSocialLinks;
  const icons = {
    Twitter: TwitterIcon,
    Facebook: FacebookIcon,
    GitHub: GithubIcon,
    LinkedIn: LinkedInIcon,
    Resume: ResumeIcon
  };

  return (
    <div className={classes.social}>
      {items.map(item => {
        const Icon = icons[item.name];
        return (
          <a
            href={item.url}
            key={item.name}
            className={classes.link}
            target="_blank"
            rel="noopener noreferrer"
            title={item.name}
          >
            <Icon className={classes.svg} />
          </a>
        );
      })}
    </div>
  );
};

Socialcons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Socialcons);
