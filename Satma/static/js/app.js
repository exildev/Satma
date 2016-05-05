angular.module('satma',['ngRoute','satma.controllers'])

.config(
function($routeProvider, $locationProvider, $httpProvider){
	//$httpProvider.defaults.headers.common.Authorization = 'Token 1';
	$routeProvider.
	when('/dashboard', {
		templateUrl: '/dashboard/',
		controller: 'dashboard'
	})
	.when('/ventas',{
		templateUrl: 'ventas.html'
	})
	.when('/requisicion',{
		templateUrl: 'requisicion.html',
		controller:'RequisicionController'
	})
	.when('/inventario',{
		templateUrl:'inventario.html'
	})
	.when('/recetas',{
		templateUrl:'recetas.html'
	})
	.otherwise({
		redirectTo: '/dashboard'
	});
});