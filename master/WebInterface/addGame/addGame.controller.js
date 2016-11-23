

app.controller("addGamectrl",function($scope,$resource,$state,$http){
   
  var a=$resource("http://shielded-tor-32602.herokuapp.com/games");
        a.get(function(res){
            console.log(res);
            // $scope.game = {};
             console.log(res.Result[0].title);
        });

   $scope.submit=function()
    {
        var game = $scope.game;
        console.log($scope.game);

        //$scope.user = { "username" : "bjscdb", "password" : "25"};
        //var a=$resource("https://shielded-tor-32602.herokuapp.com/users/login")   
        var a=$resource("localhost:/games/insert");

        $scope.game1 = {

            title: "gwkwdjgvik",
              difLevel: null,
              points: null,
              startTime: null,
              endTime: null,
              maxAttempt: null,
              minScore: null,
              desc: "gwkwdjgvik",
              hintUrl: null,
              topicId: null
        }

        a.save($scope.game1,function(res){
            console.log(res.Status);

            if(res.Status == false){
                    
                alert("Please Enter valid");
            }else{
                alert("Successful");

                //$state.go('addGame');

            }
        });
    }    

});