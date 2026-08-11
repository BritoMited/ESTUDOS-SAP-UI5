sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],(Controller, MessageToast)=>{
    "use strict";
    
    return Controller.extend("ui5.walkthrough.controller.App",{
        onShowHello : function (){
            MessageToast.show("O controller só é executado quando todos os modulos forem carregados")
        }
    })
})