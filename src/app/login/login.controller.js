(function() {
    "use strict";
    angular
        .module('foodieApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['vendorService', '$log', '$location', 'localStorageService', 'toastr', 'AuthService'];

    function LoginController(vendorService, $log, $location, localStorageService, toastr, AuthService) {
        var vm = this;
        vm.user = {};
        vm.loginSuccess = '';
        vm.passwordCorrect = '';
        vm.usernameCorrect = '';
        vm.submitLoginForm = function() {
            var userData = {};
            $log.debug('loginFormData: ',vm.user);
            userData = localStorageService.get(vm.user.username);
            // if(userData != undefined){
            //     if(vm.user.username === userData.regUsername && vm.user.password === userData.regPassword){
            //         vm.loginSuccess = true;
            //         toastr.info('Authentication Successfull');
            //         $location.path('/home');
            //         AuthService.setAuthentication(vm.loginSuccess);
            //     }
            // }
            if(userData != undefined){
                if(vm.user.username === userData.regUsername){
                    vm.usernameCorrect = true;
                    if(vm.user.password !== userData.regPassword){
                        vm.passwordCorrect = false;
                    }
                    else if(vm.user.password === userData.regPassword){
                        vm.passwordCorrect = true;
                        vm.loginSuccess = true;
                        toastr.info('Authentication Successfull');
                        $location.path('/home');
                        AuthService.setAuthentication(vm.loginSuccess);
                    }
                }
                else if(vm.user.username !== userData.regUsername)
                    vm.usernameCorrect = false;
            }
            else{
                vm.usernameCorrect = false;
                vm.loginSuccess = false;
                AuthService.setAuthentication(vm.loginSuccess); 
            }           
        };
        vm.registrationClicked = function() {
            $location.path('/registration');
        }
    }
})();