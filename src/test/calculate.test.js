import calculate from './../logic/calculate';
import { expect } from 'chai';
import Big from 'big.js';

describe('calculate function', () => {
    const calculations = {
        total: "35",
        operation: "+",
        next: "35"
    }
   test("If the button is (+) the result should be the sum",() => {
        expect(calculate(calculations,"+")).to.be.eql(Big(70));
   });
   test("If the button is (-) the result should be the difference", () => {
        expect(calculate(calculations,"-")).to.be.eql(Big(0));
   });
   test("If the button is (÷) the result should be the quotient",() => {
        expect(calculate(calculations,"÷")).to.be.eql(Big(1));
   });
   test("If the second number is zero and the operation is ÷, the result should be Infinite", () => {
    expect(calculate({total: "35",operation: "/", next: "0"},"÷")).to.be.eql("Infinite");
   });
   test("If the button is (x) the result should be the product", () => {
        expect(calculate(calculations,"x")).to.be.eql(Big(1225));
   });
   test("If the button is (%) the result should be the value of next divided by 100", () => {
        expect(calculate(calculations,"%")).to.be.eql(Big(0.35));
   });
})