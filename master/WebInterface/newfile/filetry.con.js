// app.controller("filetryctrl",function($scope,$resource,$state,$http,$location){
     



// //      $scope.uploadedFile = function(element) {
// //  $scope.$apply(function($scope) {
// //    $scope.files = element.files;         
// //  });
// // }


// // $scope.addFile = function() {
// //  UploadService.uploadfile($scope.files,
// //    function( msg ) // success
// //    {
// //     console.log('uploaded');
// //    },
// //    function( msg ) // error
// //    {
// //     console.log('error');
// //    });
// // }



// // $scope.uploadFiles = function () {

// //                 var request = {
// //                     method: 'POST',
// //                     url: '/api/fileupload/',
// //                     data: formdata,
// //                     headers: {
// //                         'Content-Type': undefined
// //                     }
// //                 };

//    app.directive('fileModel', ['$parse', function ($parse) {
//             return {
//                restrict: 'A',
//                link: function(scope, element, attrs) {
//                   var model = $parse(attrs.fileModel);
//                   var modelSetter = model.assign;
                  
//                   element.bind('change', function(){
//                      scope.$apply(function(){
//                         modelSetter(scope, element[0].files[0]);
//                      });
//                   });
//                }
//             };
//          }]);
      
//          app.service('fileUpload', ['$http', function ($http) {
//             this.uploadFileToUrl = function(file, uploadUrl){
//                var fd = new FormData();
//                fd.append('file', file);
            
//                $http.post(uploadUrl, fd, {
//                   transformRequest: angular.identity,
//                   headers: {'Content-Type': undefined}
//                })
            
//                .success(function(){
//                })
            
//                .error(function(){
//                });
//             }
//          }]);
//          app.controller('filetryctrl', ['$scope', 'fileUpload', function($scope, fileUpload){
//             $scope.uploadFile = function(){
//                var file = $scope.myFile;
               
//                console.log('file is ' );
//                console.dir(file);
               
//                var uploadUrl = "https://shielded-tor-32602.herokuapp.com/upload";
//                fileUpload.uploadFileToUrl(file, uploadUrl);
//             };
//          }]);
      
        
// // });