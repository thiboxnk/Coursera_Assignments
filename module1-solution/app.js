(function () {
'use strict';

angular.module('LunchCheckApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "";
  $scope.itemStyleInput = "message";
  $scope.itemStyleMessage = "message";

  $scope.lunchCheck = function () {
    var totalItemCount = totalItems($scope.itemsInput);
    
    if (totalItemCount == 0){
      $scope.message  = 'Please enter data first';
      $scope.itemStyleInput = "inputFailure";
      $scope.itemStyleMessage = "messageFailure";
    }else if (totalItemCount <= 3) {
      $scope.message  = 'Enjoy!';
      $scope.itemStyleInput = "inputSuccess";
      $scope.itemStyleMessage = "messageSuccess";
    }else{
      $scope.message  = 'Too Much!';
      $scope.itemStyleInput = "inputSuccess";
      $scope.itemStyleMessage = "messageSuccess";
    }
  };

  function totalItems(itemString) {
    var numberOfItems = 0;
    if (itemString) {
      var itemArray = itemString.split(",");
      for (var i = 0; i < itemArray.length; i++){
        if (itemArray[i].trim().length > 0){
          numberOfItems += 1;
        }
      }
    }
    return numberOfItems;
  }

}

})();
