

app.controller("addGamectrl",function($scope,$resource,$state,$http){
   
  var a=$resource("http://shielded-tor-32602.herokuapp.com/games");
        a.get(function(res){
            console.log(res);
            // $scope.game = {};

            $scope.up = res.Result;
            console.log($scope.up);

            // console.log(res.Result[0].title);
        });

     var a=$resource("https://shielded-tor-32602.herokuapp.com/courses/tags");
             a.get(function(res)
             {
                 console.log(res);
                 $scope.tags = res.Result;

                 console.log($scope.tags);
            });
        

// var a=$resource("https://shielded-tor-32602.herokuapp.com/courses/tags");
//              a.get(function(res)
//              {
//                  console.log(res);
//                  $scope.tags = res.Result;

//                  console.log($scope.tags);
//             });
        


   $scope.submit=function()
    {
        var games = $scope.game;
        console.log(games);

        //$scope.user = { "username" : "bjscdb", "password" : "25"};
        //var a=$resource("https://shielded-tor-32602.herokuapp.com/users/login")   
        //var a=$resource("localhost:/games/insert");
        var a=$resource("https://shielded-tor-32602.herokuapp.com/games/insert");
       
        a.save($scope.game,function(res){
            console.log(res.Status);

            if(res.Status == false){
                    
                alert("Please Enter valid");
            }else{
                alert("Successful");

                $state.go('dashboard');

            }
        });
    }    

});