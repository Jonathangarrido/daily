'use strict';

(function () {

  config.$inject = ['$routeProvider','AnalyticsProvider'];
  function config($routeProvider,AnalyticsProvider){
    $routeProvider
      .when('/',{
        template: '<mi-home></mi-home>'
      })
      .when('/receta/:id',{
        template: '<mi-receta></mi-receta>'
      })
      .otherwise({
        redirectTo: '/'
      });

      // initial configuration
        AnalyticsProvider.setAccount('UA-46960782-1');

        // track all routes/states (or not)
        AnalyticsProvider.trackPages(true);
 
        // Use analytics.js instead of ga.js
        AnalyticsProvider.useAnalytics(true);

        AnalyticsProvider.trackPrefix('Parachuparselosdedos');

        // change page event name
        AnalyticsProvider.setPageEvent('$stateChangeSuccess');
        
    
  }

  Run.$inject = ['Analytics'];
  function Run(Analytics){
  }

  angular
    .module('dailyApp', [
      'ngRoute',
      'ngResource',
      'ngAnimate',
      'ngSanitize',
      'miMenu',
      'miHome',
      'miReceta',
      'apiService',
      'angular-google-analytics'
      ])
    .config(config)
    .run(Run);

})();