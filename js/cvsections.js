(function() {
    var app = angular.module('cv-sections', []);

    // ------- cv-personalinfo DIRECTIVE
    app.directive('cvInfo', function() {
        return {
            restrict: 'E',
            templateUrl: 'cv-info.html'
        };
    });

    // ------- cv-summary DIRECTIVE
    app.directive('cvSummary', function() {
        return {
            restrict: 'E',
            templateUrl: 'cv-summary.html',
            controller: function() {
                this.toggle = false;

                this.show = function() {
                    this.toggle = true;
                    
                };

                this.hide = function() {
                    this.toggle = false;
                    
                };
            },
            controllerAs: 'summaryCtrl'
        };
    });

    // ------- cv-experiences DIRECTIVE
    app.directive('cvExperiences', function() {
        return {
            restrict: 'E',
            templateUrl: 'cv-experiences.html',
            controller: function() {
                this.toggle = false;

                this.show = function() {
                    this.toggle = true;
                    
                };

                this.hide = function() {
                    this.toggle = false;
                    
                };
            },
            controllerAs: 'experiencesCtrl'
        };
    });

    // ------- cv-projects DIRECTIVE
    app.directive('cvProjects', function() {
        return {
            restrict: 'E',
            templateUrl: 'cv-projects.html',
            controller: function() {
                this.toggle = false;

                this.show = function() {
                    this.toggle = true;
                    
                };

                this.hide = function() {
                    this.toggle = false;
                    
                };
            },
            controllerAs: 'projectsCtrl'
        };
    });

    // ------- cv-languages DIRECTIVE
    app.directive('cvLanguages', function() {
        return {
            restrict: 'E',
            templateUrl: 'cv-languages.html',
            controller: function() {
                this.toggle = false;

                this.show = function() {
                    this.toggle = true;
                    
                };

                this.hide = function() {
                    this.toggle = false;
                    
                };
            },
            controllerAs: 'languagesCtrl'
        };
    });

    // ------- cv-skills DIRECTIVE
    app.directive('cvSkills', function() {
        return {
            restrict: 'E',
            templateUrl: 'cv-skills.html',
            controller: function() {
                this.toggle = false;

                this.show = function() {
                    this.toggle = true;
                    
                };

                this.hide = function() {
                    this.toggle = false;
                    
                };
            },
            controllerAs: 'skillsCtrl'
        };
    });

    // ------- cv-education DIRECTIVE
    app.directive('cvEducation', function() {
        return {
            restrict: 'E',
            templateUrl: 'cv-education.html',
            controller: function() {
                this.toggle = false;

                this.show = function() {
                    this.toggle = true;
                    
                };

                this.hide = function() {
                    this.toggle = false;
                    
                };
            },
            controllerAs: 'educationCtrl'
        };
    });

    // ------- cv-certifications DIRECTIVE
    app.directive('cvCertifications', function() {
        return {
            restrict: 'E',
            templateUrl: 'cv-certifications.html',
            controller: function() {
                this.toggle = false;

                this.show = function() {
                    this.toggle = true;
                    
                };

                this.hide = function() {
                    this.toggle = false;
                    
                };
            },
            controllerAs: 'certificationsCtrl'
        };
    });

    // ------- cv-social-contacts DIRECTIVE
    app.directive('cvSocialContacts', function() {
        return {
            restrict: 'E',
            templateUrl: 'cv-social-contacts.html'
        };
    });

})();