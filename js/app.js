var app = angular
	.module('app',[
		'ui.router'
	])

	.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				controller: 'ScoreCtrl',
				templateUrl: 'templates/home.html'
			})

			.state('about', {
				url: '/about',
				templateUrl: 'templates/about.html'
			})

			.state('contacts', {
				url: '/contacts',
				templateUrl: 'templates/contacts.html'
			})

			.state('scores', {
				url: '/scores/:scoreId',
				controller: 'ScoreDetailCtrl',
				templateUrl: 'templates/scoreDetails.html'
			});
	}]);