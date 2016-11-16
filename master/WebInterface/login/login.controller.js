

 app.controller("loginctrl",function($scope,$resource,$state,$http,$location){
   
       
    $scope.submit=function()
    {
        var user = $scope.user;
        var a=$resource("https://shielded-tor-32602.herokuapp.com/users/login");
        a.save($scope.user,function(res)
        {
           if(res.Status == false)
            {
                    
                alert("Please check username and password");
            }
            else
            {
                alert("Successful");
                $state.go('dashboard');
            }
        });
    }
    $scope.redirect = function(){

        $state.go('register');
    }

//     $scope.open = function () {

//     alert("hello");
//     console.log('opening pop up');
//     var modalInstance = $modal.open({
//     templateUrl: 'fileupload.html',
//     });
//     }
// });


// app.controller('PopupDemoCont', ['$scope','$modal',function ($scope, $modal) {


// }]);
});