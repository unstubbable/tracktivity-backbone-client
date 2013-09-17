/*global define*/

define([
	'backbone.marionette',
	'templates',
	'leaflet'
], function (Marionette, JST, Leaflet) {
	'use strict';

	var View = Marionette.ItemView.extend({
		modelEvents: {
			'change': 'updateMap'
		},

		onRender: function() {
			var track = this.model.get('track');
			if (track) {
				var mapContainer = this.el;
				var map = Leaflet.map(mapContainer);
				map.fitBounds(track.latLngBounds);

				Leaflet.tileLayer('http://{s}.tile.cloudmade.com/{key}/{styleId}/256/{z}/{x}/{y}.png', {
					key: '6eac6d67cf3f4fa8a18bbf5bec747cdc',
					styleId: 70963,
				    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="http://cloudmade.com">CloudMade</a>',
				    maxZoom: 18,
				    detectRetina: true
				}).addTo(map);

				Leaflet.multiPolyline(track.sparseMultiPolyline, {color: '#0073E5', opacity: 0.8}).addTo(map);
			}
		},

		updateMap: function() {
			console.log('update map');
		}
	});

	return View;
});