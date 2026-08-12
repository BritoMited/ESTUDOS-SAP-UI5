sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel",
               "sap/ui/model/resource/ResourceModel"],(Controller, JSONModel, ResourceModel)=>{
    "use strict"
    
    return Controller.extend("ui5.walkthrough.controller.App",{
        onInit(){
            const oModel = new JSONModel({
                recipient: {
                    name : "Brito Mited"
                }
            })

            this.getView().setModel( oModel ) 

            const resourceBundle = new ResourceModel({
                bundleName: "ui5.walkthrough.i18n.i18n"
            })

            this.getView().setModel(resourceBundle, "translatableText" )
        }
    })
})