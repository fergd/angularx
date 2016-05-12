(function() {
	var app = angular.module('keeper', [ ]);

	app.controller('AddSourceController', function(){
		this.singleResource = {};

		this.addResource = function(singleResource) {
			singleResource.push(this.singleResource);
		};

		// this.addResource = function(resource) {
		// 	resource.resources.push(this.singleResource);
		// };


	// 	reviewCtrl = addCtrl
	// 	ReviewController = AddSourceController
	//	review = singleResource
	//	reviews = resources
	// 	addReview = addResource
	//	reviewCtrl = addCtrl
	// 	product = singleResource (?)

	});

	app.controller('ResourceController', function(){
		// resources is a property of controller set equal to item
		this.resources = items;
	});

	// resources
	var items = [
		{
			name: 'Muz.li',
			type: 'Website',
			url: 'http://muz.li',
			date: new Date()
		},
		{
			name: 'JavaScript for Web Developers',
			type: 'Book',
			url: 'http://www.amazon.com/Professional-JavaScript-Developers-Nicholas-Zakas/dp/1118026691',
			date: new Date()
		},
		{
            name: 'The Web Ahead',
            type: 'Podcast',
            url: 'http://thewebahead.net',
            date: new Date()
        }
	];
})();