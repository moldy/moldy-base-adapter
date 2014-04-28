var moldyAdapter = require( '../src' ),
	should = require( 'should' );

var noop = function () {};

describe( 'Given a moldy adapter,', function () {

	it( 'it should exist', function () {
		moldyAdapter.should.exist;
	} );

	it( 'it should have an extend method', function () {
		moldyAdapter.extend.should.exist;
	} );

	describe( 'and an instantation', function () {
		var adapter = moldyAdapter.extend( {
			find: noop,
			findOne: noop,
			save: noop,
			destroy: noop
		} );

		it( 'it should have a set method', function () {
			adapter.set.should.exist;
		} );

		it( 'it should have a setup method', function () {
			adapter.setup.should.exist;
		} );

		it( 'it should have a config method', function () {
			adapter.config.should.exist;
		} );

		it( 'when you want to set a property, should just call the set method', function () {
			adapter.set( 'test', true );
			adapter.config.test.should.equal.true;
		} );

		it( 'setup method should just return the adapte, this is done to meet the moldy middlware API', function () {
			( adapter === adapter.setup() ).should.be.true;
		} );
	} );

	describe( 'when we want to extend the adapter with a wrong API', function () {
		it( 'it should throw', function () {
			( function () {
				moldyAdapter.extend( {} );
			} ).should.
			throw ();
		} );
	} );
} );