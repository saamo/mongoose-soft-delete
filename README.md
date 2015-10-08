# Mongoose Soft Delete

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]

Mongoose plugin which provides soft delete functionality.

## Install

```bash
npm install --save mongoose-soft-delete
```

## Usage

You can apply plugin globally or per schema.

```js
var mongoose = require('mongoose');
var softDelete = require('mongoose-soft-delete');

mongoose.plugin(softDelete);
```

You can also specify if `delete` and `deleteAt` fields should be excluded from query results by default.

```js
mongoose.plugin(softDelete, { select: false });
```

## License

MIT © [Samir Djellil](http://samirdjellil.com)

[npm-image]: https://img.shields.io/npm/v/mongoose-soft-delete.svg?style=flat-square
[npm-url]: https://npmjs.org/package/mongoose-soft-delete
[travis-image]: https://img.shields.io/travis/saamo/mongoose-soft-delete/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/saamo/mongoose-soft-delete
