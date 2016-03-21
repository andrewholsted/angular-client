APP_MODULE
  .config([
    '$locationProvider',
    '$stateProvider',
    function($locationProvider, $stateProvider) {

      $locationProvider.html5Mode({
        enabled: true,
        base: false
      });

      $stateProvider
        .state('index', {
          url: '/',
          templateUrl: '/app/pages/index/index.html',
          controller: 'IndexCtrl'
        })
    }
  ]);