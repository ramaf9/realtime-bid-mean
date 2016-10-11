angular.module('BlankApp')
	.controller('HomeCtrl', function($scope,$http,$state,restUrl,$window) {
		var HomeCtrl = this;

		// Method for button login
        HomeCtrl.login = function(username){
			// get http request for authenticate
            $http.get(restUrl+'authenticate/'+username)
                .success(function(data) {
                    console.log(data);
					// check if data contains username
                    if (data.username) {
						// save jwt to window/tab storage
						$window.sessionStorage.token = data.jwt;
	                    $state.go('user', {uid: data.username});
                    }

                })
                .error(function(data) {
					// delete current window/tab storage
					delete $window.sessionStorage.token;
					// log error data
                    console.log('Error: ' + data);
                });
				// set username input field to default
                $scope.user.name = '';

        }

	});
