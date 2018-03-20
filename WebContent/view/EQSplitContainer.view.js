sap.ui.jsview("pdm_demo.view.EQSplitContainer", {
	getControllerName : function() {
		return "pdm_demo.view.EQSplitContainer";
	},	
	onBeforeShow : function(evt) {
		if (evt.data.context) {
			this.getView().setBindingContext(evt.data.context);
		} 
	},
	createContent : function(oController) {   		
		var oSplitApp = new sap.m.SplitContainer("idEQSplitContainerControl", {});
		return oSplitApp; 
	}		
		
});