const {expect}=require("chai");
const {finreturn}=require("../finreturn.js");

describe("finereturn",() =>{
	it("Should return 72 for the rate of 1",() =>{
		let rate = 1;
		let result = finreturn(rate)
		expect(result).to.equal(72);
	});
});
