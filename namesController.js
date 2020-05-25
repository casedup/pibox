var app = angular.module('myApp', [])

	app.controller('namesCtrl', function($scope) {
	    $scope.names = [
	    {feature:'Raspberry Pi 4'},
	    {feature:'Mini-HDMI to HDMI Cable'},
	    {feature:'USB Type-C Power Adapter'},
	    {feature:'32GB San-disk w/ software installed'},
	    {feature:'5v Fan + 3 Heat sinks'}
  ];
});