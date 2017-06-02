/*
 * This file is part of the date-fns-strftime npm package. Copyright (C) 2017 and above Shogun <shogun@cowtech.it>.
 * Licensed under the MIT license, which can be found at http://www.opensource.org/licenses/mit-license.php.
 */

declare module "date-fns-strftime" {
  function strftime(date: Date | string | number, format?: string = "%FT%T.%L%Z", options?: {locale?: Object}): string;
  export = strftime;
}
