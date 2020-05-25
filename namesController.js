var app = angular.module('myApp', [])

	app.controller('namesCtrl', function($scope) {
	    $scope.names = [
	  
	    {name:'PiBox Starterkit A',feature:'Raspberry Pi 4',price:'$175'},
	    {name:'PiBox Starterkit A',feature:'Mini-HDMI to HDMI Cable'},
	    {name:'PiBox Starterkit A',feature:'USB Type-C Power Adapter'},
	    {name:'PiBox Starterkit A',feature:'32GB San-disk w/ software installed'},
	    {name:'PiBox Starterkit A',feature:'5v Fan + 3 Heat sinks'}
  ];
  		$scope.namesB = [

  		 {name:'PiBox Starterkit B',feature:'Starterkit A', price:'$200'},
	    {name:'PiBox Starterkit B',feature:'Wired Keyboard + Mouse'},
	    {name:'PiBox Starterkit B',feature:'Debrid + Trakt Account'},
	    {name:'PiBox Starterkit B',feature:'Unlimited Youtube API'},
	    {name:'PiBox Starterkit B',feature:'Tech Support w/ Updates'}
  	];
  		
});