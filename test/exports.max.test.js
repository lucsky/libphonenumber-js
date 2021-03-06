import {
	ParseError,
	parsePhoneNumber,
	parsePhoneNumberFromString,

	findNumbers,
	searchNumbers,
	PhoneNumberMatcher,

	AsYouType,

	Metadata,
	getCountryCallingCode,
	getExtPrefix,

	formatIncompletePhoneNumber,
	parseIncompletePhoneNumber,
	parsePhoneNumberCharacter,
	parseDigits,

	getExampleNumber,

	parseRFC3966,
	formatRFC3966
} from '../max/index'

import examples from '../examples.mobile.json'

describe('exports/max', () => {
	it('should export ES6', () => {
		expect(ParseError).to.be.a('function')

		parsePhoneNumber('+12133734253').nationalNumber.should.equal('2133734253')
		parsePhoneNumber('2133734253', 'US').nationalNumber.should.equal('2133734253')
		parsePhoneNumber('2133734253', { defaultCountry: 'US' }).nationalNumber.should.equal('2133734253')
		parsePhoneNumber('2133734253', undefined, { defaultCountry: 'US' }).nationalNumber.should.equal('2133734253')

		parsePhoneNumberFromString('+12133734253').nationalNumber.should.equal('2133734253')
		expect(parsePhoneNumberFromString('2133734253')).to.be.undefined

		// Test "max" metadata.
		parsePhoneNumber('9150000000', 'RU').getType().should.equal('MOBILE')
		parsePhoneNumber('91187654321', 'AR').getType().should.equal('MOBILE')
		parsePhoneNumber('51234567', 'EE').getType().should.equal('MOBILE')

		findNumbers('+12133734253').should.deep.equal([{ country: 'US', phone: '2133734253', startsAt: 0, endsAt: 12 }])
		findNumbers('2133734253', 'US').should.deep.equal([{ country: 'US', phone: '2133734253', startsAt: 0, endsAt: 10 }])
		findNumbers('2133734253', { defaultCountry: 'US' }).should.deep.equal([{ country: 'US', phone: '2133734253', startsAt: 0, endsAt: 10 }])
		findNumbers('2133734253', undefined, { defaultCountry: 'US' }).should.deep.equal([{ country: 'US', phone: '2133734253', startsAt: 0, endsAt: 10 }])

		searchNumbers('+12133734253')[Symbol.iterator]().next.should.be.a('function')
		searchNumbers('2133734253', 'US')[Symbol.iterator]().next.should.be.a('function')
		searchNumbers('2133734253', { defaultCountry: 'US' })[Symbol.iterator]().next.should.be.a('function')
		searchNumbers('2133734253', undefined, { defaultCountry: 'US' })[Symbol.iterator]().next.should.be.a('function')

		new PhoneNumberMatcher('+12133734253').find.should.be.a('function')

		new AsYouType().input('+12133734253').should.equal('+1 213 373 4253')
		new AsYouType('US').input('2133734253').should.equal('(213) 373-4253')

		getExtPrefix('US').should.equal(' ext. ')
		getCountryCallingCode('KZ').should.equal('7')

		formatIncompletePhoneNumber('+121337342').should.deep.equal('+1 213 373 42')
		formatIncompletePhoneNumber('21337342', 'US').should.deep.equal('(213) 373-42')

		parseIncompletePhoneNumber('+1 213 373 42').should.equal('+121337342')
		parsePhoneNumberCharacter('+').should.equal('+')
		parseDigits('+123').should.equal('123')

		getExampleNumber('RU', examples).nationalNumber.should.equal('9123456789')

		parseRFC3966('tel:+12133734253').should.deep.equal({ number: '+12133734253' })
		formatRFC3966({ number: '+12133734253' }).should.equal('tel:+12133734253')
	})

	it('should export CommonJS', () => {
		const Library = require('../max/index.commonjs')

		expect(Library.ParseError).to.be.a('function')

		Library.parsePhoneNumber('+12133734253').nationalNumber.should.equal('2133734253')
		Library.parsePhoneNumber('2133734253', 'US').nationalNumber.should.equal('2133734253')
		Library.parsePhoneNumber('2133734253', { defaultCountry: 'US' }).nationalNumber.should.equal('2133734253')
		Library.parsePhoneNumber('2133734253', undefined, { defaultCountry: 'US' }).nationalNumber.should.equal('2133734253')

		Library.parsePhoneNumberFromString('+12133734253').nationalNumber.should.equal('2133734253')
		expect(Library.parsePhoneNumberFromString('2133734253')).to.be.undefined

		Library.findNumbers('+12133734253').should.deep.equal([{ country: 'US', phone: '2133734253', startsAt: 0, endsAt: 12 }])
		Library.findNumbers('2133734253', 'US').should.deep.equal([{ country: 'US', phone: '2133734253', startsAt: 0, endsAt: 10 }])
		Library.findNumbers('2133734253', { defaultCountry: 'US' }).should.deep.equal([{ country: 'US', phone: '2133734253', startsAt: 0, endsAt: 10 }])
		Library.findNumbers('2133734253', undefined, { defaultCountry: 'US' }).should.deep.equal([{ country: 'US', phone: '2133734253', startsAt: 0, endsAt: 10 }])

		Library.searchNumbers('+12133734253')[Symbol.iterator]().next.should.be.a('function')
		Library.searchNumbers('2133734253', 'US')[Symbol.iterator]().next.should.be.a('function')
		Library.searchNumbers('2133734253', { defaultCountry: 'US' })[Symbol.iterator]().next.should.be.a('function')
		Library.searchNumbers('2133734253', undefined, { defaultCountry: 'US' })[Symbol.iterator]().next.should.be.a('function')

		new Library.PhoneNumberMatcher('+12133734253', undefined).find.should.be.a('function')

		new Library.AsYouType().input('+12133734253').should.equal('+1 213 373 4253')
		new Library.AsYouType('US').input('2133734253').should.equal('(213) 373-4253')

		Library.getExtPrefix('US').should.equal(' ext. ')
		Library.getCountryCallingCode('KZ').should.equal('7')

		Library.formatIncompletePhoneNumber('+121337342').should.deep.equal('+1 213 373 42')
		Library.formatIncompletePhoneNumber('21337342', 'US').should.deep.equal('(213) 373-42')

		Library.parseIncompletePhoneNumber('+1 213 373 42').should.equal('+121337342')
		Library.parsePhoneNumberCharacter('+').should.equal('+')
		Library.parseDigits('+123').should.equal('123')

		Library.getExampleNumber('RU', examples).nationalNumber.should.equal('9123456789')

		Library.parseRFC3966('tel:+12133734253').should.deep.equal({ number: '+12133734253' })
		Library.formatRFC3966({ number: '+12133734253' }).should.equal('tel:+12133734253')
	})
})