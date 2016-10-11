angular.module('BlankApp')
	.controller('AuctionCtrl', function($scope,$http,$state,restUrl,$window,$timeout) {
		var auctionCtrl = this;
		var time = 90;
		var extTime = 10;
		auctionCtrl.timeleft = 0;
		auctionCtrl.auctionStatus = false;

		refreshAuction = function(){
			$http.get(restUrl+'api/auction')
				.success(function(data) {
					console.log(data);
					// check if data is empty
					if (data) {
						auctionCtrl.auctionStatus = true;
						auctionCtrl.auction = data;
						var curTime = new Date().getTime();
						if (parseInt(data.auction_time_extended) > 0) {
							auctionCtrl.timeleft = (data.auction_time_extended-curTime)/1000;
							auctionCtrl.timeleft = extTime + Math.round(auctionCtrl.timeleft);
						}
						else{

							auctionCtrl.timeleft = (data.auction_time-curTime)/1000;
							auctionCtrl.timeleft = time + Math.round(auctionCtrl.timeleft);
						}

					}
					else{
						auctionCtrl.auctionStatus = false;
					}

				})
				.error(function(data) {
					// log error data
					console.log('Error: ' + data);
				});
		}
		refreshAuction();
		$scope.countDown = function(){
	        auctionCtrl.timeleft--;
			var cd = true;
			if (auctionCtrl.timeleft <= 0 && cd) {
				cd = false;
				$timeout.cancel(mytimeout);
				$http.put(restUrl+'api/auction?id='+auctionCtrl.auction.id+'&winbid='+auctionCtrl.auction.auction_max_bid+'&qty='+auctionCtrl.auction.auction_quantity+'&wid='+auctionCtrl.auction.auction_bidderid+'&oid='+auctionCtrl.auction.inven_owner+'&iid='+auctionCtrl.auction.inven_name)
					.success(function(data) {
						console.log(data);
						// check if data is empty
						// $scope.userRefresh();
						// refreshAuction();
						location.reload();


					})
					.error(function(data) {
						// log error data
						console.log('Error: ' + data);
					});

			}
			mytimeout = $timeout($scope.countDown,1000);
	    }
		var mytimeout = $timeout($scope.countDown,1000);

		auctionCtrl.placeBid = function(bid,uid){
			if (bid > auctionCtrl.auction.auction_max_bid) {
				var ext = 0;
				if (auctionCtrl.timeleft < 10) {
					ext = 1;
				}
				$http.put(restUrl+'api/auction/'+auctionCtrl.auction.id+'?uid='+uid+'&bid='+bid+'&ext='+ext+'')
					.success(function(data) {
						console.log(data);
						// check if data is empty
						// location.reload();
						refreshAuction();



					})
					.error(function(data) {
						// log error data
						console.log('Error: ' + data);
					});
					$scope.item.bid='';
			}
		}


	});
