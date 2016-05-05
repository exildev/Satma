angular.module('satma.controllers', [])
.controller('dashboard', function($scope, $http){
	map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 10.4259077, lng: -75.5443052},
        zoom: 14
    });
    
});