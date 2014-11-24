

(function() {
    'use strict';

    var module = angular.module('underscore', []);

    module.factory('_', [
        '$window',
        function($window) {
            return $window._;
        }
    ]);

})();