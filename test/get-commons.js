'use strict'

var test = require('tap').test
var countries = require('../')()
var data = require('../data.json')

test('get all country names', function (t) {
  t.equal(countries.getCommons().length, data.length, 'common country names should be as many as countries')
  t.ok(countries.getCommons().indexOf('South Korea') > -1, 'common country names should include South Korea')
  t.ok(countries.getCommons().indexOf('south korea') === -1, 'common country names is case-sensitive, does not include south korea')
  t.type(countries.getCommons(), Array, 'name list is an array')
  t.end()
})
