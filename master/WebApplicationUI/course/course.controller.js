
app.controller("coursectrl",function($scope,$resource,$state,$http,$location,$window,$localStorage,$filter,$stateParams){

<<<<<<< HEAD
alert("ms");

if(typeof($stateParams.obj) != 'undefined'){
    console.log($stateParams);

    $scope.data = {};

    var a=$resource("https://shielded-tor-32602.herokuapp.com/courses/getById/58088fd6fca646f0276e07c2");
=======
$scope.cs = {};
$scope.cs.userId = localStorage.getItem("userID");
$scope.userId = localStorage.getItem("userID");
console.log("course" + $scope.userId);
if(typeof($stateParams.obj) != 'undefined'){
    console.log($stateParams);
    courseID = $stateParams.obj;
    $scope.data = {};


    var a=$resource("https://shielded-tor-32602.herokuapp.com/courses/getById/" + courseID);
>>>>>>> 6d218f915741732dcac139f60e82ffcbcc781836
     a.get(function(res)
     {
         console.log("Courses data " + res.Status);
         $scope.course = res.course;
         $scope.topics = res.topics;
         $scope.games = res.games;
         $scope.materials = res.materials;
    });

}
else{
 console.log("hello");   
}




// $scope.userTypes = [
//     {
//         "type": 'MSCIT',
//         "name" : 'MSCIT',
//         "options": [1,2]
//     },
//     {
//         "type": 'BTECH',
//         "name": 'BTECH',
//         "options": [1,2]
//     },
// ]

// $scope.selectedpr = function () {
//         $scope.progs = $filter('filter')($scope.userTypes, {checked: true});
//         console.log($scope.progs);
// }


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
        console.log(JSON.stringify(course));



<<<<<<< HEAD
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
=======
        var a = $resource("https://shielded-tor-32602.herokuapp.com/courses/insert");

        a.save(course,function(res){
            console.log(res.Status);

            if(res.Status == false){
                    
                alert("Course already Exists");
            }else{
                alert("New Course added Successfully");

                $state.go('dashboard');

            }
        });
>>>>>>> 6d218f915741732dcac139f60e82ffcbcc781836
      
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
                
                $scope.IsVisible = $scope.cs.pr.MSCIT;
                
            }
            console.log();

         $scope.IsVisible1 = false;
        $scope.ShowHide1 = function () {
                $scope.IsVisible1 = $scope.cs.pr.BTECH;
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
    