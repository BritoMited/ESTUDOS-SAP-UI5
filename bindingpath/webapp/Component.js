sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/core/mvc/XMLView"], (UIComponent, XMLView) => {
    "use strict";

    return UIComponent.extend("ui5.walkthrough.Component", {

        createContent: function () {
            UIComponent.prototype.createContent.apply(this, arguments)

            XMLView.create({
                viewName: "ui5.walkthrough.view.App"
            }).then(
                (oView) => {
                    oView.placeAt("content")
                }
            )
            return oView
        }
    });
}
);