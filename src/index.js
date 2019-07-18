import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class Skeleton extends Component {
  static propTypes = {
    count: PropTypes.number,
    duration: PropTypes.number,
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    circle: PropTypes.bool,
    defaultBaseColor: PropTypes.string,
    defaultHighlightColor: PropTypes.string
  }

  static defaultProps = {
    count: 1,
    duration: 1.2,
    width: null,
    height: null,
    circle: false,
    defaultBaseColor: '#eee',
    defaultHighlightColor: '#f5f5f5'
  }

  render() {
    const items = []

    const {
      count,
      duration,
      defaultBaseColor,
      defaultHighlightColor,
      width,
      height,
      circle
    } = this.props

    const styleItem = {
      '--theme-base-color': defaultBaseColor,
      '--theme-highlight-color': defaultHighlightColor,
      '--theme-duration': `${duration}s`
    }

    if (width != null) styleItem.width = width
    if (height != null) styleItem.height = height
    if (width !== null && height !== null && circle) styleItem.borderRadius = '50%'

    for (let i = 0; i < count; i++) {
      items.push(
        <span
          key={i}
          className={styles.skeletonClass}
          style={styleItem} >
          &zwnj;
        </span>
      )
    }

    return <Fragment>{items}</Fragment>
  }
}
