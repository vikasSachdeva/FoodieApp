(function() {
    "use strict";
    angular
        .module('foodieApp')
        .factory('vendorService', vendorService);

    vendorService.$inject = ['$http', '$log'];

    function vendorService($http, $log) {
        var vendor = "";
        
        return {
            getVendors: getVendors,
            setClickedVendor: setClickedVendor,
            getClickedVendor: getClickedVendor
        };

        function getVendors() {
            return $http.get('app/vendors.json')
                .then(getVendorsComplete)
                .catch(getVendorsFailed);

            function getVendorsComplete(response) {
                return response.data;
            }

            function getVendorsFailed(error) {
                $log.error('XHR Failed for getVendors.' + error.data);
            }
        }
        
        function setClickedVendor(Vendor) {
            vendor = Vendor;
        }
        
        function getClickedVendor() {
            return vendor;
        }
    }
})();
    