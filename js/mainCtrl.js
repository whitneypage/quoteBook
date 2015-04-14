var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, myService) {


   $scope.getData = function() {
   	  $scope.quotes = myService.getData();
   }

 $scope.getData();


   $scope.addData = function() {
   	var newOne = {
   		text: $scope.text,
   		author: $scope.author
	}
   	$scope.newQuote = myService.addData(newOne);
   }

  $scope.addData();

   $scope.removeData = function() {
   	 $scope.deleted = myService.removeData($scope.text);
   }

   $scope.removeData();

   $scope.remove = function(quote) {
     myService.removeData(quote.text);
   }


  

});