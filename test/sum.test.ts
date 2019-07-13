import sum from '../src/sum'
import * as assert from 'assert'
import * as chai from 'chai';

describe('./src/sum.ts', () => {
  it('1+1=2', () => {
    assert.equal(sum(1, 1), 2)
  })
  it('2+3=5', () => {
    assert.equal(sum(2, 3), 5)
  })
  it('3+3=6', () => {
    chai.expect(sum(3, 3)).to.be.equal(6)
    chai.expect({id: 1}).to.be.deep.equal({id: 1})
  })
})