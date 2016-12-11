app.controller("unitctrl",function($scope,$resource,$state,$http,$location){
   
     
     $scope.addUnit=function()
    {
        // var user = $scope.faculty;
        // console.log(user);

        //$scope.user = { "username" : "bjscdb", "password" : "25"};

        var unit = $scope.topics;
        alert(JSON.stringify(unit));

        var a=$resource("https://shielded-tor-32602.herokuapp.com/topics/insert");

        a.save(unit,function(res)
        {
            console.log(res);
            if(res.Status == false)
            {
                    
                alert("Unit already Exist");
            }else
            {
                alert("Unit Added Sucessfully");

                $state.go('dashboard');

            }
        });
    }

    });