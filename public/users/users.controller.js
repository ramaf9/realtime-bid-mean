angular.module('BlankApp')
	.controller('UsersCtrl', function(uid,$scope,$state,$http,restUrl,$location,$window) {
		var usersCtrl = this;
		$scope.uid = '';
		$scope.coin = '';
		$scope.userRefresh = function(){
			$http.get(restUrl+'api/users/'+uid)
				.success(function(data) {
					console.log(data);
					// check if data is empty
					if (data) {
						$scope.uid = data.username;
						$scope.coin = data.coin;
					}

				})
				.error(function(data) {
					// log error data
					console.log('Error: ' + data);
				});
		}
		$scope.userRefresh();


		$scope.imagePath = 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png';
		usersCtrl.logoutPath = '/assets/logout.png';
		usersCtrl.logout = function(){
			delete $window.sessionStorage.token;
			window.location = "/";			
		}


		// Method for button login
		usersCtrl.debug = function(){
			// get http request from api/users
			$http.get(restUrl+'api/users/'+uid)
                .success(function(data) {
                    console.log(data);
					// check if data is empty
					if (!data) {
						// changing stateprovider to home
						$state.go('home');
					}



                })
                .error(function(data) {
					// log error data
                    console.log('Error: ' + data);
                });

		}


	});
