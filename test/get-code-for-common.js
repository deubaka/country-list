'use strict'

var test = require('tap').test
var countries = require('../')()

test('get code from country name', function (t) {
  t.equal(countries.getCodeForCommon('Taiwan'), 'TW', 'name "Taiwan" should return TW')
  t.equal(countries.getCodeForCommon('taiwan'), 'TW', 'name "taiwan" should return TW')
  t.equal(countries.getCodeForCommon('TAIWAN'), 'TW', 'name "TAIWAN" should return TW')
  t.type(countries.getCodeForCommon('Taiwan'), 'string', 'type of name "Taiwan" is string')
  t.type(countries.getCodeForCommon('TW'), 'undefined', 'type of name "TW" is undefined')
  t.type(countries.getCodeForCommon('FarFarAwayLand'), 'undefined', 'name "FarFarAwayLand" should return undefined')
  t.type(countries.getCodeForCommon(''), 'undefined', 'empty name should return undefined')
  t.type(countries.getCommon('TW'), 'Taiwan', 'common name for "TW" should return "Taiwan"')
  t.type(countries.getCommon('KR'), 'South Korea', 'common name for "KR" should return "South Korea"')
  t.end()
})
