sap.ui.jsview("pdm_demo.view.Sp_SubViews.Sp_SvGeoMap", {
	getControllerName: function() {
		return "pdm_demo.view.Sp_SubViews.Sp_SvGeoMap";
	},

	onBeforeShow : function(evt) {
		this.getController().onBeforeShow(evt);
	},

	createContent : function(controller) {
		
		// create page
		this.page = new sap.m.Page({
			title : "Geo Map",
			//showNavButton : true,
			//navButtonTap : [ controller.navButtonTap, controller ],      
			content: [         ] 
		});

		return this.page;
	}
});