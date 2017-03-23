(function() {
  'use strict';

  angular
    .module('foodieApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $state, AuthService) {
    $rootScope.$on("$stateChangeStart", function(event, toState){
      if (toState.authenticate && !AuthService.isAuthenticated()){
        $state.transitionTo("login");
        event.preventDefault(); 
      }
    });
    $log.debug('runBlock end');
  }

})();