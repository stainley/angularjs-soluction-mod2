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
        var list = this;

        list.items = ShoppingListCheckOffService.getShoppingListToBuy();

        list.addItem = function (itemIndex) {
            ShoppingListCheckOffService.addItem(itemIndex);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var list = this;
        list.items = ShoppingListCheckOffService.getShoppingListBought();
    }
    
    function ShoppingListCheckOffService() {
        var service = this;

        //List of shopping items
        var itemToBuy = [
            {name: "Cookies", quantity: 15},
            {name: "Milk", quantity: 13},
            {name: "Chocolate", quantity: 35}
        ];

        var itemBought = [];

        service.addItem = function (itemIndex) {
            itemBought.push(itemToBuy[itemIndex]);
            itemToBuy.splice(itemIndex, 1);
        };


        service.getShoppingListToBuy = function () {
            return itemToBuy;
        }

        service.getShoppingListBought = function () {
            return itemBought;
        }
    }


})();