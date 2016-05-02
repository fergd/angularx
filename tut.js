(function(){
	var app = angular.module('gemStore', [ ]);

	app.controller('StoreController', function(){
		// must make the controller name capital
		this.product = gem;
		// product is a property of this controller
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: 'hoobly',
			canPurchase: false,
			soldOut: true
		}
	]
})