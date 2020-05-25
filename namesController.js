var app = angular.module('myApp', [])

	app.controller('namesCtrl', function($scope) {
	    $scope.names = [
	  
	    {name:'PiBox Starterkit A',feature:'Raspberry Pi 4',price:'$175',imageUrl:'media/img/pi4-trans.jpg'},
	    {name:'PiBox Starterkit A',feature:'Mini-HDMI to HDMI Cable'},
	    {name:'PiBox Starterkit A',feature:'USB Type-C Power Adapter'},
	    {name:'PiBox Starterkit A',feature:'32GB San-disk w/ software installed'},
	    {name:'PiBox Starterkit A',feature:'5v Fan + 3 Heat sinks'}
  ];
  		$scope.namesB = [

  		 {name:'PiBox Starterkit B',feature:'Starterkit A', price:'$200', imageUrl:'media/img/pi-bundle3a.png'},
	    {name:'PiBox Starterkit B',feature:'Wired Keyboard + Mouse'},
	    {name:'PiBox Starterkit B',feature:'Debrid + Trakt Account'},
	    {name:'PiBox Starterkit B',feature:'Unlimited Youtube API'},
	    {name:'PiBox Starterkit B',feature:'Tech Support w/ Updates'}
  	];
  		$scope.namesC = [

  		 {name:'PiBox Starterkit C',feature:'Starterkit B', price:'$200', imageUrl:'media/img/pi-bundle4a.jpg'},
	    {name:'PiBox Starterkit C',feature:'Wireless SNES Remote Controller'},
	    {name:'PiBox Starterkit C',feature:'128GB Thumbdrive'},
	    {name:'PiBox Starterkit C',feature:'Dual 5v Fan'},
	    {name:'PiBox Starterkit C',feature:'100 Free Roms!'}
  	];
  	
  	$scope.showCase = [
  		{name:'Raspberry Pi 4',description:'Completely upgraded, re-engineered Faster, more powerful',imageUrl:'media/img/intro-pi2.jpg'},
  		{name:'Redesigned Kodi Media Center',description:'Watch Live TV, Movies, Anime and more more!',imageUrl:'media/img/movie-night3.jpeg'},
  		{name:'Versatile Cheap Powerful',description:'Gaming, Browsing, LIVE TV all supported!',imageUrl:'media/img/gaming-pc.jpeg'}
  	];
  	
});