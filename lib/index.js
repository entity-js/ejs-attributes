/**
 *  ______   __   __   ______  __   ______  __  __
 * /\  ___\ /\ "-.\ \ /\__  _\/\ \ /\__  _\/\ \_\ \
 * \ \  __\ \ \ \-.  \\/_/\ \/\ \ \\/_/\ \/\ \____ \
 *  \ \_____\\ \_\\"\_\  \ \_\ \ \_\  \ \_\ \/\_____\
 *   \/_____/ \/_/ \/_/   \/_/  \/_/   \/_/  \/_____/
 *                                         __   ______
 *                                        /\ \ /\  ___\
 *                                       _\_\ \\ \___  \
 *                                      /\_____\\/\_____\
 *                                      \/_____/ \/_____/
 */

/**
 * Provides the utility function 'attributes'.
 *
 * @author Orgun109uk <orgun109uk@gmail.com>
 *
 * @module ejs
 * @class attributes
 */

/**
 * Output an object of attributes to a string for HTML tags.
 *
 * @method attributes
 * @param {Object} attrs An object of attributes.
 * @returns {String} The result of the attributes object.
 */
module.exports = function attributes (attrs) {
  'use strict';

  var output = [];
  for (var attribute in attrs) {
    // Check if theproperty is an array.
    if (attrs[attribute] instanceof Array) {
      // Its an array, so now make sure we have some values.
      if (attrs[attribute].length > 0) {
        // There are items in the array so we do a join and add it as an
        // attribute.
        output.push(attribute + '="' + attrs[attribute].join(' ') + '"');
      }
    } else if (typeof attrs[attribute] === 'object') {
      // JSONify the object and escape.
      output.push(
        attribute + '="' + JSON.stringify(attrs[attribute])
          .replace(/[\\$'"]/g, "\\$&") + '"'
      );
    } else if (attrs[attribute] !== '') {
      // The value is not an array so we just add it.
      output.push(attribute + '="' + attrs[attribute] + '"');
    }
  }

  return output.join(' ');
};
