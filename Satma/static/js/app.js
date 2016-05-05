angular.module('satma',['ngRoute','satma.controllers'])

.config(
function($routeProvider, $locationProvider, $httpProvider){
	//$httpProvider.defaults.headers.common.Authorization = 'Token 1';
	$routeProvider.
	when('/dashboard', {
		templateUrl: '/dashboard/',
		controller: 'dashboard'
	})
	.when('/configuracion',{
		templateUrl: '/configuracion/',
		controller: 'configuracion'
	})
	.when('/info/general',{
		templateUrl: '/info/general/',
		controller: 'infog'
	})
	.when('/redes',{
		templateUrl: '/redes/',
		controller: 'redes'
	})
	.when('/reportes',{
		templateUrl: '/reportes/',
		controller: 'reportes'
	})
	.when('/info/geo',{
		templateUrl: '/info/geo',
		controller: 'infogeo'
	})
	.when('/semaforo',{
		templateUrl: '/semaforo/',
		controller: 'semaforo'
	})
	.otherwise({
		redirectTo: '/dashboard'
	});
});