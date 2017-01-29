(function () {
'use strict';

angular.module('ShoppingListCheckoffApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyList = this;

  buyList.boughtItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    };

    buyList.getBuyItems = ShoppingListCheckOffService.getBuyItems();
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.getBoughtItems = ShoppingListCheckOffService.getBoughtItems();

}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var buyItems = [{item_quantity:'1 bag', item_name:'Cookies'}
                 ,{item_quantity:'2 loaves', item_name:'Bread'}
                 ,{item_quantity:'1 gallon', item_name:'Milk'}
                 ,{item_quantity:'2 bundles', item_name:'Bananas'}
                 ,{item_quantity:'1 bag', item_name:'Carrots'}];
  var boughtItems = [];

  service.buyItem = function (itemIndex) {
    boughtItems.push(buyItems[itemIndex]);
    buyItems.splice(itemIndex, 1);
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

  service.getBuyItems = function () {
    return buyItems;
  };

}

})();
