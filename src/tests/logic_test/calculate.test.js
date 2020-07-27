import { expect } from 'chai';
import Big from 'big.js';
import calculate from '../../logic/calculate';

describe('calculate function', () => {
 
  test('If the button is (+) the result should be the sum', () => {
    expect(calculate({ total: '35', operation: '+', next: '35'}, '+')).to.be.
    eql({"next":"", "operation":"+", "total":Big(70)});
  });
  test('If the button is (-) the result should be the difference', () => {
    expect(calculate({ total: '35', operation: '-', next: '35'}, '-')).to.be.
    eql({"total":Big(0), "next":"", "operation":"-"});
  });
  test('If the button is (÷) the result should be the quotient', () => {
    expect(calculate({total: '35', operation: '÷', next: '35'}, '÷')).to.be.
    eql({"total":Big(1), "next":"", "operation":"÷"});
  });
  test('If the second number is zero and the operation is ÷, the result should be Infinite', () => {
    expect(calculate({ total: '35', operation: '/', next: '0' }, '÷')).
    to.be.eql({"total":0, "next":"", "operation":"÷"});
  });
  test('If the button is (x) the result should be the product', () => {
    expect(calculate({ total: '35', operation: 'x', next: '35'}, 'x')).to.be.
    eql({"total":Big(1225), "next":"", "operation":"x"});
  });
  test('If the button is (%) the result should be the value total divided by 100', () => {
    expect(calculate({ total: '35', operation: '%', next: '35'}, '%')).
    to.be.eql({"total":Big(0.35), "next":null, "operation":""});
  });
  test('If the button is (+/-) the result should be multiplyied by -1', () => {
    expect(calculate({ total: '35', operation: '+/-', next: '35'}, '+/-')).
    to.be.eql({"total":Big(-35), "next":null, "operation":""});
  });
  test('If the button is (AC) the result should be 0', () => {
    expect(calculate({ total: '35', operation: 'AC', next: '35'}, 'AC')).
    to.be.eql({"total":null, "operation":null, "next":null});
  });
  test('If the button is (=) the result should be returned', () => {
    expect(calculate({ total: '35', operation: '-', next: '35'}, '=')).
    to.be.eql({"next": null, "operation": null, "total": Big(0)});
  });
  test('If the button is (4) the next should containe 4 at the end', () => {
    expect(calculate({ total: '35', operation: '-', next: '35'}, '4')).
    to.be.eql({"next": "354", "operation": "-", "total": "35"});
  });
  test("If the button is (.) and the result doesn't containe . ", () => {
    expect(calculate({ total: '4', operation: '-', next: '3' }, '.')).to.be.
    eql({"next": "3.", "operation": "-", "total": "4"});
  });
});
