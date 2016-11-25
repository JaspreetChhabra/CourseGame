app.controller("updateGameCtrl",function($scope,$resource,$state,$http,$stateParams,moment){



if(typeof($stateParams.gameId) != 'undefined'){
    console.log($stateParams.gameId);
    gameId = $stateParams.gameId;
    $scope.gameData = {};


    var a=$resource("https://shielded-tor-32602.herokuapp.com/games/getById/"+ gameId);
    //var a=$resource("http://localhost:3030/games/getbyId/"+ gameId);
     a.get(function(res)
     { 

     // alert(JSON.stringify(res));
        console.log(res.Status);
                 console.log(res);
         $scope.game = res.Result;
         console.log("game" + $scope.game);

         var formatDate= $scope.game.startTime;
         //$scope.game.startTime= formatDate | date: "yyyy-MM-dd";

      
         //var formatDate1= $scope.game.startTime;
         //$scope.game.endTime = moment(formatDate).format('DD/MM/YYYY');
    });

}

 $scope.updateValue=function()
    {
    
        var games = $scope.game;
        alert(JSON.stringify(games));


       var a = $resource("https://shielded-tor-32602.herokuapp.com/games/update");

       a.save(games,function(res){
           console.log(res.Status);

           if(res.Status == false){
                   
               alert("Updation Failed");
           }else{
               alert("Game Updated Successfully");

               $state.go('viewCourse');

           }
       });
      
    }
   
  // var a=$resource("http://shielded-tor-32602.herokuapp.com/games");
  //       a.get(function(res){
  //           console.log(res);
  //           // $scope.game = {};

  //           $scope.up = res.Result;
  //           console.log($scope.up);


            // console.log(res.Result[0].title);

        // });

  //    var a=$resource("https://shielded-tor-32602.herokuapp.com/courses/tags");
  //            a.get(function(res)
  //            {
  //                console.log(res);
  //                $scope.tags = res.Result;

  //                console.log($scope.tags);
  //           });
        

// var a=$resource("https://shielded-tor-32602.herokuapp.com/courses/tags");
//              a.get(function(res)
//              {
//                  console.log(res);
//                  $scope.tags = res.Result;

//                  console.log($scope.tags);
//             });
        

  
   // $scope.updateGame=function()
   //  {

   //      alert("hello");
   //  }
   //    //  $state.go('updateGame');

    //     var games = $scope.game;
    //     console.log(games);

    //     //$scope.user = { "username" : "bjscdb", "password" : "25"};
    //     //var a=$resource("https://shielded-tor-32602.herokuapp.com/users/login")   
    //     //var a=$resource("localhost:/games/insert");
    //     var a=$resource("https://shielded-tor-32602.herokuapp.com/games/insert");
       
    //     a.save($scope.game,function(res){
    //         console.log(res.Status);

    //         if(res.Status == false){
                    
    //             alert("Please Enter valid");
    //         }else{
    //             alert("Successful");

    //             $state.go('dashboard');

    //         }
    //     }); 

});