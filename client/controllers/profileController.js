AnimalApp.controller('profileController', function ($scope, $location, $routeParams, $http, UserFactory) {

    UserFactory.isLoggedIn(function(user){
        if(user.id){
            // If logged in, populate form with user info
            $scope.user = user;
        }
        else{ $location.url('/'); }
    });

    // The following is if the user wants to update their password, they can show/hide their password
    $scope.showpass = 'show';
    $scope.showPassword = function(){

        if($scope.showpass == 'hide'){
            $scope.showpass = 'show';
            $('#user_password').attr('type', 'password');
        }else{
            $scope.showpass = 'hide';
            $('#user_password').attr('type', 'text');
        }
    }

    // Keep track of which fields are updating
    $scope.updateInfo = function(field){
        if(!$scope.updatedUser){ $scope.updatedUser = {}; }
        // Update property of temp user based on what changes
        $scope.updatedUser[field] = $scope.user[field];
    }
    // Checks if an object is empty so user can't submit updates without actually updating something
    $scope.isUpdated = function(user) {
        for(var key in user) {
            if (user.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }

    // Update user profile info
    $scope.updateProfile = function(){
        // SEND UPDATED INFO TO THE DB AND UPDATE IT THERE!
        $scope.updatedUser.userid = $scope.user.id;
        for(var field in $scope.updatedUser){ // Empty field check
            if($scope.updatedUser[field] == ''){
                return false;
            }
        }
        UserFactory.updateUser($scope.updatedUser);
        // after success show alert
        swal("Profile Updated!", "Your profile has been successfully updated!", "success");
        $scope.updatedUser = {};
    }
});
