const assert = require("assert");
const expect = require("chai").expect;
const { describe, it } = require("mocha");
const calculateNumber = require("./1-calcul");

describe("calculateNumber()", function () {
	describe("SUM", function () {
		it("checking if numbers round", function () {
			expect(calculateNumber("SUM", 1, 2)).to.equal(3);
		});
		it("checking if numbers round", function () {
			expect(calculateNumber("SUM", 1.6, 2.6)).to.equal(5);
		});
	})
	describe("SUBTRACT", function () {
		it("checking if numbers round", function () {
			it("checking if numbers round", function () {
				expect(calculateNumber("SUBTRACT", 1.4, 2.2).to.equal(-1));
			});
		});
		it("checking if numbers round", function () {
			it("checking if numbers round", function () {
				expect(calculateNumber("SUBTRACT", 4.9, 2.7).to.equal(2));
			});
		});
	});

	describe("DIVIDE", function () {
		it("checking if numbers round", function () {
			const result = calculateNumber("DIVIDE", 4, 2);
			assert.strictEqual(result, 2);
		});
		it("checking if numbers round", function () {
			const result = calculateNumber("DIVIDE", 4, 0);
			assert.strictEqual(result, "Error");
		});
		it("checking if numbers round", function () {
			const result = calculateNumber("DIVIDE", 4.6, 1.8);
			assert.strictEqual(result, 2.5);
		});
	});
	
});
