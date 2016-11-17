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
        
        $urlRouterProvider.otherwise('/login');

        $resourceProvider.defaults.stripTrailingSlashes = false;
        
});

app.config(['$resourceProvider','$locationProvider', function($resourceProvider,$locationProvider) {
  // Don't strip trailing slashes from calculated URLs
  $resourceProvider.defaults.stripTrailingSlashes = false;
  $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
}]);