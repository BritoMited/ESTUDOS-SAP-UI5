sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/core/mvc/XMLView",
    "sap/ui/model/json/JSONModel", "sap/ui/model/resource/ResourceModel"], (UIComponent, XMLView, JSONModel, ResourceModel) => {
        "use strict";

        return UIComponent.extend("ui5.walkthrough.Component", {

            "metadata": {
                "rootView": "ui5.walkthrough.view.App",
                "config": {
                    "serviceUrl": "model/defaultModel.json"
                },
                "routing": {
                    "config": {
                        "routerClass": "sap.m.routing.Router",
                        "type": "View",
                        "viewType": "XML",
                        "path": "ui5.walkthrough.view",
                        "controlId": "app",
                        "controlAggregation": "pages",
                        "transition": "slide",
                        "async": true
                    },
                    "routes": [{
                        "pattern": "",
                        "name": "master",
                        "target": "master"
                    },{
                        "pattern": "detail/{ID}",
                        "name": "detail",
                        "target": "detail"
                    }],
                    "targets": {
                        "master": {
                            "id": "master",
                            "name": "First",
                            "path": "ui5.walkthrough.view",
                            "level": 1
                        },
                        "detail": {
                            "id": "detail",
                            "name": "Second",
                            "path": "ui5.walkthrough.view",
                            "level": 2
                        }
                    }
                }

            },

            init: function(){
                UIComponent.prototype.init.apply(this, arguments)

                this.getRouter().initialize()
            },

            createContent: function () {
                var oView = UIComponent.prototype.createContent.apply(this, arguments)

                var sPath = this.getMetadata().getConfig().serviceUrl

                var oModel = new JSONModel(sPath)
                this.setModel(oModel)

                this.setModel(new ResourceModel({
                    bundleName: "ui5.walkthrough.i18n.i18n"
                }), "i18n")

                // XMLView.create({
                //     viewName: "ui5.walkthrough.view.App"
                // }).then(
                //     (oView) => {
                //         oView.placeAt("content")
                //     }
                // )

                oView.placeAt("content")

                return oView
            }
        });
    }
);