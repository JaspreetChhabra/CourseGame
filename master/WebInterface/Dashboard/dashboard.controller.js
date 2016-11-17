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
        

    app.controller('dashboardctrl', function ($scope) {
    $scope.showContent = function($fileContent){
        $scope.content = $fileContent;
    };
  });

        app.directive('onReadFile', function ($parse) {
    return {
        restrict: 'A',
        scope: false,
        link: function(scope, element, attrs) {
            var fn = $parse(attrs.onReadFile);
            
            element.on('change', function(onChangeEvent) {
                var reader = new FileReader();
                
                reader.onload = function(onLoadEvent) {
                    scope.$apply(function() {
                        fn(scope, {$fileContent:onLoadEvent.target.result});
                    });
                };

                reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
            });
        }
    };
});

