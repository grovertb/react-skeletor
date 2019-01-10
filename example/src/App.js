import React, { Component, Fragment } from 'react'

import Skeleton from '@grovertb/react-skeletor'

export default class App extends Component {
  render () {
    return (
      <Fragment>
        <Skeleton />
        <Skeleton width={100} height={100} circle  />
        <Skeleton count={4} />
        <Skeleton width={300} height={50}  />
      </Fragment>
    )
  }
}
