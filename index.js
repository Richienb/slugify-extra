"use strict"

const slugify = require("@sindresorhus/slugify")
const mimicFn = require("mimic-fn")
const emojis = require("emoji.json")
const mergeOptions = require("merge-options")

const customReplacements = emojis.map(({ char, name }) => [char, name])

const slugifyExtra = mimicFn((string, options) => slugify(string, mergeOptions({ customReplacements }, options)), slugify)

module.exports = slugifyExtra
// TODO: Remove in next major release of @sindresorhus/slugify
module.exports.default = slugifyExtra
