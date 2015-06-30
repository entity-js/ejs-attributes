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

var test = require('unit.js');

describe('ejs/attributes', function () {

  'use strict';

  var attributes = require('../lib');

  it('convertsAnObjectToHtmlAttributes', function () {

    var attrs = {id: 'hello', name: 'world'};

    test.string(
      attributes(attrs)
    ).is('id="hello" name="world"');

  });

  it('mergesAnArrayToHtmlAttributes', function () {

    var attrs = {id: 'hello', 'class': ['foo', 'bar']};

    test.string(
      attributes(attrs)
    ).is('id="hello" class="foo bar"');

  });

});
