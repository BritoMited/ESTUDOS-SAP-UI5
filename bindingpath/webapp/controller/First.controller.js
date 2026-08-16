sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel",
               "sap/ui/model/resource/ResourceModel", "sap/m/MessageToast"],(Controller, JSONModel, ResourceModel, MessageToast)=>{
    "use strict"
    
    return Controller.extend("ui5.walkthrough.controller.First",{
        onInit(){
            const oModel = new JSONModel({
                firstName: "Brito",
                lastName: "Mited"
            })

            this.getView().byId("firstNameInput").setModel(oModel)
            this.getView().byId("lastNameInput").setModel(oModel)

            var OJsonModel = new JSONModel({
                CountSweets: 2,
                SweetShops: [
                    {
                        ID : 0,
                        Name : "doces do marcao",
                        Address : {
                            Street : "na esquina da outra lá",
                            City : "curitibia",
                            Country : "paranabrasil"
                        }
                    },
                    {
                        ID : 1,
                        Name : "concorrente dos doces do marcao",
                        Address : {
                            Street : "na esquina da li",
                            City : "curitibio",
                            Country : "paranaeua "
                        }
                    }
                ] 
            })

            //this.getView().setModel(OJsonModel) 
            sap.ui.getCore().setModel(OJsonModel) 
            this.getView().setModel(new ResourceModel({
                bundleName: "ui5.walkthrough.i18n.i18n"
            }), "i18n" )
        },
        
        onImagePress : function(oEvent){
            oEvent.getSource().getId().endsWith("image1") ? MessageToast.show("Imagem 1 foi pressionada") : MessageToast.show("Imagem 2 foi pressionada")
        },

        onListItemPress : function(oEvent){
            var oApp = this.getView().getParent().getParent().byId("app")
            var oDetailPage = this.getView().getParent().getParent().byId("detailPageId")

            var oContext = oEvent.getSource().getBindingContext()

            oDetailPage.setBindingContext(oContext)

            oApp.to(oDetailPage)
        }
    })
})