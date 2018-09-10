import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import iSchool from "../../images/png/ischool.png";
// import CodeFellows from "../../images/png/codefellows.png";
import CodeFellows from "../../images/jpg/codefellows.jpg";

const styles = theme => ({
  education: {
    display: "block",
    // fontSize: '1.7em'
  },
  organization: {
    margin: '20px 0',
    "& img": {
      width: '100%',
      display: "inline-block",
      overflow: "hidden"
    },
    "& small": {
      display: "block",
      // fontSize: ".6em",
      marginTop: ".3em",
      // color: `${theme.base.colors.link}`
    }
  }
});

const InfoEducation = props => {
  const { classes } = props
  return (
    <div className={classes.education}>
      <div className={classes.organization}>
        <img src={iSchool} alt="" />
        <small>B.S. in Informatics</small>
        <small>Graduating June 2019</small>
      </div>
      <div className={classes.organization}>
        <img src={CodeFellows} alt="" />
        <small>Advanced Web Development</small>
        <small>Completed Spring 2017</small>
      </div>
    </div>
  )
};

InfoEducation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(InfoEducation);
