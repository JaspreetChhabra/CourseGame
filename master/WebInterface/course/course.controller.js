app.controller("coursectrl",function($scope,$resource,$state,$http,$location,$window,$localStorage,$filter){
$scope.programes = [ { 'pr': 'MSCIT', 'sem': [1,2] }, { 'pr': 'BTECH', 'sem': [1,2] }, { 'pr': 'ARD', 'sem': [1,2] }];





$scope.userTypes = [
    {
        "type": 'MSCIT',
        "name" : 'MSCIT',
        "options": [1,2]
    },
    {
        "type": 'BTECH',
        "name": 'BTECH',
        "options": [1,2]
    },
]

$scope.selectedpr = function () {
        $scope.progs = $filter('filter')($scope.userTypes, {checked: true});
        console.log($scope.progs);
}


  //cs. prog = [ { "pr" : "MSCIT","sem":[1,2]},{ "pr" : "Btecj","sem":[3,2]}],
 //console.log($scope.cs.tag);
          //$scope.cs={}
          //var course = $scope.cs.tag;
          //console.log(course);
        // var a = $resource("https://shielded-tor-32602.herokuapp.com/courses");
        var a=$resource("https://shielded-tor-32602.herokuapp.com/courses/tags");
             a.get(function(res)
             {
                 console.log(res);
                 $scope.tags = res.Result;

                 console.log($scope.tags);
            });
        

 $scope.addcourse=function()
    {
        var course = $scope.cs;
        console.log(course);

        console.log(course.prog);
        // var a = $resource("https://shielded-tor-32602.herokuapp.com/courses/insert");

        // a.save($scope.course,function(res){
        //     console.log(res.Status);

        //     if(res.Status == false){
                    
        //         alert("Course already Exists");
        //     }else{
        //         alert("New Course added Successfully");

        //        // $state.go('dashboard');

        //     }
        // });
      
    }
    
 // $scope.roles = [
 //    'MSCIT', 
 //    'BTECH', 
 //    'MTECH', 
 //    'MDES'
 //  ];
 //  $scope.cs = {
 //    roles: ['MSCIT']
 //  };
        

        $scope.IsVisible = false;
            $scope.ShowHide = function () {
                
                $scope.IsVisible = $scope.cs.prog.mscit;
                
            }
            console.log();
         $scope.IsVisible1 = false;
        $scope.ShowHide1 = function () {
                $scope.IsVisible1 = $scope.cs.prog.btech;
            }

             $scope.IsVisible2 = false;
        $scope.ShowHide2 = function () {
                $scope.IsVisible2 = $scope.mtech;
            }

               $scope.IsVisible3 = false;
        $scope.ShowHide3 = function () {
               
                $scope.IsVisible3 = $scope.mdes;
            }
            $scope.IsVisible4 = false;
            $scope.ShowHide4 = function () {
                
                $scope.IsVisible4 = $scope.cs.prog.mscit1;
                
            }

});
    