# css-sample [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

>

## Installation

```sh
$ npm install --save css-sample
```

## Usage

```js
var cssSample = require("css-sample");

cssSample("Rainbow");
```

## Development Demo

For local stylus + css modules dev demo, update your `archetype/config/index.js`:

```
module.exports = {
  webpack: {
      cssModuleSupport: true
    }
  };
```

And run:

```

clap dev

```

You shall see the class name showed similar to:

```

custom__login-mail___H5_3_

```

## Production Demo

To enable shorten css names, update your `archetype/config/index.js`:

```

module.exports = {
  webpack: {
      cssModuleSupport: true,
      enableShortenCSSNames: true
    }
  };

```

And run:

```

npm run build
NODE_ENV = production npm run start

```

You shall see the class name showed similar to:

```

class="H5*3*"

```

## License

Apache-2.0 © [Sheng Di]()

[npm-image]: https://badge.fury.io/js/css-sample.svg
[npm-url]: https://npmjs.org/package/css-sample
[travis-image]: https://travis-ci.org/didi0613/css-sample.svg?branch=master
[travis-url]: https://travis-ci.org/didi0613/css-sample
[daviddm-image]: https://david-dm.org/didi0613/css-sample.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/didi0613/css-sample

```

```
