/*
 * This file is part of the date-fns-strftime npm package. Copyright (C) 2017 and above Shogun <shogun@cowtech.it>.
 * Licensed under the MIT license, which can be found at https://choosealicense.com/licenses/mit.
 */

/** @module date-fns */

const dateFormat = require("date-fns/format");

const modifiers = {
  a: "ddd",
  A: "dddd",
  b: "MMM",
  B: "MMMM",
  d: "DD",
  D: "MM/DD/YYYY",
  e: "D",
  F: "YYYY-MM-DD",
  g: "WW",
  h: "MMM",
  H: "HH",
  I: "hh",
  j: "DDDD",
  k: "H",
  L: "SSS",
  l: "h",
  m: "MM",
  M: "mm",
  p: "A",
  P: "a",
  r: "hh:mm:ss A",
  R: "HH:MM",
  s: "x",
  S: "ss",
  T: "HH:mm:ss",
  u: "E",
  V: "WW",
  w: "d",
  W: "WW",
  y: "YY",
  Y: "YYYY",
  z: "ZZ",
  Z: "Z"
};

/**
 * Formats the date by mapping C style formatters to `format` formatter.
 *
 * Accepted formatters:
 *
 * | strftime modifier | format token |
 * |-------------------|--------------|
 * | %a                | ddd          |
 * | %A                | dddd         |
 * | %b                | MMM          |
 * | %B                | MMMM         |
 * | %d                | DD           |
 * | %D                | MM/DD/YYYY   |
 * | %e                | D            |
 * | %F                | YYYY-MM-DD   |
 * | %g                | WW           |
 * | %h                | MMM          |
 * | %H                | HH           |
 * | %I                | hh           |
 * | %j                | DDDD         |
 * | %k                | H            |
 * | %L                | SSS          |
 * | %l                | h            |
 * | %m                | MM           |
 * | %M                | mm           |
 * | %p                | A            |
 * | %P                | a            |
 * | %r                | hh:mm:ss A   |
 * | %R                | HH:MM        |
 * | %s                | x            |
 * | %S                | ss           |
 * | %T                | HH:mm:ss     |
 * | %u                | E            |
 * | %V                | WW           |
 * | %w                | d            |
 * | %W                | WW           |
 * | %y                | YY           |
 * | %Y                | YYYY         |
 * | %z                | ZZ           |
 * | %Z                | z            |
 *
 * All other characters in the string are not changed.
 *
 * The result may vary by locale.
 *
 * @param {Date|String|Number} date The original date.
 * @param {String} format The string of tokens.
 * @param {Object} options The object with options, see `date-fns/format`.
 * @returns {String} The formatted date string.
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const strftime = require("date-fns-strftime");
 * console.log(strftime(new Date(2014, 1, 11), "%m/%d/%Y"))
 * //=> "02/11/2014"
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * const eoLocale = require("date-fns/locale/eo");
 * const strftime = require("date-fns-strftime");
 * console.log(strftime(new Date(2014, 6, 2), "%d de %B %Y", {locale: eoLocale}))
 * //=> "2 de julio 2014"
 */
const strftime = function(date, format = "%FT%T.%L%Z", options = {}){
  const matcher = new RegExp(`(%[${Object.keys(modifiers).join("")}])`, "g");
  return format.replace(matcher, t => dateFormat(date, modifiers[t[1]], options));
};

module.exports = strftime;
