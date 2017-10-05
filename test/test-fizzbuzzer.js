const should = require('chai').should()
const expect = require('chai').expect()

const FizzBuzzer = require('../fizzBuzzer')

describe('fizzbuzzer', function () {
  it('should throw Error if param is not a number', function () {
    let cases = [
      'a',
      true,
      '2'
    ]

    cases.forEach(input => {
      // See https://github.com/chaijs/chai/pull/683
      should.Throw(() => FizzBuzzer(input), Error, '`num` must be a number')
    })
  })

  const cases = [
    {'value': 3, 'expected': 'fizz'},
    {'value': 5, 'expected': 'buzz'},
    {'value': 6, 'expected': 'fizz'},
    {'value': 7, 'expected': 7},
    {'value': 8, 'expected': 8},
    {'value': 9, 'expected': 'fizz'},
    {'value': 10, 'expected': 'buzz'},
    {'value': 11, 'expected': 11},
    {'value': 12, 'expected': 'fizz'},
    {'value': 15, 'expected': 'fizz-buzz'},
    {'value': 20, 'expected': 'buzz'},
    {'value': 25, 'expected': 'buzz'},
    {'value': 30, 'expected': 'fizz-buzz'}
  ]

  it('should return `fizz-buzz` if param is evenly divisible by 15.', function () {
    cases.forEach(input => {
      FizzBuzzer(input.value).should.equal(input.expected)
    })
  })
  it('should return `buzz` if param is evenly divisible by 5.', function () {
    cases.forEach(input => {
      FizzBuzzer(input.value).should.equal(input.expected)
    })
  })
  it('should return `fizz` if param is evenly divisible by 3.', function () {
    cases.forEach(input => {
      FizzBuzzer(input.value).should.equal(input.expected)
    })
  })
  it('should return the param if param is neither divisible by 15, 5 or 3', function () {
    cases.forEach(input => {
      FizzBuzzer(input.value).should.equal(input.expected)
    })
  })
})
