import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(() => ({
  //   wrapper: {
  //     padding: '1px',
  //     position: 'absolute',
  //     top: 0,
  //     left: 0,
  //     bottom: 0,
  //     right: 0,
  //     overflow: 'hidden',
  //     '@media print': {
  //       position: 'relative',
  //       overflow: 'visible',
  //     },
  //   },
}))

const LayoutWrapper = ({ children }) => {
  const { classes } = useStyles()

  return <div className={classes.wrapper}>{children}</div>
}

LayoutWrapper.propTypes = {
  children: PropTypes.node,
}

export default LayoutWrapper
