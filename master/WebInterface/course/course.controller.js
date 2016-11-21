app.controller("coursectrl",function($scope,$resource,$state,$http,$location,$window){
   
     
     $scope.addcourse=function()
    {

       
      
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
    