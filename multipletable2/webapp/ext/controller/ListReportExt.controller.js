sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onInit: function () {
            debugger
            // var onPageDataLoaded = function () {
            //     // Do whatever you want here
            //     debugger
            //     console.log("Testing")
            // }.bind(this);
        
            // // Attach page data loaded callback of extension API
            // this.base.templateBaseExtension.getExtensionAPI().attachPageDataLoaded(onPageDataLoaded());
            // this.onBeforeRebindTableExtension()
        },
        bindingPath: function(oEvent) {
            debugger
            MessageToast.show("Custom handler invoked.");
        },
        onBeforeRebindTableExtension:function(oEvent){
            debugger
            // this.getOwnerComponent().byId("idTableString")
            // oEvent.getSource().deactivateColumns(['OrderID'])
        },
        onRowSelectionChange:function(){
            debugger
        },
        routing:{
            onAfterNavigation: function(){
                debugger
            },
            onBeforeNavigation:function(){
                debugger
            }
        }
    };
});