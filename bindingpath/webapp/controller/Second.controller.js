sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel",
               "sap/ui/model/resource/ResourceModel", "sap/m/MessageToast"],(Controller, JSONModel, ResourceModel, MessageToast)=>{
    "use strict"
    
    return Controller.extend("ui5.walkthrough.controller.Second",{
        onNavButtonPress : function(oEvent){
            var oApp = this.getView().getParent().getParent().byId("app")
            oApp.back()
        }
    })
})