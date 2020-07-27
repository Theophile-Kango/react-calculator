import { expect } from 'chai';
import Big from 'big.js';
import calculate from '../../logic/calculate';

describe('calculate function', () => {
  const calculations = {
    total: '35',
    operation: '+',
    next: '35',
  };

  
  test('If the button is (+) the result should be the sum', () => {
    expect(calculate(calculations, '+')).to.be.eql({"next":"35", "operation":"+", "total":Big(70)});
  });
  test('If the button is (-) the result should be the difference', () => {
    expect(calculate(calculations, '-')).to.be.eql({"total":Big(0), "next":"35", "operation":"-"});
  });
  test('If the button is (÷) the result should be the quotient', () => {
    expect(calculate(calculations, '÷')).to.be.eql({"total":Big(1), "next":"35", "operation":"÷"});
  });
  test('If the second number is zero and the operation is ÷, the result should be Infinite', () => {
    expect(calculate({ total: '35', operation: '/', next: '0' }, '÷')).
    to.be.eql({"total":"Infinite", "next":"0", "operation":"÷"});
  });
  test('If the button is (x) the result should be the product', () => {
    expect(calculate(calculations, 'x')).to.be.eql({"total":Big(1225), "next":"35", "operation":"x"});
  });
  test('If the button is (%) the result should be the value of next divided by 100', () => {
    expect(calculate(calculations, '%')).to.be.eql({"total":Big(0.35), "next":"35", "operation":"%"});
  });
  test('If the button is (+/-) the result should be multiplyied by -1', () => {
    expect(calculate(calculations, '+/-')).to.be.eql({"total":Big(-35), "next":"35", "operation":"+"});
  });
  test('If the button is (AC) the result should be 0', () => {
    expect(calculate(calculations, 'AC')).to.be.eql({"total":null, "operation":null, "next":null});
  });
  test('If the button is (=) the result should be returned', () => {
    expect(calculate(calculations, '=')).to.be.eql({"next": null, "operation": null, "total": Big(70)});
  });
  test('If the button is (4) the next should containe 4 at the end', () => {
    expect(calculate(calculations, '4')).to.be.eql({"next": "354", "operation": "+", "total": "35"});
  });
  test("If the button is (.) and the result doesn't containe . ", () => {
    expect(calculate({ total: '4', operation: '-', next: '3' }, '.')).to.be.
    eql({"next": "3.", "operation": "-", "total": "4"});
  });
});
