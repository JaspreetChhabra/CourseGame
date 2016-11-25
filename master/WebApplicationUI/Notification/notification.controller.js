app.controller('notificationCtrl', function ($scope, $localStorage,$resource,$state,$stateParams) {

    userID = localStorage.getItem("userID");
    console.log("dashboard " + userID);
    $scope.userid=userID;

    if(typeof($stateParams.cId) != 'undefined'){
        console.log($stateParams.cId);
        $scope.courseid = $stateParams.cId;
    }

    $scope.sendNotification = function(){

        console.log($scope.announcements);

        $scope.announcements1 = {};
        $scope.announcements1.title = $scope.announcements.name;
        $scope.announcements1.desc = $scope.announcements.desc;
        $scope.announcements1.courseId = $scope.announcements.courseId;
        $scope.announcements1.userId = $scope.announcements.userId;

        console.log("an" + $scope.announcements1);
        var a = $resource("https://shielded-tor-32602.herokuapp.com/announcements/insert");

        a.save($scope.announcements1,function(res){
           console.log(res);

           if(res.Status == false){
                   
               alert("Try Again");
           }else{
               alert("Notification Send");

               $state.go('dashboard');

           }
       });
        
    }
});



