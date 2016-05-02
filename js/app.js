(function(){
	var app = angular.module('resourcesSite', [ ]); 

	app.controller('ResourceController', function(){
		this.item = resourceItem;
	});

	var resourceItem = [
		{
			name: 	'JavaScript for Web Developers',
			type: 	'Book'
		},
		{
			name: 	'Muz.li',
			type: 	'Website'
		},
		{
			name: 	'The Web Ahead',
			type: 	'Podcast'
		}
	];


	app.controller('addController', function($scope) {
		$scope.addResource = function() {
	        resourceItem.push(
	        	{
	        		name: 	$scope.titleInput
	        	}
	        );
	        $scope.titleInput = "";
    	};
	});

})();