app.controller('fileUploadctrl',['Upload','$window',function(Upload,$window){
    var vm = this;
    vm.submit = function(){ //function to call on form submit

        console.log("called");
        if (vm.upload_form.file.$valid && vm.file) { //check if from is valid
            console.log("aaya");
            vm.upload(vm.file); //call upload function
        }
    }
    
    vm.upload = function (file) {
        console.log("called123");
        Upload.upload({
            url: 'https://shielded-tor-32602.herokuapp.com/upload', //webAPI exposed to upload the file
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

