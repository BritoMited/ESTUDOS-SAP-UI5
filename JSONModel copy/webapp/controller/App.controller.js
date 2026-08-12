sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel",
               "sap/ui/model/resource/ResourceModel", "sap/m/MessageToast"],(Controller, JSONModel, ResourceModel, MessageToast)=>{
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
        },
        
        onImagePress : function(oEvent){
            oEvent.getSource().getId().endsWith("image1") ? MessageToast.show("Imagem 1 foi pressionada") : MessageToast.show("Imagem 2 foi pressionada")
        }
    })
})