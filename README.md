# Slugify Extra [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/slugify-extra/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/slugify-extra)

Slugify with better emoji support.

[![NPM Badge](https://nodei.co/npm/slugify-extra.png)](https://npmjs.com/package/slugify-extra)

## Install

```sh
npm install slugify-extra
```

## Usage

```js
const slugify = require("@sindresorhus/slugify")
const slugifyExtra = require("slugify-extra");

slugify("�😀");
//=> ''

slugifyExtra("�😀");
//=> 'grinning-face'
```

## API

See https://github.com/sindresorhus/slugify#api
