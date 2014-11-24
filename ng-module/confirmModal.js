

(function() {
    'use strict';

    var app = angular.module('app');

    app.controller("confirmModalCtrl", [
        '$scope',
        '$modalInstance',
        'message',
        function($scope, $modalInstance, message) {
            
            $scope.title = "Confirmação";
            $scope.trueButton = "Sim";
            $scope.falseButton = "Não";

            $scope.message = message;

            $scope.ok = function () {
                $modalInstance.close(true);
            };

            $scope.cancel = function () {
                $modalInstance.close(false);
            };
        }
    ]);

    app.factory('confirmModalFactory', [
      '$modal',
      '$log',
      function ($modal, $log) {
          return {
              show: function (message, callback) {
                  var alertMessage = message;
                  var defaultCallback = function (result) { $log.info("Modal Result = " + result); }
                  callback = callback || defaultCallback;

                  var modalInstance = $modal.open({
                      templateUrl: 'js/ng-module/confirmModal.html',
                      controller: 'confirmModalCtrl',
                      size: 200,
                      resolve: {
                          message: function () {
                              return alertMessage;
                          }
                      }
                  });

                  modalInstance.result.then(callback, callback);
              }
          };
      }
    ]);

})();