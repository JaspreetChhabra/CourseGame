

app.controller("loginctrl",function($scope,$resource,$state,$http,$location,$localStorage){
    $scope.user = {};
   
   if(localStorage.getItem('password','username') != null)
    {
        $scope.user.password = localStorage.getItem('password');
        $scope.user.username = localStorage.getItem('username');
    }
    

    $scope.save = function(){


        if ($scope.check) {
                    // $window.alert("CheckBox is checked.");
                    localStorage.setItem('username', $scope.user.username);
            console.log("localStorage password = " + localStorage.username);
            localStorage.setItem('password', $scope.user.password);
            console.log("localStorage password= " + localStorage.password);

                }
                 else 
                 {
                    console.log("you nort checked checkbox");
                }
            }
    // $scope.try =function()
    // {
       
    //     $localStorage.message = $scope.username;
    //     console.log($scope.username);
    // }   
    $scope.submit=function()
    {
        var user = $scope.user;
        console.log($scope.user);

        //$scope.user = { "username" : "bjscdb", "password" : "25"};
        var a=$resource("https://shielded-tor-32602.herokuapp.com/users/login");

        a.save($scope.user,function(res){
            console.log(res.Status);

            if(res.Status == true){
                console.log("data " + res.LoggedUser._id);
                localStorage.setItem('userID', res.LoggedUser._id);
                localStorage.setItem('userName' , res.LoggedUser.firstName + " " + res.LoggedUser.lastName);
            }

            if(res.Status == false){
                    
                alert("Please check username and password");
            }else{
                
                alert("Successful");
                console.log(res);

                $state.go('dashboard');

            }
        });

        // var a=$resource("https://blooming-springs-95211.herokuapp.com/users");
        // a.get(function(res){
        //     console.log(res);
        // });
    }





    $scope.redirect = function(){

        $state.go('register');
    }

    //forgot Password users/web/forgotPass
    $scope.sendmail = function(userEmail){
        console.log(userEmail);

        var forgot = {"username" : userEmail};
        var a=$resource("http://localhost:3030/users/web/forgotPass");

        a.save(forgot,function(res){
            console.log(res.Status);

            // if(res.Status == true){
            //     console.log("data " + res.LoggedUser._id);
            //     localStorage.setItem('userID', res.LoggedUser._id);
            //     localStorage.setItem('userName' , res.LoggedUser.firstName + " " + res.LoggedUser.lastName);
            // }

            // if(res.Status == false){
                    
            //     alert("Please check username and password");
            // }else{
                
            //     alert("Successful");
            //     console.log(res);

            //     $state.go('dashboard');

            // }
        });


    }

  // $http.get("https://blooming-springs-95211.herokuapp.com/users/login").then(function (response) {
  //     $scope.myData = response.data;
      
  // });
    
//   $http.post("https://blooming-springs-95211.herokuapp.com/users/login", $scope.user, config)
//    .then(
//        function(response){
//          console.log(response.Status);
//        }, 
//        function(response){
//          console.log(response.Status);
//        } 
//     );
// }

        

    //     var uname = $scope.user.username;
    //     var password = $scope.user.password;
     
        
    //     if (uname == 'hardik' && password == '123') 
    //     {
    //             alert('match');
    //     }
    //     else
    //     {
    //         alert('not match');
    //     }
        
    
    //     alert(JSON.stringfy($scope.user));
    //     a=$resource("https://blooming-springs-95211.herokuapp.com/");
    //     a.query($scope.user,function(res)
        
    //     {











    //         // if(res.value == "s")
    //         // {
    //         //         $state.go("home");
    //         //     }
    //         // else
    //         //     {
                    
    //         //     }

    // })
//}
});