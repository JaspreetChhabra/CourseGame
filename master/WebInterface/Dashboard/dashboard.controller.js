app.controller("dashboardctrl",function($scope,$resource,$state,$http,$location){
   
       
    $scope.submit=function()
    {

        $scope.user = { "username" : "bjscdb", "password" : "25"};
        var a=$resource("https://shielded-tor-32602.herokuapp.com/users/register");

            a.save($scope.user,function(res){
            console.log(res);

         //$state.go('home');

        // console.log("hbkdj");
        // var user = $scope.faculty;

        // var a=$resource("localhost:3000/users");
        // a.get(function(res){
        //     console.log(res);
        // });
        //$scope.user = { "username" : "bjscdb", "password" : "25"};
        // var a=$resource("localhost:3000/users/register");


        
        
            //$location.path('/registration/registration.html');
        });

    }
    });