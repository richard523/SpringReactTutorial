var affirm = require('../index')
var expect = require('expect.js')

describe('Affirm', function() {
	it('Should pass', function() {
		expect(affirm).withArgs(true, 'Should pass').to.not.throwException()
	})

	it('Should fail', function() {
		expect(affirm).withArgs(false, 'Should fail').to.throwException(/Should fail/)
	})

	it('Should fail with status', function() {
		expect(affirm).withArgs(false, 'Should fail', 400).to.throwException(function(e) {
			expect(e.statusCode).to.be(400)
		});
	})
})
