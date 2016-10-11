angular.module('BlankApp')
	.controller('InventoryCtrl', function($scope,$http,$state,restUrl,$window,uid,$mdMedia,$mdDialog) {
		var inventoryCtrl = this;
		inventoryCtrl.inventory = {};
		refresh = function(){
			$http.get(restUrl+"api/"+uid+'/inventory')
				.success(function(data) {
					console.log(data);
					// check if data is empty
					if (data) {
						inventoryCtrl.inventory = data;

					}

				})
				.error(function(data) {
					// log error data
					console.log('Error: ' + data);
				});
		}
		refresh();
		inventoryCtrl.startAuction = function(p,ev) {
		    $mdDialog.show({
		      controller: 'startAuctionCtrl',
			  locals: {
	           items: p
	          },
		      templateUrl: 'inventory/view/startAuction.html',
		      parent: angular.element(document.body),
		      targetEvent: ev,
		      clickOutsideToClose:true,

		    })
		    .then(function(item) {
				$http.put(restUrl+'api/inventory/'+item.id+"?balance="+item.balance)
					.success(function(data) {
						console.log(data);
						// check if data is empty
						if (data.status = 1) {
							inventoryCtrl.inventory = data;
							refresh();

						}

					})
					.error(function(data) {
						// log error data
						console.log('Error: ' + data);
					});

		    }, function() {
		      console.log('You cancelled the dialog.');
		    });
		    $scope.$watch(function() {
		      return $mdMedia('xs') || $mdMedia('sm');
		    }, function(wantsFullScreen) {
		      $scope.customFullscreen = (wantsFullScreen === true);
		    });
		  };

	});
angular.module('BlankApp')
	.controller('startAuctionCtrl', function($scope,$http,$state,restUrl,$window,$mdDialog,items) {
		var startAuctionCtrl = this;
		$scope.inven = items;
		console.log($scope.inven);

		$scope.close = function(){
			$mdDialog.cancel();
		}
		$scope.aucting = function(item){

			$http.post(restUrl+'api/auction?invenid='+items.id+'&qty='+item.quantity+'&minbid='+item.minbid)
				.success(function(data) {
					console.log(data);
					// check if data is empty
					if (data.status == 1) {
						var result = {
							balance:(parseInt($scope.inven.inven_quantity) - parseInt(item.quantity)),
							id:items.id
						}
						$mdDialog.hide(result);

					}
					else{
						console.log("failed");
					}

				})
				.error(function(data) {
					// log error data
					console.log('Error: ' + data);
				});

		}



	});
