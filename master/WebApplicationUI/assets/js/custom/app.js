var app=angular.module("myApp",['ui.router','ngResource','ngFileUpload','ngStorage']);
app.config(function($stateProvider, $urlRouterProvider,$resourceProvider) {
    
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'login/pages-login.html',
            controller:'loginctrl'
        })
        
        .state('register',{
        url: '/register',
        templateUrl: 'register/pages-register.html',
        controller: 'registerctrl'
    })

        .state('updateCourse', {
            url: '/updateCourse',
            templateUrl: 'course/updateCourse.html',
            controller: 'coursectrl',
             params: {
                courseId: null
            }
        })

        .state('course', {
            url: '/course',
            templateUrl: 'course/addCourse.html',
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
        .state('updateProfile',{
            url:'/updateProfile',
<<<<<<< HEAD
            templateUrl:'register/updateProfile',
            controller:'registerctrl'
=======
            templateUrl:'profile/updateProfile.html',
            controller:'updateProfile'
>>>>>>> ff65dc80da3c3d06d04f01de566ed5e513049bba
        })
        .state('addGame',{
        url: '/addGame',
        templateUrl: 'addGame/AddGame.html',
        controller: 'addGamectrl'
    })
        .state('updateGame',{
            url:'/updateGame',
            templateUrl:'addGame/updategame.html',
            controller:'updateGameCtrl'
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
            templateUrl: 'unit/addunit.html',
            controller:'unitctrl'
        })
        .state('updateUnit',{
            url:'/update',
            templateUrl:'unit/updateunit.html',
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
