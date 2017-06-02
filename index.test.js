/*
 * This file is part of the date-fns-strftime npm package. Copyright (C) 2017 and above Shogun <shogun@cowtech.it>.
 * Licensed under the MIT license, which can be found at http://www.opensource.org/licenses/mit-license.php.
 */

/* eslint-disable no-magic-numbers */

const strftime = require("./index.js");

describe("date-fns-strftime", () => {
  beforeEach(() => {
    this.subject = new Date(2014, 4 /* May */, 4, 9, 9, 9, 900);

    const offset = this.subject.getTimezoneOffset();
    const absoluteOffset = Math.abs(offset);
    let hours = Math.floor(absoluteOffset / 60);
    let minutes = absoluteOffset % 60;

    if(hours < 10)
      hours = `0${hours}`;

    if(minutes < 10)
      minutes = `0${minutes}`;

    const sign = offset > 0 ? "-" : "+";

    this.timestamp = this.subject.getTime().toString();
    this.timezone = `${sign}${hours}:${minutes}`;
  });

  test("uses the default format", () => {
    expect(strftime(this.subject)).toEqual(`2014-05-04T09:09:09.900${this.timezone}`);
  });

  test("accepts a string", () => {
    expect(strftime(this.subject, "%Y-%m-%d")).toEqual("2014-05-04");
  });

  test("accepts a timestamp", () => {
    expect(strftime(this.subject, "%Y-%m-%d %1")).toEqual("2014-05-04 %1");
  });

  test("correctly uses arguments", () => {
    expect(strftime(this.subject, "%a --- %A --- %b --- %B")).toEqual("Sun --- Sunday --- May --- May");
    expect(strftime(this.subject, "%d --- %D --- %e --- %F")).toEqual("04 --- 05/04/2014 --- 4 --- 2014-05-04");
    expect(strftime(this.subject, "%g --- %h --- %H --- %I")).toEqual("18 --- May --- 09 --- 09");
    expect(strftime(this.subject, "%j --- %k --- %L --- %l")).toEqual("124 --- 9 --- 900 --- 9");
    expect(strftime(this.subject, "%m --- %M --- %p --- %P")).toEqual("05 --- 09 --- AM --- am");
    expect(strftime(this.subject, "%r --- %R --- %s --- %S")).toEqual(`09:09:09 AM --- 09:05 --- ${this.timestamp} --- 09`);
    expect(strftime(this.subject, "%T --- %u --- %V --- %w")).toEqual("09:09:09 --- 7 --- 18 --- 0");
    expect(strftime(this.subject, "%W --- %y --- %Y --- %z --- %Z")).toEqual(`18 --- 14 --- 2014 --- ${this.timezone.replace(":", "")} --- ${this.timezone}`);
    expect(strftime(this.subject, "%123 %%")).toEqual("%123 %%");
  });
});

/* eslint-enable no-magic-numbers */
