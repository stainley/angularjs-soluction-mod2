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
            {name: "Milk Bottles", quantity: 13},
            {name: "Chocolates", quantity: 35},
            {name: "Fish", quantity: 3},
            {name: "Pizza", quantity: 2}
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