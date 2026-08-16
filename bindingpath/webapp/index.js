sap.ui.define(["sap/ui/core/ComponentContainer", "ui5/walkthrough/Component", "sap/m/Shell"], (ComponentContainer, Component, Shell) => {
    "use strict"

    new Shell({
        app: new ComponentContainer({
            height: "100%",
            component: new Component({ id: "uiComponent" })
        })

    }).placeAt("content")
})