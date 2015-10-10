/*jshint node:true, mocha:true */

'use strict';

require('should');

var Decimal = require('linear-arbitrary-precision')(require('floating-adapter'));
var rescale = require('rescale')(Decimal).rescale;
var metric = require('linear-preset-factory')(require('../src/linear-presets-metric-prefixes'));

function convert(x, preset) {
  return Number(rescale(preset[0], preset[1], x));
}

function invert(preset) {
  return preset.slice().reverse();
}

describe('metric prefixes presets', function() {
  it('should convert correctly', function() {
    (1).should.be.exactly(convert(1, invert(metric.none_none)), 'none_none')
      .and.approximately(convert(1e-24, invert(metric.none_yotta)), 1e-15, 'none_yotta')
      .and.approximately(convert(1e-21, invert(metric.none_zetta)), 1e-15, 'none_zetta')
      .and.exactly(convert(1e-18, invert(metric.none_exa)), 'none_exa')
      .and.exactly(convert(1e-15, invert(metric.none_peta)), 'none_peta')
      .and.exactly(convert(1e-12, invert(metric.none_tera)), 'none_tera')
      .and.exactly(convert(1e-9, invert(metric.none_giga)), 'none_giga')
      .and.exactly(convert(1e-6, invert(metric.none_mega)), 'none_mega')
      .and.exactly(convert(1e-3, invert(metric.none_kilo)), 'none_kilo')
      .and.exactly(convert(0.01, invert(metric.none_hecto)), 'none_hecto')
      .and.exactly(convert(0.1, invert(metric.none_deca)), 'none_deca')
      .and.exactly(convert(10, invert(metric.none_deci)), 'none_deci')
      .and.exactly(convert(100, invert(metric.none_centi)), 'none_centi')
      .and.exactly(convert(1e3, invert(metric.none_milli)), 'none_milli')
      .and.exactly(convert(1e6, invert(metric.none_micro)), 'none_micro')
      .and.exactly(convert(1e9, invert(metric.none_nano)), 'none_nano')
      .and.exactly(convert(1e12, invert(metric.none_pico)), 'none_pico')
      .and.exactly(convert(1e15, invert(metric.none_femto)), 'none_femto')
      .and.exactly(convert(1e18, invert(metric.none_atto)), 'none_atto')
      .and.exactly(convert(1e21, invert(metric.none_zepto)), 'none_zepto')
      .and.exactly(convert(1e24, invert(metric.none_yocto)), 'none_yocto');

    (0).should.be.exactly(convert(0, metric.none_none), 'none_none')
      .and.exactly(convert(0, metric.none_yotta), 'none_yotta')
      .and.exactly(convert(0, metric.none_zetta), 'none_zetta')
      .and.exactly(convert(0, metric.none_exa), 'none_exa')
      .and.exactly(convert(0, metric.none_peta), 'none_peta')
      .and.exactly(convert(0, metric.none_tera), 'none_tera')
      .and.exactly(convert(0, metric.none_giga), 'none_giga')
      .and.exactly(convert(0, metric.none_mega), 'none_mega')
      .and.exactly(convert(0, metric.none_kilo), 'none_kilo')
      .and.exactly(convert(0, metric.none_hecto), 'none_hecto')
      .and.exactly(convert(0, metric.none_deca), 'none_deca')
      .and.exactly(convert(0, metric.none_deci), 'none_deci')
      .and.exactly(convert(0, metric.none_centi), 'none_centi')
      .and.exactly(convert(0, metric.none_milli), 'none_milli')
      .and.exactly(convert(0, metric.none_micro), 'none_micro')
      .and.exactly(convert(0, metric.none_nano), 'none_nano')
      .and.exactly(convert(0, metric.none_pico), 'none_pico')
      .and.exactly(convert(0, metric.none_femto), 'none_femto')
      .and.exactly(convert(0, metric.none_atto), 'none_atto')
      .and.exactly(convert(0, metric.none_zepto), 'none_zepto')
      .and.exactly(convert(0, metric.none_yocto), 'none_yocto');
  });
});
