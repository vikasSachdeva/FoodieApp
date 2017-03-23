(function() {
  'use strict';

  angular
    .module('foodieApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .state('registration', {
        url: '/registration',
        templateUrl: 'app/registration/registration.html',
        controller: 'RegistrationController',
        controllerAs: 'registration'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home',
        authenticate: true
      })
      .state('menuItem', {
        url: '/menuItem',
        templateUrl: 'app/menuItem/menuItem.html',
        controller: 'MenuItemController',
        controllerAs: 'menuItem',
        authenticate: true
      })
      .state('confirmOrder', {
        url: '/confirmOrder',
        templateUrl: 'app/confirmOrder/confirmOrder.html',
        controller: 'ConfirmOrderController',
        controllerAs: 'confirmOrder',
        authenticate: true
      });

    $urlRouterProvider.otherwise('/');
  }

})();
