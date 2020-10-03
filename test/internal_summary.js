
var expect = require("chai").expect;
var internal = require("../src/services/internalService.js");

describe("Gathers Internal Summary Object", function() {
    it("Creates first object if summary object is empty", function() {
        var summary = internal.countSummary({id: 'abba', time: 1595937443, value: 21.99538957950806}, {sensors: Array(0)});         
        expect(summary.sensors.length).to.equal(1);
      });
});