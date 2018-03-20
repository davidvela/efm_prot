sap.ui.controller("pdm_demo.view.EQSplitContainer", {
	onInit : function() {
		var oModelS = new sap.ui.model.json.JSONModel();
		oModelS.loadData("Model/EasyQ.json");
		this.getView().setModel(oModelS,"EQGr");	
	},
	onBeforeShow : function(evt) {
		if (evt.data.context) {
			this.getView().setBindingContext(evt.data.context);
		} 
	},

});


