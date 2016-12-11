app.controller("unitupdatectrl",function($scope,$resource,$state,$http,$location,$stateParams,moment){
   


if(typeof($stateParams.topicId) != 'undefined'){
    console.log($stateParams.topicId);
    topicId = $stateParams.topicId;
    $scope.topicData = {};


    var a=$resource("https://shielded-tor-32602.herokuapp.com/topics/getById/"+ topicId);
    //var a=$resource("http://localhost:3030/games/getbyId/"+ gameId);
     a.get(function(res)
     { 

     // alert(JSON.stringify(res));
        console.log(res.Status);
                 console.log(res);
         $scope.topics = res.Result;
         console.log("data of unit" + $scope.topic);

         //var formatDate= $scope.game.startTime;
         //$scope.game.startTime= formatDate | date: "yyyy-MM-dd";

      
         //var formatDate1= $scope.game.startTime;
         //$scope.game.endTime = moment(formatDate).format('DD/MM/YYYY');

        // var units = $scope.topics;
    });

}

     
     $scope.unitUpdate=function()
    {
        var units = $scope.topics;
        //alert(JSON.stringify(units));

        //$scope.user = { "username" : "bjscdb", "password" : "25"};

        // var unit = $scope.topics;
        // alert(JSON.stringify(unit));

        var a=$resource("https://shielded-tor-32602.herokuapp.com/topics/update");

        a.save(units,function(res)
        {
            console.log(res);
            if(res.Status == false)
            {
                    
                alert("Unit already Exist");
            }else
            {
                alert("Unit updated Sucessfully");

                $state.go('viewCourse');

            }
        });
    }

    });