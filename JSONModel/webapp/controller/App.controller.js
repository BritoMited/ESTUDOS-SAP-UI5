sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel"],(Controller, JSONModel)=>{
    "use strict"
    
    return Controller.extend("ui5.walkthrough.controller.App",{
        onInit(){
            const oModel = new JSONModel({
                recipient: {
                    name : "Brito Mited"
                }
            })

            this.getView().setModel( oModel ) 
        }
    })
})