sap.ui.jsview("pdm_demo.view.EQSp_Master", {

	getControllerName : function() {
		return "pdm_demo.view.EQSp_Master";
	},	
	onBeforeShow : function(evt) {
		if (evt.data.context) {
			this.getView().setBindingContext(evt.data.context);
		} 
	},
	createContent : function (oController) {
		// Create a Questionnaire_List
		var screen_list = new sap.m.List("MasterlistEQ" ,  {
			inset : true,
			type : sap.m.ListType.DetailAndActive,
			//headerText : "Questionaire List"
		} );

		var itemTemplate = new sap.m.StandardListItem({
			title : "{EQGr>name}",
			description : "id:{EQGr>key} quantity:{EQGr>quantity}",
			//icon : "{ProductPicURL}",
			iconInset : false,
			iconDensityAware : false,
			type : sap.m.ListType.Navigation,
			tap : [ oController.onSelect, oController, this ],
			customData : [
			              new sap.ui.core.CustomData({
			            	  key: "screen",
			            	  value: "{EQGr>key}" 
			              }), 
			              ],
		});
		screen_list.bindItems("EQGr>/questionnaires", itemTemplate);

		//PAGE
		var page = new sap.m.Page("Sp_EQMasterViewId", {
			title :   "Recipes",
			//title : "Screens",
			showNavButton : true,
			navButtonTap : [ oController.onNavButtonTap, oController ],  
			content : [ screen_list  ],
		});

		page.addEventDelegate({
			onBeforeShow: [ oController.onBeforeShow, oController ] });

		return page;
	}	
});