var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, myService) {

  $scope.test = 'This is a test';


   $scope.getData = function() {
   	  $scope.quotes = myService.getData();
   }

 $scope.getData();


   $scope.addData = function() {
   	$scope.newQuote = myService.addData();
   }

  $scope.addData();

   $scope.removeData = function() {
   	 $scope.deleted = myService.removeData();
   }

   $scope.removeData();


  

});