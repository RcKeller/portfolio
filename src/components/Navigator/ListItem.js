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


// const styles = theme => ({
//   listItem: {
//     margin: "0 0 .7em 0",
//     transition: "height 1s",
//     [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
//       margin: "0 0 1.5rem 0"
//     },
//     [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
//       ".moving-featured &, .is-aside &": {
//         margin: "0 0 0 0"
//       }
//     }
//   },
//   // icon: {
//   //   marginRight: 8
//   // },
//   content: {
//     paddingBottom: '0 !important'
//   },
//   card: {
//     // maxWidth: '50em',
//     // maxWidth: theme.main.sizes.articleMaxWidth,
//     maxWidth: 960,
//     margin: '8px auto'
//   }
//   // media: {
//   //   // height: 300,
//   //   objectFit: 'contain'
//   // },
// });

const styles = theme => ({
  listItem: {
    maxWidth: theme.main.sizes.articleMaxWidth,
    // margin: "0 0 .7em 0",
    margin: '.7em auto',
    transition: "height 1s",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      margin: "1.5rem auto"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      ".moving-featured &, .is-aside &": {
        margin: ".7em auto"
      }
    }
  },
  card: {
    display: 'flex'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    display: 'none',
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      display: 'block',
      height: 300,
      width: '100%',
      maxWidth: 600,
      objectFit: 'contain',
      backgroundPosition: 'left',
      marginLeft: 'auto'
    }
  },
  none: {
    display: 'none'
  }
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
    const isAside = navigatorPosition === 'is-aside'
    return (
      <li
        className={`${classes.listItem} ${post.node.frontmatter.category}`}
        style={{ display: `${this.state.hidden ? "none" : "block"}` }}
        key={post.node.fields.slug}
      >
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Link
                activeClassName="active"
                to={post.node.fields.slug}
                onClick={linkOnClick}
              >
                <Typography color='primary' gutterBottom variant={!isAside ? 'headline' : 'subheading'}>
                  {post.node.frontmatter.title}
                </Typography>
              </Link>
              <Typography color="textSecondary">
                {post.node.frontmatter.subtitle}
              </Typography>
            </CardContent>
            <CardActions>
              {post.node.frontmatter.demo && 
                <Button href={post.node.frontmatter.demo} target='_blank' size="small" variant='outlined' color='secondary'>
                  <LinkIcon style={{ marginRight: 8 }} />
                  Demo
                </Button>
              }
              {post.node.frontmatter.source && 
                <Button href={post.node.frontmatter.source} target='_blank' size="small" variant='outlined' color='secondary'>
                  <CodeIcon style={{ marginRight: 8 }} />
                  Source
                </Button>
              }
            </CardActions>
          </div>
          <CardMedia
            className = {!isAside && !!post.node.frontmatter.cover
              ? classes.cover
              : classes.none
            }
            image={post.node.frontmatter.cover.children[0].resolutions.src}
            title={post.node.frontmatter.title}
          />
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
