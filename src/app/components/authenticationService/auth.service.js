(function() {
    "use strict";
    angular
        .module('foodieApp')
        .factory('AuthService', AuthService);

    AuthService.$inject = ['$log'];

    function AuthService($log) {
        var allowed = false;
        
        return {
            isAuthenticated: isAuthenticated,
            setAuthentication: setAuthentication
        };

        function isAuthenticated() {
            return allowed;
        }
        
        function setAuthentication(loginSuccess) {
            allowed = loginSuccess;
            $log.debug(allowed);
        }
    }
})();