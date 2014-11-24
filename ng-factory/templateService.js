(function () {
    'use strict';

    var app = angular.module('app');

    app.factory('templateService', [
      'alertModalFactory',
      'confirmModalFactory',
      function (alertModalFactory, confirmModalFactory) {

          var validationSummaryTemplateUrl = "js/ng-module/validationSummary.html";
          var validationErrors = [];

          return {
              includes: {
                  validationSummary: validationSummaryTemplateUrl
              },
              error: {
                  setErrors: setValidationErrors,
                  addError: addValidationError,
                  clearErrors: clearValidationErrors,
                  getErrors: function () {
                      return validationErrors;
                  }
              },
              alert: alertModalFactory.show,
              confirm: confirmModalFactory.show
          };

          function setValidationErrors(listOfMessages) {
              validationErrors = listOfMessages;
          }

          function addValidationError(message) {
              validationErrors.push(message);
          }

          function clearValidationErrors() {
              validationErrors = [];
          }

      }
    ]);

})();