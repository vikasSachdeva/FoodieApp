(function() {
  'use strict';

  angular
    .module('foodieApp')
    .directive('myNavbar', myNavbar);

  /** @ngInject */
  function myNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {}
    };

    return directive;
  }

})();
