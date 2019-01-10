# @grovertb/react-skeletor

> react-skeletor

[![NPM](https://img.shields.io/npm/v/@grovertb/react-skeletor.svg)](https://www.npmjs.com/package/@grovertb/react-skeletor) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @grovertb/react-skeletor
```

## Usage

```jsx
import React, { Component, Fragment } from 'react'

import Skeleton from '@grovertb/react-skeletor'

class Example extends Component {
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

```

## License

MIT © [grovertb](https://github.com/grovertb)
