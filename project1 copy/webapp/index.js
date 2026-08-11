sap.ui.define(["sap/m/Text"], (Text)=>{
    "use strict"

    var oText = new Text("id1",{
        text: "sample control"
    })

    oText.placeAt("content")
});