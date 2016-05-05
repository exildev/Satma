angular.module('satma.controllers', [])
<<<<<<< HEAD
.controller('dashboard', function($scope, $http){
	map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 10.4259077, lng: -75.5443052},
        zoom: 14
    });
    
=======
.controller('dashboard', function($scope){
	$scope.hola = "Hola mundo";
})

.controller('configuracion', function($scope){
	$scope.hola = "Hola mundo";
})

.controller('infog', function($scope){
	$scope.hola = "Hola mundo";
})

.controller('redes', function($scope){
	$scope.hola = "Hola mundo";
})

.controller('reportes', function($scope){
	$scope.hola = "Hola mundo";
})

.controller('infogeo', function($scope){
	$scope.hola = "Hola mundo";
})

.controller('semaforo', function($scope){
	$scope.hola = "Hola mundo";
>>>>>>> 644607fd28683ebebc2f33dfc544c93f3a531564
});