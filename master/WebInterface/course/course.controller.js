app.controller("coursectrl",function($scope,$resource,$state,$http,$location,$window){
   
     
     $scope.addcourse=function()
    {

        alert("hello");
      
    }
        

        $scope.IsVisible = false;
            $scope.ShowHide = function () {
                //If DIV is visible it will be hidden and vice versa.
                $scope.IsVisible = $scope.mscit;
                //$scope.IsVisible = $scope.btech;
            }
         $scope.IsVisible1 = false;
        $scope.ShowHide1 = function () {
                //If DIV is visible it will be hidden and vice versa.
                //$scope.IsVisible = $scope.mscit;
                $scope.IsVisible1 = $scope.btech;
            }

             $scope.IsVisible2 = false;
        $scope.ShowHide2 = function () {
                //If DIV is visible it will be hidden and vice versa.
                //$scope.IsVisible = $scope.mscit;
                $scope.IsVisible2 = $scope.mtech;
            }

               $scope.IsVisible3 = false;
        $scope.ShowHide3 = function () {
                //If DIV is visible it will be hidden and vice versa.
                //$scope.IsVisible = $scope.mscit;
                $scope.IsVisible3 = $scope.mdes;
            }

});
    