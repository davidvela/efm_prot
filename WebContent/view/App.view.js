//jQuery.sap.declare("sap.ui.pdm_demo.view.App");

sap.ui.jsview("pdm_demo.view.App", {
	//getControllerName : function() {
		//return "sap.ui.pdm_demo.view.App";
	//},

	createContent : function(oController) {
	        
		var oApp = new sap.m.App("idAppControl", {});
	
		// create page
		return oApp; 
		this.page = new sap.m.Page({
			title : "EFM Demo",
			showNavButton : true,
			//navButtonTap : [ oController.navButtonTap, oController ],      
			content: [   oApp         ] 	});

	}		
		
});