<<<<<<< HEAD
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
=======
angular.module('myEmporium')
.controller('inventoryCtrl', function( $scope ) {
>>>>>>> 8c946b14510d98bedf29be40fd85d2e1047074a5

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

<<<<<<< HEAD
	$scope.addItem = function() {
		$scope.items.push({name: $scope.newItem.name, price: $scope.newItem.price});
=======
	$scope.hideItem = function( name ) {
		$scope.hiddenItem = name;
	}

	$scope.addItem = function() {
		$scope.items.push({
			  name: $scope.newItem.name
			, price: $scope.newItem.price
		});
>>>>>>> 8c946b14510d98bedf29be40fd85d2e1047074a5
		$scope.newItem.price = null;
		$scope.newItem.name = '';
	}

	$scope.removeItem = function( itemIndex ) {
<<<<<<< HEAD
		$scope.items.splice(itemIndex, 1);
	}

	$scope.hiddenItem = '';
	// $scope.hideItem = function( item ){
	// 	$scope.hiddenItem = item;
	// }
});
=======
		$scope.items.splice( itemIndex, 1 );
	}

});
>>>>>>> 8c946b14510d98bedf29be40fd85d2e1047074a5
