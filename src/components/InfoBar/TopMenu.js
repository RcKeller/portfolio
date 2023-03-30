import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import classNames from 'classnames';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';
import {Manager, Popper, Target} from 'react-popper';

import { authorSocialLinks } from "../../../content/meta/config";

const styles = theme => ({
  topMenu: {
    float: "right",
    margin: "5px 10px 0 0",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {}
  },
  open: {
    color: theme.bars.colors.icon
  },
  popperClose: {
    pointerEvents: "none"
  }
});

class TopMenu extends React.Component {
  state = {
    anchorEl: null,
    open: false
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = () => {
    if (!this.state.open) {
      return;
    }

    this.timeout = setTimeout(() => {
      this.setState({ open: false });
    });
  };

  render() {
    const { classes, pages, categories, categoryOnClick } = this.props;
    const { anchorEl, open } = this.state
    return (
      <nav className={classes.topMenu}>
        <Manager>
          <Target>
            <IconButton
              aria-label="More"
              aria-owns={anchorEl ? "long-menu" : null}
              aria-haspopup="true"
              onClick={this.handleClick}
              className={classes.open}
              size="large">
              <MoreVertIcon />
            </IconButton>
          </Target>
          <Popper
            placement="bottom-end"
            eventsEnabled={open}
            className={classNames({ [classes.popperClose]: !open })}
          >
            <ClickAwayListener onClickAway={this.handleClose}>
              <Grow in={open} id="menu-list" style={{ transformOrigin: "0 0 0" }}>
                <Paper>
                  <MenuList role="menu">
                    <MenuItem
                      onClick={e => {
                        this.props.homeLinkOnClick(e);
                        this.handleClose();
                      }}
                    >
                      Home
                    </MenuItem>
                    {pages.map((page, i) => {
                      const { fields, frontmatter } = page.node;

                      return (
                        <Link key={fields.slug} to={fields.slug} style={{ display: "block" }}>
                          <MenuItem
                            onClick={e => {
                              this.props.pageLinkOnClick(e);
                              this.handleClose();
                            }}
                          >
                            {frontmatter.menuTitle ? frontmatter.menuTitle : frontmatter.title}
                          </MenuItem>
                        </Link>
                      );
                    })}
                    {/* {categories.map((category) => (
                      <Link key={category} to='/' style={{ display: "block" }}>
                        <MenuItem
                          onClick={e => {
                            categoryOnClick(e)
                            // this.handleClose()
                          }}
                        >
                          {category}
                        </MenuItem>
                      </Link>
                    ))} */}
                    <hr />
                    {authorSocialLinks.map((link) => {
                      const { name, url } = link;
                      return (
                        <a href={url} target='_blank'>
                          <MenuItem>
                            {name}
                          </MenuItem>
                        </a>
                      );
                    })}
                    {/* <Link to="/contact/" style={{ display: "block" }}>
                      <MenuItem
                        onClick={e => {
                          this.props.pageLinkOnClick(e);
                          this.handleClose();
                        }}
                      >
                        Contact
                      </MenuItem>
                    </Link> */}
                  </MenuList>
                </Paper>
              </Grow>
            </ClickAwayListener>
          </Popper>
        </Manager>
      </nav>
    );
  }
}

TopMenu.propTypes = {
  pages: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  pageLinkOnClick: PropTypes.func.isRequired,
  homeLinkOnClick: PropTypes.func.isRequired,
  categoryOnClick: PropTypes.func.isRequired
};

export default injectSheet(styles)(TopMenu);
