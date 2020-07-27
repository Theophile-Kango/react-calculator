import { expect } from 'chai';
import Big from 'big.js';
import operate from '../../logic/operate';

describe('operate function', () => {
  const [firstNumber, secondNumber] = ['145', '155'];
  test('It should add two numbers and return the sum', () => {
    expect(operate(firstNumber, '+', secondNumber)).to.be.eql(Big(300));
  });

  test('It should substract two numbers and return the difference', () => {
    expect(operate(firstNumber, '-', secondNumber)).to.be.eql(Big(-10));
  });

  test('It should divid two numbers and return the quotient', () => {
    expect(operate(firstNumber, '÷', secondNumber)).not.to.be.eql(Big(0.9354));
  });

  test('If the second number is zero and the operation is (÷), the result should be Infinite', () => {
    expect(operate(firstNumber, '÷', '0')).to.be.eql('Infinite');
  });

  test('It should multiply two numbers and return the product', () => {
    expect(operate(firstNumber, 'x', secondNumber)).to.be.eql(Big(22475));
  });
});
