(function () {
    'use strict';

    var app = angular.module('app');

    app.controller("alertModalCtrl", [
      '$scope',
      '$modalInstance',
      'message',
      function ($scope, $modalInstance, message) {

          $scope.title = "Aviso";
          $scope.okButton = "Ok";

          $scope.message = message;

          $scope.ok = function () {
              $modalInstance.close(true);
          };

          $scope.cancel = function () {
              $modalInstance.dismiss('cancel');
          };
      }
    ]);

    app.factory('alertModalFactory', [
      '$modal',
      '$log',
      function ($modal, $log) {
          return {
              show: function (message, callback) {
                  var alertMessage = message;
                  callback = callback || function (o) { $log.info('Alert Modal result = ' + o); };

                  var modalInstance = $modal.open({
                      templateUrl: 'js/ng-module/alertModal.html',
                      controller: 'alertModalCtrl',
                      size: 200,
                      resolve: {
                          message: function () {
                              return alertMessage;
                          }
                      }
                  });

                  modalInstance.result.then(
                      callback,
                      callback);
              }
          };
      }
    ]);

})();