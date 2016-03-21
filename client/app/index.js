var APP_MODULE = angular.module('angular-client', [
	'ui.router',
	'ui.bootstrap',
	'templates-app',
	])
	.config(function() {
		
	})

	.run([
		'$rootScope',
		function($rootScope){

			function stateChangeStart(event, toState, toParams, fromState, fromParams){
			
			}

			function stateChangeSuccess(){

			}

			function stateChangeError(){

			}

			$rootScope.$on('$stateChangeStart', stateChangeStart);
			$rootScope.$on('$stateChangeSuccess', stateChangeSuccess);
			$rootScope.$on('$stateChangeError', stateChangeError);

		}
	]);