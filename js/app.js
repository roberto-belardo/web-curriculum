(function() {

    var app = angular.module('cv', ['cv-sections']);

    // ----------- CV Controller
    app.controller('CurriculumCtrl', ['$http', '$log', '$filter',
        function($http, $log, $filter) {

            var cv = this;
            cv.informations = {};

            $http.get('cv-data.json').
            success(function(data) {
                cv.informations = data;

                var orderBy = $filter('orderBy');
                var orderedExperiences = [];

                orderedExperiences = orderBy(cv.informations.experiences, '-to_date');
                cv.position = orderedExperiences[0].job_position;
                cv.current_company_name = orderedExperiences[0].company.name;
                cv.current_company_url = orderedExperiences[0].company.url;
            }).
            error(function(data, status, headers, config) {
                $log.error(status);
            });
        }
    ]);

})();