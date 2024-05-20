sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {

        onInit: function () {
            // this.extensionAPI.attachPageDataLoaded(this.onPageDataLoaded.bind(this));
        },
        onPageDataLoaded: function(oEvent) {
            debugger
            // var quantity = oEvent.context.getObject().quantity;
            // var quantity = 0;
            // var oMsg = {
            //     message: quantity == 0 ? "Product Not Available!" : "Product Available!",
            //     type: quantity == 0 ? sap.ui.core.MessageType.Error : sap.ui.core.MessageType.Success
            // }
            // this.extensionAPI.setCustomMessage(oMsg);
        }   
    }
});