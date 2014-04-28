!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.moldy=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
var baseAdapter = function () {
	this.config = {};
};

baseAdapter.prototype.set = function ( key, value ) {
	this.config[ key ] = value;
};

baseAdapter.prototype.setup = function () {
	return this;
};

module.exports = {
	extend: function ( adapter ) {

		if ( !adapter.find || !adapter.findOne || !adapter.save || !adapter.destroy ) {
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvZGVydmFscC9Ecm9wYm94L3NyYy9tb2xkeS9tb2xkeS1iYXNlLWFkYXB0ZXIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9kZXJ2YWxwL0Ryb3Bib3gvc3JjL21vbGR5L21vbGR5LWJhc2UtYWRhcHRlci9zcmMvZmFrZV82OWI0YzZjMC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgYmFzZUFkYXB0ZXIgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMuY29uZmlnID0ge307XG59O1xuXG5iYXNlQWRhcHRlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKCBrZXksIHZhbHVlICkge1xuXHR0aGlzLmNvbmZpZ1sga2V5IF0gPSB2YWx1ZTtcbn07XG5cbmJhc2VBZGFwdGVyLnByb3RvdHlwZS5zZXR1cCA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0ZXh0ZW5kOiBmdW5jdGlvbiAoIGFkYXB0ZXIgKSB7XG5cblx0XHRpZiAoICFhZGFwdGVyLmZpbmQgfHwgIWFkYXB0ZXIuZmluZE9uZSB8fCAhYWRhcHRlci5zYXZlIHx8ICFhZGFwdGVyLmRlc3Ryb3kgKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdJbnZhbGlkIEFkYXB0ZXInICk7XG5cdFx0fVxuXG5cdFx0Zm9yICggdmFyIGkgaW4gYWRhcHRlciApIHtcblx0XHRcdGlmICggYWRhcHRlci5oYXNPd25Qcm9wZXJ0eSggaSApICkge1xuXHRcdFx0XHRiYXNlQWRhcHRlci5wcm90b3R5cGVbIGkgXSA9IGFkYXB0ZXJbIGkgXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IGJhc2VBZGFwdGVyKCk7XG5cdH1cbn07Il19
(1)
});
