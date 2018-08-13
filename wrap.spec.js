const { expect } = require('chai')
const wrap = require('./wrap')

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('')
  })
  it('First line break to be less then or equel to column given', () => {
    expect(wrap('Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.', 20).indexOf('\n') < 20).to.be.true
  })
})
