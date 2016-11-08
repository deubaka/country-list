'use strict'

var data = require('./data.json')

/**
 * Precompute name and code lookups.
 */
var nameMap = {}
var codeMap = {}
var commonMap = {}
var commonCodeMap = {}
data.forEach(function (country) {
  nameMap[country.name.toLowerCase()] = country.code
  codeMap[country.code.toLowerCase()] = country.name
  commonMap[country.code.toLowerCase()] = country.common
  commonCodeMap[country.common.toLowerCase()] = country.code
})

module.exports = CountryList
function CountryList () {
  if (!(this instanceof CountryList)) return new CountryList()
};

CountryList.prototype.getCode = function getCode (name) {
  return nameMap[name.toLowerCase()]
}

CountryList.prototype.getCodeForCommon = function getCodeForCommon (common) {
  return commonCodeMap[common.toLowerCase()]
}

CountryList.prototype.getName = function getName (code) {
  return codeMap[code.toLowerCase()]
}

CountryList.prototype.getCommon = function getCommon (code) {
  return commonMap[code.toLowerCase()]
}

CountryList.prototype.getNames = function getNames () {
  return data.map(function (country) {
    return country.name
  })
}

CountryList.prototype.getCodes = function getCodes () {
  return data.map(function (country) {
    return country.code
  })
}

CountryList.prototype.getCommons = function getCommon () {
  return data.map(function (country) {
    return country.common
  })
}

CountryList.prototype.getData = function getData () {
  return data
}
