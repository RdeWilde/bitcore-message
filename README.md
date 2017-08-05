<img src="http://ioncore.io/css/images/module-message.png" alt="ioncore message" height="35">
# Bitcoin Message Verification and Signing for ioncore


[![NPM Package](https://img.shields.io/npm/v/ioncore-message.svg?style=flat-square)](https://www.npmjs.org/package/ioncore-message)
[![Build Status](https://img.shields.io/travis/rdewilde/ioncore-message.svg?branch=master&style=flat-square)](https://travis-ci.org/rdewilde/ioncore-message)
[![Coverage Status](https://img.shields.io/coveralls/rdewilde/ioncore-message.svg?style=flat-square)](https://coveralls.io/r/rdewilde/ioncore-message?branch=master)

ioncore-message adds support for verifying and signing bitcoin messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main ioncore repo](https://github.com/rdewilde/ioncore) for more information.

## Getting Started

```sh
npm install ioncore-message
```

```sh
bower install ioncore-message
```

To sign a message:

```javascript
var ioncore = require('ioncore-lib');
var Message = require('ioncore-message');

var privateKey = ioncore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H/DIn8uA1scAuKLlCx+/9LnAcJtwQQ0PmcPrJUq90aboLv3fH5fFvY+vmbfOSFEtGarznYli6ShPr9RXwY9UrIY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/rdewilde/ioncore/blob/master/CONTRIBUTING.md) on the main ioncore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/rdewilde/ioncore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. ioncore is a trademark maintained by BitPay, Inc.

