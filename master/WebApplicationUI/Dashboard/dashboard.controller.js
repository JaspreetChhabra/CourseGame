app.controller('dashboardctrl', function ($scope, $localStorage,$resource,$state) {

    $scope.addedCourses = {};
    $scope.announcements = "";

    userID = localStorage.getItem("userID");
    console.log("dashboard " + userID);
    $scope.userid=userID;
    //var a=$resource("https://shielded-tor-32602.herokuapp.com/courses/getByFaculty/userID");
    var a=$resource("https://shielded-tor-32602.herokuapp.com/courses/getByFaculty/"+userID);
     a.get(function(res)
     {
     console.log(res);

     if(res.Status == true){
        $scope.addedCourses = res.Result;
        $scope.courseFlag = 1;
        console.log($scope.addedCourses);
     }
     else{
        $scope.courseFlag = 0;
        $scope.addedCourses = "NO COURSE ADDED YET";
     }
     });

    $scope.showContent = function($fileContent){
        $scope.content = $fileContent;
    };

    $scope.viewCourse = function(courseID){
        console.log("coure ID " + courseID);

        $state.go('viewCourse', {obj : courseID})

    }

    $scope.addcourse = function(){
        $state.go('course');
    }

    $scope.updateCourse = function(courseID)
    {
        alert(courseID);

        $state.go('updateCourse' , {courseId : courseID})
    }

     $scope.updateProfile = function(userID)
    {
        

        $state.go('updateProfile' , {userId : userID})
    }

    $scope.sendNotification = function(courseID){

        console.log(courseID);

        //announcements/insert

        $state.go("notification", {cId : courseID});
    }
});




// app.controller("dashboardctrl",function($scope,$resource,$state,$http,$location){
   
       
//      $scope.uploadFile=function()
//      {

//      var file = $scope.myFile;
               
//                console.log('file is ' );
//                console.dir(file);
               
//                var uploadUrl = "/fileUpload";
//                fileUpload.uploadFileToUrl(file, uploadUrl);
//      }



//     });


// app.directive('fileModel', ['$parse', function ($parse) {
//     return {
//         restrict: 'A',
//         link: function(scope, element, attrs) {
//             var model = $parse(attrs.fileModel);
//             var modelSetter = model.assign;
            
//             element.bind('change', function(){
//                 scope.$apply(function(){
//                     modelSetter(scope, element[0].files[0]);
//                 });
//             });
//         }
//     };
// }]);


// app.service('fileUpload', ['$http', function ($http) {
//     this.uploadFileToUrl = function(file, uploadUrl){
//         var fd = new FormData();
//         fd.append('file', file);
//         $http.post(uploadUrl, fd, {
//             transformRequest: angular.identity,
//             headers: {'Content-Type': undefined}
//         })
//         .success(function(){
//         })
//         .error(function(){
//         });
//     }
// }]);

//  app.controller('dashboardctrl', ['$scope', 'fileUpload', function($scope, fileUpload,$resource,$state,$http,$location){
//             $scope.uploadFile = function(){
//                var file = $scope.myFile;
               
//                console.log('file is ' );
//                console.dir(file);
               
//                var uploadUrl = "/fileUpload";
//                fileUpload.uploadFileToUrl(file, uploadUrl);
//             };
//          }]);
        

//         app.directive('onReadFile', function ($parse) {
//     return {
//         restrict: 'A',
//         scope: false,
//         link: function(scope, element, attrs) {
//             var fn = $parse(attrs.onReadFile);
            
//             element.on('change', function(onChangeEvent) {
//                 var reader = new FileReader();
                
//                 reader.onload = function(onLoadEvent) {
//                     scope.$apply(function() {
//                         fn(scope, {$fileContent:onLoadEvent.target.result});
//                     });
//                 };

//                 reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
//             });
//         }
//     };
// });

