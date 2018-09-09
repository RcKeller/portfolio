import React from "react";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import LazyLoad from "react-lazyload";
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LinkIcon from '@material-ui/icons/Link';
import CodeIcon from '@material-ui/icons/Code';


const styles = theme => ({
  listItem: {
    margin: "0 0 .7em 0",
    transition: "height 1s",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      margin: "0 0 1.5rem 0"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      ".moving-featured &, .is-aside &": {
        margin: "0 0 0 0"
      }
    }
  },
  card: {
    maxWidth: '50em',
    margin: '8px auto'
  },
  media: {
    height: 300,
    objectFit: 'contain'
  },
});

class ListItem extends React.Component {
  state = {
    hidden: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.categoryFilter !== this.props.categoryFilter) {
      const category = this.props.post.node.frontmatter.category;
      const categoryFilter = this.props.categoryFilter;

      if (categoryFilter === "All Articles") {
        this.setState({ hidden: false });
      } else if (category !== categoryFilter) {
        this.setState({ hidden: true });
      } else if (category === categoryFilter) {
        this.setState({ hidden: false });
      }
    }
  }

  render() {
    const { classes, post, linkOnClick, navigatorPosition } = this.props;
    console.log(navigatorPosition)
    return (
      <li
        className={`${classes.listItem} ${post.node.frontmatter.category}`}
        style={{ display: `${this.state.hidden ? "none" : "block"}` }}
        key={post.node.fields.slug}
      >
        <Card className={classes.card}>
          <Link
            activeClassName="active"
            // className={classes.listLink}
            to={post.node.fields.slug}
            onClick={linkOnClick}
          >
            {navigatorPosition && <CardMedia
              className={classes.media}
              image={post.node.frontmatter.cover.children[0].resolutions.src}
              // image={post.node.frontmatter.cover.children[0].resolutions.srcSetWebp}
              // image={post.node.frontmatter.cover.children[0].resolutions.srcSet}
              title={post.node.frontmatter.title}
            />}
            <CardContent>
              <Typography gutterBottom variant="headline">
                {post.node.frontmatter.title}
              </Typography>
              <Typography color="textSecondary">
                {post.node.frontmatter.subtitle}
              </Typography>
            </CardContent>
          </Link>
          <CardActions>
            {post.node.frontmatter.demo && 
              <Button size="small" color="primary">
                <LinkIcon />{' '}Demo
              </Button>
            }
            {post.node.frontmatter.source && 
              <Button size="small" color="primary">
                <CodeIcon />{' '}Source
              </Button>
            }
          </CardActions>
          </Card>
      </li>
    );
  }
}

ListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  linkOnClick: PropTypes.func.isRequired,
  categoryFilter: PropTypes.string.isRequired,
  navigatorPosition: PropTypes.string
};

export default injectSheet(styles)(ListItem);
