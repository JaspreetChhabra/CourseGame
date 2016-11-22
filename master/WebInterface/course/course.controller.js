app.controller("coursectrl",function($scope,$resource,$state,$http,$location,$window){
   
     
     $scope.addcourse=function()
    {

       var course = $scope.cs;
       console.log();
       
        var a = $resource("localhost:3030/courses/insert");

        a.save($scope.course,function(res){
            console.log(res.Status);

            if(res.Status == false){
                    
                alert("Course already Exists");
            }else{
                alert("New Course added Successfully");

                $state.go('dashboard');

            }
        });
      
    }
    

        

        $scope.IsVisible = false;
            $scope.ShowHide = function () {
                
                $scope.IsVisible = $scope.mscit;
                
            }
            console.log();
         $scope.IsVisible1 = false;
        $scope.ShowHide1 = function () {
                $scope.IsVisible1 = $scope.btech;
            }

             $scope.IsVisible2 = false;
        $scope.ShowHide2 = function () {
                $scope.IsVisible2 = $scope.mtech;
            }

               $scope.IsVisible3 = false;
        $scope.ShowHide3 = function () {
               
                $scope.IsVisible3 = $scope.mdes;
            }

});
    