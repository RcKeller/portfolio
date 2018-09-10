import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Link from "gatsby-link";

const styles = theme => ({
  infoMenu: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    listStyle: "none",
    margin: 0,
    width: "100%"
  },
  link: {
    padding: ".5em",
    fontWeight: 300,
    textTransform: "lowercase",
    color: theme.info.colors.menuLink,
    "&:hover": {
      color: theme.info.colors.menuLinkHover
    }
  }
});

const InfoMenu = props => {
  const { classes, pages, categories, linkOnClick, categoryOnClick } = props;
  console.log(categories)
  return (
    <nav className={classes.infoMenu}>
      {pages.map((page, i) => {
        const { fields, frontmatter } = page.node;
        return (
          <Link
            key={fields.slug}
            to={fields.slug}
            onClick={linkOnClick}
            className={classes.link}
            data-shape="closed"
          >
            {frontmatter.menuTitle ? frontmatter.menuTitle : frontmatter.title}
          </Link>
        );
      })}
      {categories.map(category => (
        <Link key={category} to="/" onClick={() => categoryOnClick(category)} className={classes.link} data-shape="closed">
          {category}
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
