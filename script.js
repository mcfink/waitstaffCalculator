angular.module('waitstaffApp', [])
	.controller('tipController', function($scope){
		$scope.meal_count = 0;
		$scope.tip_total = 0;
		$scope.average_tip = 0;

		$scope.tax_rate = 0;
		$scope.meal_price = 0;
		$scope.tip_percentage = 0;
		$scope.subtotal = 0;
		$scope.total = 0;
		$scope.tip = 0;

		$scope.submit = function(){
			$scope.subtotal = $scope.meal_price * (1 + ($scope.tax_rate / 100));
			$scope.tip = $scope.subtotal * $scope.tip_percentage / 100;
			$scope.total = $scope.subtotal + $scope.tip;

			$scope.tip_total += $scope.tip;
			$scope.meal_count++;
			$scope.average_tip = ($scope.tip_total / $scope.meal_count);
		}

		$scope.cancel = function(){
			$scope.meal_price = null;
			$scope.tax_rate = null;
			$scope.tip_percentage = null;
		}

		$scope.reset = function(){
			this.cancel();


			$scope.subtotal = 0;
			$scope.tip = 0;
			$scope.total = 0;
			$scope.meal_count = 0;
			$scope.tip_total = 0;
			$scope.average_tip = 0;
		}
	});