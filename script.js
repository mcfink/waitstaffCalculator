angular.module('waitstaffApp', [])
	.controller('tipController', function($scope){
		var calculated_subtotal = 0;
		var calculated_tip = 0;
		var tax_rate = 0;
		var meal_price = 0;
		var tip_percentage = 0;
		var total = 0;
		var meal_count = 0;
		var tip_total = 0;
		var average_tip = 0;

		$scope.tax_rate = tax_rate;
		$scope.meal_price = meal_price;
		$scope.tip_percentage = tip_percentage;
		$scope.calculated_subtotal = calculated_subtotal;
		$scope.total = total;

		$scope.submit = function(){
			calculated_subtotal = $scope.meal_price * (1 + ($scope.tax_rate / 100));
			calculated_tip = calculated_subtotal * $scope.tip_percentage / 100;
			total = calculated_subtotal + calculated_tip;

			tip_total += calculated_tip;
			meal_count++;
			average_tip = (tip_total / meal_count);

			$scope.subtotal = calculated_subtotal;
			$scope.tip = calculated_tip;
			$scope.total = total;
			$scope.meal_count = meal_count;
			$scope.tip_total = tip_total;
			$scope.average_tip = average_tip;

		}

		$scope.cancel = function(){
			$scope.meal_price = null;
			$scope.tax_rate = null;
			$scope.tip_percentage = null;
		}

		$scope.reset = function(){
			this.cancel();
			calculated_subtotal = 0;
			calculated_tip = 0;
			total = 0;
			tip_total = 0;
			meal_count = 0;
			average_tip = 0;

			$scope.subtotal = calculated_subtotal;
			$scope.tip = calculated_tip;
			$scope.total = total;
			$scope.meal_count = meal_count;
			$scope.tip_total = tip_total;
			$scope.average_tip = average_tip;
		}
	});