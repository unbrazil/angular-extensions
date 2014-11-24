(function () {

    var app = angular.module('app', ['ui.bootstrap', 'ngResource', 'ui.utils.masks', 'ui.format', 'ext.resource']);

    app.controller('MainCtrl', [
      '$scope',
      'configFactory',
      'templateService',
      function ($scope, configFactory, templateService) {

          $scope.viewType = "table";
          $scope.config = configFactory.query();
          $scope.tpl = templateService;
      }
    ]);

    app.factory('configFactory', [
      '$resource',
      function ($resource) {
          return $resource('data/config.json', {}, {
              query: {
                  isArray: false
              }
          });
      }
    ]);

    app.factory('peopleService', [
      '$resource',
      function ($resource) {
          return $resource('data/people.json', {});
      }
    ]);

})();