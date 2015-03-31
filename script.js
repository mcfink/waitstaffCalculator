angular.module('waitstaffApp', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/', {
			templateUrl : 'welcome.html'
		})
		.when('/calculator', {
			templateUrl : 'new_meal_input.html',
			controller : 'tipController'
		})
		.when('/summary', {
			templateUrl : 'shift_summary.html',
			controller : 'summaryController'
		})
	}])
	.factory('TipService', function(){
		return{
			data: {
				meal_count: 0,
				tip_total: 0,
				average_tip: 0,
				tax_rate: 0,
				meal_price: 0,
				tip_percentage: 0,
				subtotal: 0,
				total: 0,
				tip: 0
			}
		}
	})
	.controller('summaryController', function($scope, TipService){
		$scope.meal_count = TipService.data.meal_count;
		$scope.average_tip = TipService.data.average_tip;
		$scope.tip_total = TipService.data.tip_total;

		$scope.reset = function(){
			TipService.data.meal_count = 0;
			TipService.data.tip_total = 0;
			TipService.data.average_tip = 0;
			this.update();
		}

		$scope.update = function(){
			$scope.meal_count = TipService.data.meal_count;
			$scope.average_tip = TipService.data.average_tip;
			$scope.tip_total = TipService.data.tip_total;
		}
	})
	.controller('tipController', function($scope, TipService){
		
		$scope.tax_rate = 0;
		$scope.meal_price = 0;
		$scope.tip_percentage = 0;
		$scope.subtotal = 0;
		$scope.total = 0;
		$scope.tip = 0;

		$scope.submit = function(){
			if($scope.tipForm.$valid){
				$scope.subtotal = $scope.meal_price * (1 + ($scope.tax_rate / 100));
				$scope.tip = $scope.subtotal * $scope.tip_percentage / 100;
				$scope.total = $scope.subtotal + $scope.tip;

				TipService.data.tip_total += $scope.tip;
				TipService.data.meal_count++;
				TipService.data.average_tip = (TipService.data.tip_total / TipService.data.meal_count);
			}
		}

		$scope.cancel = function(){
			$scope.meal_price = null;
			$scope.tax_rate = null;
			$scope.tip_percentage = null;
		}

		
	});