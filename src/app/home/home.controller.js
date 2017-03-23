(function() {
    "use strict";
    angular
        .module('foodieApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['vendorService', '$log', '$location'];

    function HomeController(vendorService, $log, $location) {
        var vm = this;
        vm.vendors = [];
        vm.searchKeyword='';
        vm.orderList = "title";
        vm.setVendor = function(vendor) {
            vendorService.setClickedVendor(vendor);
            $log.debug(vendor);
            $location.path('/menuItem');
        }

        activate();

        function activate() {
            return getVendors().then(function() {
                $log.debug('Activated Vendors View');
            });
        }

        function getVendors() {
            return vendorService.getVendors()
                .then(function(data) {
                    vm.vendors = data;
                    return vm.vendors;
                });
        }
    }
})();
