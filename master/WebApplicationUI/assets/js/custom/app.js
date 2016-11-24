var app=angular.module("myApp",['ui.router','ngResource','ngFileUpload','ngStorage']);
app.config(function($stateProvider, $urlRouterProvider,$resourceProvider) {
    
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'login/pages-login.html',
            controller:'loginctrl'
        })
        
        .state('register',{
<<<<<<< HEAD
        url: '/registration',
        templateUrl: 'register/pages-register.html',
=======
        url: '/register',
        templateUrl: 'course/pages-register.html',
>>>>>>> 6d218f915741732dcac139f60e82ffcbcc781836
        controller: 'registerctrl'
    })

        .state('course', {
            url: '/course',
            templateUrl: 'components-forms.html',
            controller: 'coursectrl'
        })

        .state('viewCourse', {
            url: '/viewCourse',
            templateUrl: 'course/viewCourse.html',
            controller: 'coursectrl',
             params: {
                obj: null
            }
        })

        .state('addGame',{
        url: '/addGame',
        templateUrl: 'addGame/addGame.html',
        controller: 'addGamectrl'
    })
        .state('home', {
            url: '/home',
            templateUrl: 'login/homepage/pages/index.html',
            controller:'homectrl'
        })
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'Dashboard/index.html',
            controller:'dashboardctrl'
        })

        .state('upload', {
            url: '/upload',
            templateUrl: 'file/fileupload.html',
            controller:'fileUploadctrl'
        })
        .state('unit', {
            url: '/unit',
            templateUrl: 'unit/unit.html',
            controller:'unitctrl'
        })
        .state('material', {
            url: '/material',
            templateUrl: 'material/material.html',
            controller:'materialctrl'
        })
        .state('announcements', {
            url: '/announcements',
            templateUrl: 'announcements/announcements.html',
            controller:'announcementctrl'
        })

        
        
        $urlRouterProvider.otherwise('/login');

        $resourceProvider.defaults.stripTrailingSlashes = false;
        
});

app.config(['$resourceProvider', function($resourceProvider) {
  // Don't strip trailing slashes from calculated URLs
  $resourceProvider.defaults.stripTrailingSlashes = false;
}]);
