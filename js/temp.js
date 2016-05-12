
(function() {
    var app = angular.module('resourcesSite', []);

    app.controller('ResourceController', function($scope) {
        // TODO: continue to hook up filtering
        $scope.resourceType = [{
            id: 1,
            name: 'Book'
        }, {
            id: 2,
            name: 'Website'
        }, {
            id: 3,
            name: 'Podcast'
        }];

        $scope.items = [{
            name: 'JavaScript for Web Developers',
            // will be replaced by updated filter array
            type: 'Book',
            url: 'http://www.amazon.com/Professional-JavaScript-Developers-Nicholas-Zakas/dp/1118026691',
            date: new Date()
        }, {
            name: 'Muz.li',
            type: 'Website',
            url: 'http://muz.li',
            date: new Date()
        }, {
            name: 'The Web Ahead',
            type: 'Podcast',
            url: 'http://thewebahead.net',
            date: new Date()
        }];

        $scope.add = function() {
            $scope.items.push({
                name: $scope.titleInput,
                type: $scope.typeInput,
                url: $scope.urlInput,
                date: new Date()
            });
            // I know there must be a better way than this to clear the fields!
            $scope.titleInput = '';
            $scope.typeInput = '';
            $scope.urlInput = '';
        };

        $scope.remove = function(index) {
            $scope.items.splice(index, 1);
        };

        $scope.tabbed = function() {
            console.log("I'd rather be filtering");
        };
    });

})();
