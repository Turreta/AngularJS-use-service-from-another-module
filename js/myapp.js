(function() {
    
    // An angular module
    angular.module('myapp.util',[]).factory('calc', [function(){
		return {
			add: function(a, b) {
				return a + b;
			},
			sub: function(a, b) {
				return a - b;
			},
			div: function(a, b) {
				return a / b;
			},
			mul: function(a, b) {
				return a * b;
			}
		};
	}])

    
    // Instantiate our main module and pass 'myapp.util' module
    var myapp = angular.module('myapp', ['myapp.util']);
    
    myapp.controller('mainController', ['$scope', 'calc', function($scope, calc) {
		
		$scope.a = 10;
		$scope.b = 14;
        
        var a = $scope.a;
        var b = $scope.b;
		
        $scope.sum = calc.add(a, b);
        $scope.diff = calc.sub(a, b);
        $scope.dividend = calc.div(a, b);
        $scope.product = calc.mul(a, b);
    }]);

})();
