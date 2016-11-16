app.controller("registerctrl",function($scope,$resource,$state,$http,$location){
   
     
     $scope.submit=function()
    {
        var user = $scope.faculty;
        console.log(user);

        //$scope.user = { "username" : "bjscdb", "password" : "25"};
        var a=$resource("https://shielded-tor-32602.herokuapp.com/users/register");

        a.save(user,function(res){
            console.log(res);

            if(res.Status == false){
                    
                alert("Please check username and password");
            }else{
                alert("Successful");

                $state.go('dashboard');

            }
        });
    }

    // $scope.submit=function()
    // {

    //     $scope.user = { "username" : "bjscdb", "password" : "25"};
    //     var a=$resource("https://shielded-tor-32602.herokuapp.com/users/register");


    //      $state.go('home');

    //     console.log("hbkdj");
    //     var user = $scope.faculty;

    //     var a=$resource("localhost:3000/users");
    //     a.get(function(res){
    //         console.log(res);
    //     });
    //     $scope.user = { "username" : "bjscdb", "password" : "25"};
    //     var a=$resource("localhost:3000/users/register");


    //     a.save($scope.user,function(res){
    //         console.log(res.Status);
        
    //         $location.path('/registration/registration.html');
    //     });

    // }
    });