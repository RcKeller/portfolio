import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import IconButton from "@mui/material/IconButton";
import { Manager, Target, Popper } from "react-popper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import classNames from "classnames";
import FilterListIcon from "@mui/icons-material/FilterList";

const styles = theme => ({
  fontSizeSetter: {
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {}
  },
  open: {
    color: theme.bars.colors.icon
  },
  popperClose: {
    pointerEvents: "none"
  },
  popper: {
    zIndex: 1
  }
});

class CategoryFilter extends React.Component {
  state = {
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

  handleFiltering = e => {
    const category = e.target.innerText.trim();
    this.props.filterCategory(category);
    this.handleClose();
  };

  render() {
    const { classes, categories } = this.props;
    const { open } = this.state;

    return (
      <nav className={classes.fontSizeSetter}>
        <Manager>
          <Target>
            <IconButton
              aria-label="Filter by category"
              aria-haspopup="true"
              onClick={this.handleClick}
              title="Filter the list by category"
              className={classes.open}
              size="large">
              <FilterListIcon />
            </IconButton>
          </Target>
          <Popper
            placement="bottom-end"
            eventsEnabled={open}
            className={`${classNames({ [classes.popperClose]: !open })} ${classes.popper}`}
          >
            <ClickAwayListener onClickAway={this.handleClose}>
              <Grow in={open} id="cat-menu-list" style={{ transformOrigin: "0 0 0" }}>
                <Paper>
                  <MenuList role="menu">
                    <MenuItem key="all" onClick={this.handleFiltering}>
                      All Articles
                    </MenuItem>
                    {categories.map(category => (
                      <MenuItem key={category} onClick={this.handleFiltering}>
                        {category}
                      </MenuItem>
                    ))}
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

CategoryFilter.propTypes = {
  classes: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  filterCategory: PropTypes.func.isRequired
};

export default injectSheet(styles)(CategoryFilter);
