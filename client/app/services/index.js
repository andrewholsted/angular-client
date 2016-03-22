'use strict';

APP_MODULE.factory( 'API', [
  '$http',
  'config',
  function($http, config) {
    var apiHost = config.platformUrl;

    function getHttpConfig() {
      var httpConfig = {
        withCredentials: true,
        headers: {} 
      }

      return httpConfig;
    }

    return {

      get: function(path, params) {
        var httpConfig = getHttpConfig();

        if (params) {
          httpConfig.params = params;
        }

        return $http.get(apiHost + path, httpConfig);
      },

      post: function(path, body) {
        return $http.post(apiHost + path, body, getHttpConfig());
      },

      patch: function(path, body) {
        return $http.patch(apiHost + path, body, getHttpConfig());
      },

      delete: function(path) {
        return $http.delete(apiHost + path, getHttpConfig());
      }

    };
  }
]);
