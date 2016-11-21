var app=angular.module("myApp",['ui.router','ngResource']);
app.config(function($stateProvider, $urlRouterProvider,$resourceProvider) {
    
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'login/login.html',
            controller:'loginctrl'
        })
        .state('register',{
        url: '/registration',
        templateUrl: 'registration/registration.html',
        controller: 'registerctrl'
    })

        .state('course', {
            url: '/course',
            templateUrl: 'course/course.html',
            controller: 'coursectrl'
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
            templateUrl: 'Dashboard/dashboard.html',
            controller:'dashboardctrl'
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
