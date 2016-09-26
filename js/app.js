/**
 * Created by Stainley Lebron on 9/25/2016.
 */
(function () {
    'use strict'
    angular.module('ShoppingListCheckOff',[])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var itemToBuy = this;

        itemToBuy.itemName = "";
        itemToBuy.itemQuantity = "";

        itemToBuy.addItem = function () {
            ShoppingListCheckOffService.addItem(itemToBuy.itemName, itemToBuy.itemQuantity);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var itemBought = this;

        itemBought.items = ShoppingListCheckOffService.getItems();
    }
    
    function ShoppingListCheckOffService() {
        var service = this;

        //List of shopping items
        var items = [];

        service.addItem = function (itemName, quantity) {
            var item = {
                name: itemName,
                quantity: quantity
            };
            items.push(item);
        };

        console.log(items);

        service.removeItem = function (itemIndex) {
            items.splice(itemIndex, 1);
        }

        service.getItems = function () {
            return items;
        }
    }


})();