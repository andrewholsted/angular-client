var APP_MODULE = angular.module('angular-demo', [
	'ui.router',
	'templates-app',
	])

	.constant('Config', {
		debug: true
	})

	.config(function() {
		
	})

	.run([
		'$rootScope',
		'Util',
		function($rootScope, Util){

			function stateChangeStart(event, toState, toParams, fromState, fromParams)
			
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