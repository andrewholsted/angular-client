APP_MODULE
	.controller('IndexCtrl', [
		'$scope',
		'$state',
    'API',
		function ($scope, $state, API) {
      API.get('/').then(function(data){
        console.log('data', data);
      })
      .catch(function(err){
        console.log(err);
      })
		}
	]);