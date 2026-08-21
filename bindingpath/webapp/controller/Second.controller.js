sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History"],(Controller, History)=>{
    "use strict"
    
    return Controller.extend("ui5.walkthrough.controller.Second",{

        onInit : function(){
            this._oRouter = sap.ui.core.UIComponent.getRouterFor(this)
            this._oRouter.getRoute("detail").attachPatternMatched(this._oRouterPatternMatched, this)
        },

        _oRouterPatternMatched : function(oEvent){
            var sPath = "/SweetShops/" + oEvent.getParameter("arguments").ID
            this.getView().bindElement(sPath)

        },

        onNavButtonPress : function(){

            var oHistory = History.getInstance()
            var sPreviousHash = oHistory.getPreviousHash()

            if(sPreviousHash != undefined){
                window.history.go(-1)
            }else{
                this._oRouter.navTo("master")
            }

        }
    })
})