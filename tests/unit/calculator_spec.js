var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  it('it should add', function(){
    calculator.numberClick(1)
    calculator.operatorClick("+")
    calculator.numberClick(4)
    calculator.operatorClick("=")
    assert.equal(calculator.runningTotal, 5)
  })

  it('it should subtract', function(){
    calculator.numberClick(7)
    calculator.operatorClick("-")
    calculator.numberClick(4)
    calculator.operatorClick("=")
    assert.equal(calculator.runningTotal, 3)
  })

  it('it should multiply', function(){
    calculator.numberClick(3)
    calculator.operatorClick("*")
    calculator.numberClick(5)
    calculator.operatorClick("=")
    assert.equal(calculator.runningTotal, 15)
  })

  it('it should divide', function(){
    calculator.numberClick(21)
    calculator.operatorClick("/")
    calculator.numberClick(7)
    calculator.operatorClick("=")
    assert.equal(calculator.runningTotal, 3)
  })

  it('it should concatenate multiple number button clicks', function(){
    calculator.numberClick(2)
    calculator.numberClick(9)
    calculator.operatorClick("=")
    assert.equal(calculator.runningTotal, 29)
  })

  it('it should chain multiple operations together', function(){
    calculator.numberClick(1)
    calculator.operatorClick("+")
    calculator.numberClick(3)
    calculator.operatorClick("*")
    calculator.numberClick(5)
    calculator.operatorClick("/")
    calculator.numberClick(4)
    calculator.operatorClick("-")
    calculator.numberClick(2)
    calculator.operatorClick("=")
    assert.equal(calculator.runningTotal, 3)
  })

  it('it should clear the running total', function(){
    calculator.numberClick(1)
    calculator.operatorClick("+")
    calculator.numberClick(3)
    calculator.clearClick()
    assert.equal(calculator.runningTotal, 0)
  })


});
