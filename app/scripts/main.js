/*global require*/
'use strict';

require.config({
	paths: {
		jquery: '../bower_components/jquery/jquery',
		underscore: '../bower_components/underscore/underscore',
		backbone: '../bower_components/backbone/backbone',
		'backbone.marionette': '../bower_components/backbone.marionette/lib/core/amd/backbone.marionette',
		'backbone.wreqr' : '../bower_components/backbone.wreqr/lib/amd/backbone.wreqr',
		'backbone.babysitter' : '../bower_components/backbone.babysitter/lib/amd/backbone.babysitter',
		handlebars: '../bower_components/handlebars/handlebars.runtime',
		bootstrap: '../bower_components/sass-bootstrap/js',
		moment: '../bower_components/momentjs/moment'
	},
	shim: {
		jquery: {
			exports: '$'
		},
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		},
		'bootstrap/dropdown': {
			deps: ['jquery']
		},
		'bootstrap/collapse': {
			deps: ['jquery']
		},
		'bootstrap/transition': {
			deps: ['jquery']
		},
		handlebars: {
			exports: 'Handlebars'
		}
	}
});

require([
	'app',
	'handlebars',
	'moment',
	'bootstrap/dropdown',
	'bootstrap/collapse',
	'bootstrap/transition'
], function (App, Handlebars, moment) {

	App.start();

	// usage example: {{dateFormat creation_date format='MMMM YYYY'}}
	// 'format' is optional and defaults to 'MMM DD, YYYY hh:mm A'
	Handlebars.registerHelper('dateFormat', function(context, block) {
		var f = block.hash.format || 'MMM DD, YYYY hh:mm A';
		return moment(context).format(f);
	});

	// ouputs a relative date
	Handlebars.registerHelper('dateFromNow', function(context) {
		return moment(context).fromNow();
	});
});
