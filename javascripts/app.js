(function() {

    var app = angular.module('curriculum', ['cv-sections']);

    // ----------- CV Controller
    app.controller('CurriculumCtrl', ['$http', '$log',
        function($http, $log) {

            var cv = this;
            cv.informations = {};

            $http.get('cv-data.json').
            success(function(data) {
                cv.informations = data;
            }).
            error(function(data, status, headers, config) {
                $log.error(status);
            });


        }
    ]);

})();