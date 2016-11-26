app.controller("updateProfile",function($scope,$resource,$state,$http,$location,$stateParams,moment){



    if(typeof($stateParams.userId) != 'undefined'){
    console.log($stateParams.userId);
    userId = $stateParams.userId;
    $scope.userData = {};


    var a=$resource("https://shielded-tor-32602.herokuapp.com/users/getById/"+ userId);
    //var a=$resource("http://localhost:3030/games/getbyId/"+ gameId);
     a.get(function(res)
     { 

     // alert(JSON.stringify(res));
        console.log(res.Status);
                 console.log(res);
         $scope.faculty = res.Result;
         console.log("profileData" + $scope.faculty);


    });

}
     
     $scope.profile=function()
    {
        var user = $scope.faculty;
        //console.log(user);
    var a = $resource("https://shielded-tor-32602.herokuapp.com/users/update");
       a.save(user,function(res)
        {
            console.log(res);
            if(res.Status == false)
            {
                    
                alert("Username already exists.");
            }else
            {
                alert("Profile updated Successfully");

                $state.go('dashboard');
            }
        });
    }

    
    });