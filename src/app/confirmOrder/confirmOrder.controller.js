(function() {
    "use strict";
    angular
        .module('foodieApp')
        .controller('ConfirmOrderController', ConfirmOrderController);

    ConfirmOrderController.$inject = ['vendorService', 'toastr'];

    function ConfirmOrderController(vendorService, toastr) {
        var vm = this;
        vm.vendor = {};
        vm.vendor = vendorService.getClickedVendor();
        
        vm.checkout = function(order) {
            toastr.info('Your order amounting to Rs '+ order.totalCost + ' is confirmed.');
        }
    }
})();