var app = angular.module('myApp', [])
	app.controller('namesController', function($scope) {
		$scope.modelA = [
		{name:'PiBox Starter Kit A'},
		{includes: 'Raspberry Pi 4'},
		{includes: 'Mini-HDMI to HDMI Cable'},
		{includes: 'USB Type-C Power Adapter'},
		{includes: '32GB San-disk w/ software installed'},
		{includes: '5v Fan + 3 Heat sinks'}
		
		]
	
	});