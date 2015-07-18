/*jshint node:true, mocha:true */

'use strict';

require('should');

var rescale = require('rescale')(require('floating-adapter')).rescale;
var metric = require('../src/linear-presets-metric-prefixes');

function convert(x, preset) {
  return rescale(x, preset[0], preset[1]);
};

function invert(preset) {
  return preset.slice(0).reverse();
};

describe('metric prefixes presets', function() {
  it('should convert correctly', function() {
    (1).should.be.approximately(convert(1e-24, invert(metric.noneToYotta)), 1e-15, 'noneToYotta')
      .and.approximately(convert(1e-21, invert(metric.noneToZetta)), 1e-15, 'noneToZetta')
      .and.exactly(convert(1e-15, invert(metric.noneToPeta)), 'noneToPeta')
      .and.exactly(convert(1e-12, invert(metric.noneToTera)), 'noneToTera')
      .and.exactly(convert(1e-9, invert(metric.noneToGiga)), 'noneToGiga')
      .and.exactly(convert(1e-6, invert(metric.noneToMega)), 'noneToMega')
      .and.exactly(convert(1e-3, invert(metric.noneToKilo)), 'noneToKilo')
      .and.exactly(convert(0.01, invert(metric.noneToHecto)), 'noneToHecto')
      .and.exactly(convert(0.1, invert(metric.noneToDeca)), 'noneToDeca')
      .and.exactly(convert(10, invert(metric.noneToDeci)), 'noneToDeci')
      .and.exactly(convert(100, invert(metric.noneToCenti)), 'noneToCenti')
      .and.exactly(convert(1e3, invert(metric.noneToMilli)), 'noneToMilli')
      .and.exactly(convert(1e6, invert(metric.noneToMicro)), 'noneToMicro')
      .and.exactly(convert(1e9, invert(metric.noneToNano)), 'noneToNano')
      .and.exactly(convert(1e12, invert(metric.noneToPico)), 'noneToPico')
      .and.exactly(convert(1e15, invert(metric.noneToFemto)), 'noneToFemto')
      .and.exactly(convert(1e18, invert(metric.noneToAtto)), 'noneToAtto')
      .and.exactly(convert(1e21, invert(metric.noneToZepto)), 'noneToZepto')
      .and.exactly(convert(1e24, invert(metric.noneToYocto)), 'noneToYocto');

    (0).should.be.exactly(convert(0, metric.noneToYotta), 'noneToYotta')
      .and.exactly(convert(0, metric.noneToZetta), 'noneToZetta')
      .and.exactly(convert(0, metric.noneToExa), 'noneToExa')
      .and.exactly(convert(0, metric.noneToPeta), 'noneToPeta')
      .and.exactly(convert(0, metric.noneToTera), 'noneToTera')
      .and.exactly(convert(0, metric.noneToGiga), 'noneToGiga')
      .and.exactly(convert(0, metric.noneToMega), 'noneToMega')
      .and.exactly(convert(0, metric.noneToKilo), 'noneToKilo')
      .and.exactly(convert(0, metric.noneToHecto), 'noneToHecto')
      .and.exactly(convert(0, metric.noneToDeca), 'noneToDeca')
      .and.exactly(convert(0, metric.noneToDeci), 'noneToDeci')
      .and.exactly(convert(0, metric.noneToCenti), 'noneToCenti')
      .and.exactly(convert(0, metric.noneToMilli), 'noneToMilli')
      .and.exactly(convert(0, metric.noneToMicro), 'noneToMicro')
      .and.exactly(convert(0, metric.noneToNano), 'noneToNano')
      .and.exactly(convert(0, metric.noneToPico), 'noneToPico')
      .and.exactly(convert(0, metric.noneToFemto), 'noneToFemto')
      .and.exactly(convert(0, metric.noneToAtto), 'noneToAtto')
      .and.exactly(convert(0, metric.noneToZepto), 'noneToZepto')
      .and.exactly(convert(0, metric.noneToYocto), 'noneToYocto');
  });
});
