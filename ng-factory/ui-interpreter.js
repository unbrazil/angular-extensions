(function() {

    var app = angular.module('app');

    app.factory(
        'uiInterpreterService',
        [
            'templateService',
            '$location',
            '$anchorScroll',
            '$log',
            function (templateService, $location, $anchorScroll, $log) {
                var functions =
                {
                    "alertAndRedirect": alertAndRedirect,
                    "showValidation": showValidation,
                    "showException": showException,
                    "redirect": redirect
                };

                return {
                    /**
					  * Funcao para redirecionar a resposta para a devida ação de UI
					  */
                    parse: function(message) {
                        if (!message || !message.action || !message.action.type) return null;

                        if (message.exception) {
                            functions["showException"](message);
                            return null;
                        }

                        if (!functions[message.action.type]) {
                            $log.info(message.action.type + " does not exists for [uiInterpreterService]");
                            return null;
                        }

                        functions[message.action.type](message);

                        return message.isSuccess;
                    }
                };

                function alertAndRedirect(m) {
                    //TODO add support for array of strings on message variable
                    templateService.alert(
                        m.messages[0],
                        function() {
                            location.href = m.action.url;
                        });
                }

                function showValidation(m) {
                    if (m.isSuccess) return;

                    templateService.error.clearErrors();

                    for (var mKey in m.messages) {
                        templateService.error.addError(m.messages[mKey]);
                    }

                    $location.hash('validation');
                    $anchorScroll();
                }

                function showException(m) {
                    if (!m.exception) return;

                    templateService.alert(m.exception.message);
                }

                function redirect(m) {
                    if (!m.action.url) return;

                    $log.info('redirecting to ' + m.action.url);

                    location.href = m.action.url;
                }
            }
        ]);

})();