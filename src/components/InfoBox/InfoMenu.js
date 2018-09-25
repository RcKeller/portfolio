import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Link from "gatsby-link";

import Button from '@material-ui/core/Button';

const styles = theme => ({
  infoMenu: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    listStyle: "none",
    margin: 0,
    width: "100%"
  },
  button: {
    width: '100%',
    // padding: '1em'
    // marginBottom: '2em',
    padding: '.5em',
    marginBottom: '1em'
    // padding: '.5em',
    // margin: '.5em'
  }
});

const InfoMenu = props => {
  const { classes, pages, categories, linkOnClick, categoryOnClick } = props;
  return (
    <nav className={classes.infoMenu}>
      {pages.map((page, i) => {
        const { fields, frontmatter } = page.node;
        return (
          <Link
            key={fields.slug}
            to={fields.slug}
            onClick={linkOnClick}
            data-shape="closed"
          >
            <Button className={classes.button} size='large' color='primary' variant='outlined'>
              {frontmatter.menuTitle ? frontmatter.menuTitle : frontmatter.title}
            </Button>
          </Link>
        );
      })}
      {categories.map(category => (
        <Link key={category} to='/' onClick={() => categoryOnClick(category)} data-shape="closed">
          <Button className={classes.button} size='large' color='primary' variant='outlined'>
            {category}
          </Button>
        </Link>
      ))}
      {/* <Link to="/" onClick={() => categoryOnClick('Portfolio')} className={classes.link} data-shape="closed">
        Portfolio
      </Link> */}
      {/* <Link to="/" onClick={() => categoryOnClick('Experience')} className={classes.link} data-shape="closed">
        Experience
      </Link> */}
      {/* <Link to="/" onClick={() => categoryOnClick('Tutorials')} className={classes.link} data-shape="closed">
        Tutorials
      </Link> */}
      {/* <Link to="/contact/" onClick={linkOnClick} className={classes.link} data-shape="closed">
        Contact
      </Link> */}
    </nav>
  );
};

InfoMenu.propTypes = {
  pages: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  linkOnClick: PropTypes.func.isRequired,
  categoryOnClick: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired
};

export default injectSheet(styles)(InfoMenu);
