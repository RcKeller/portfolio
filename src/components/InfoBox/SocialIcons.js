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
    margin: '2em auto'
  },
  link: {
    display: "inline-block",
    padding: "5px",
    "&:hover": {
      "& svg": {
        // fill: theme.info.colors.socialIconsHover
        fill: theme.base.colors.iconHover
      }
    }
  },
  svg: {
    width: "30px",
    height: "30px",
    // fill: theme.info.colors.socialIcons,
    fill: theme.base.colors.icon,
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
