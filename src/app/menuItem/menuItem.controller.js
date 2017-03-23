(function() {
    "use strict";
    angular
        .module('foodieApp')
        .controller('MenuItemController', MenuItemController);

    MenuItemController.$inject = ['vendorService', '$log', '$location'];

    function MenuItemController(vendorService, $log, $location) {
        var vm = this;
        vm.vendor = {};
        vm.totalCost = 0;
        vm.vendor = vendorService.getClickedVendor();
        vm.calculateFinalCost = function() {
            var total = 0;
            angular.forEach(vm.vendor.menuItems, function(item) {
                if(item.quantity == null || item.quantity == undefined)
                    item.quantity = '';
                total += item.quantity * item.rate;
            })
            vm.vendor.totalCost = total;
        };
        vm.checkout = function(vendor) {
            vendorService.setClickedVendor(vendor);
            $log.debug('menuItems: ',vendor);
            $location.path('/confirmOrder');
        };
    }
})();
