app.controller("coursectrl",function($scope,$resource,$state,$http,$location,$window){
   
     
     $scope.addcourse=function()
    {

        alert("hello");
      
    }
        

        $scope.IsVisible = false;
            $scope.ShowHide = function () {
                //If DIV is visible it will be hidden and vice versa.
                $scope.IsVisible = $scope.mscit;
               // $scope.IsVisible = $scope.btech;
            }
        $scope.ShowHide1 = function () {
                //If DIV is visible it will be hidden and vice versa.
                //$scope.IsVisible = $scope.mscit;
                $scope.IsVisible = $scope.btech;
            }


});
    