// var items = [
// 	  {
// 		  name: 'rotten log'
// 		, price: 12.99
// 	  }
// 	, {
// 		  name: 'single chipped brick'
// 		, price: 45
// 	  }
// 	, {
// 		  name: 'left shoe, size 15'
// 		, price: 25
// 	  }
// ];

angular.module('myEmporium')
.controller('inventoryCtrl', function( $scope ){
	$scope.test = "I'm Alive!";

	$scope.items = [
		  {
			  name: 'rotten log'
			, price: 12.99
		  }
		, {
			  name: 'single chipped brick'
			, price: 45
		  }
		, {
			  name: 'left shoe, size 15'
			, price: 25
		  }
	];

	$scope.addItem = function() {
		$scope.items.push({name: $scope.newItem.name, price: $scope.newItem.price});
		$scope.newItem.price = null;
		$scope.newItem.name = '';
	}

	$scope.removeItem = function( itemIndex ) {
		$scope.items.splice(itemIndex, 1);
	}

	$scope.hiddenItem = '';
	// $scope.hideItem = function( item ){
	// 	$scope.hiddenItem = item;
	// }
});
