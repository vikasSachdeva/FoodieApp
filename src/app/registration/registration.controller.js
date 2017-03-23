(function() {
    "use strict";
    angular
        .module('foodieApp')
        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['vendorService', '$log', '$location', 'localStorageService', 'toastr'];

    function RegistrationController(vendorService, $log, $location, localStorageService, toastr) {
        var vm = this;
        vm.user ={};
        
        vm.submitRegForm = function() {
            $log.debug('regFormData: ',vm.user);
            localStorageService.set(vm.user.regUsername, vm.user);
            $log.debug('allLocalKeys: ',localStorageService.keys());
            toastr.info('User Registration Successfull !!');
            $location.path('/login');
        };
        
        vm.cancelRegistration = function() {
            $location.path('/login');
        };
    }
})();
