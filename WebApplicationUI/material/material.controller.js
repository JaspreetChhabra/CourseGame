app.controller('MyCtrl',['Upload','$window','$resource',function(Upload,$window,$resource){
    var vm = this;
    vm.submit = function(){
        alert("ok");
         //function to call on form submi
         var data = $resource('https://shielded-tor-32602.herokuapp.com/uploadMaterial');
        data.save({name: 'Sdaf', desc: 'wsdsddsd',topicId:'583863c31b6c3600118bcc60'},function(res){
                
                if (vm.upload_form.file.$valid && vm.file)
                 { //check if from is valid
                 vm.upload(vm.file,res.Material._id); //call upload function
                }
        });
    
    }
    
    vm.upload = function (file,url1) {
        Upload.upload({
            url: 'https://shielded-tor-32602.herokuapp.com/upload/'+url1, //webAPI exposed to upload the file
            data:{file:file} //pass file as data, should be user ng-model
        }).then(function (resp) { //upload function returns a promise
            if(resp.data.error_code === 0){ //validate success
                $window.alert('Success ' + resp.config.data.file.name + 'uploaded. Response: ');
            } else {
                $window.alert('an error occured');
            }
        }, function (resp) { //catch error
            console.log('Error status: ' + resp.status);
            $window.alert('Error status: ' + resp.status);
        }, function (evt) { 
            console.log(evt);
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            vm.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
        });
    };
}]);