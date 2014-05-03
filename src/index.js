var baseAdapter = function () {
	this.config = {};
};

baseAdapter.prototype.set = function ( key, value ) {
	this.config[ key ] = value;
};

module.exports = {
	extend: function ( adapter ) {

		if ( !adapter.name || !adapter.create || !adapter.find || !adapter.findOne || !adapter.save || !adapter.destroy ) {
			throw new Error( 'Invalid Adapter' );
		}

		for ( var i in adapter ) {
			if ( adapter.hasOwnProperty( i ) ) {
				baseAdapter.prototype[ i ] = adapter[ i ];
			}
		}

		return new baseAdapter();
	}
};