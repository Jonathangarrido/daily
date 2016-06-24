'use strict';

(function () {

  config.$inject = ['$routeProvider'];
  function config($routeProvider){
    $routeProvider
      .when('/',{
        template: '<mi-home></mi-home>'
      });
  }

  angular
    .module('dailyApp', [
      'ngRoute',
      'miMenu',
      'miHome'
      ])
    .config(config);

})();