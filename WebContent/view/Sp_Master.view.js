sap.ui.jsview("pdm_demo.view.Sp_Master", {

	getControllerName : function() {
		return "pdm_demo.view.Sp_Master";
	},	
	onBeforeShow : function(evt) {
		if (evt.data.context) {
			this.getView().setBindingContext(evt.data.context);
		} 
	},
	createContent : function (oController) {
		// Create a Questionnaire_List
		var screen_list = new sap.m.List("MasterList" ,  {
			inset : true,
			type : sap.m.ListType.DetailAndActive,
			//headerText : "Questionaire List"
		} );

		var itemTemplate = new sap.m.StandardListItem({
			title : "{screens>name}",
			//description : "id:{key} quantity:{quantity}",
			//icon : "{ProductPicURL}",
			iconInset : false,
			iconDensityAware : false,
			type : sap.m.ListType.Navigation,
			tap : [ oController.onSelect, oController, this ],
			customData : [
			              new sap.ui.core.CustomData({
			            	  key: "screen",
			            	  value: "{screens>name}" 
			              }), 
			              ],
		});
		screen_list.bindItems("screens>/elements", itemTemplate);
		var matId = "{material>/material}" ;

		//Footer
		var oFooter = new sap.m.OverflowToolbar({
			//height : "20px", // sap.ui.core.CSSSize
			design : sap.m.ToolbarDesign.Auto, // sap.m.ToolbarDesign, since 1.16.8
			tooltip : undefined, // sap.ui.core.TooltipBase

			content : [
			           new sap.m.Button({
			        	   text  : "",
			        	   icon  : "sap-icon://add",
			        	   //type  : sap.m.ButtonType.Back,
			        	   //visible: jQuery.device.is.phone,
			        	   press :  function() { alert("Here it will be possible to Add new screens")}
			           }),
			           new sap.m.Button({  text  : "",
			        	   icon  : "sap-icon://email",
			        	   press :  function() { sap.m.URLHelper.triggerEmail(
			        			   "david@vela.com", "Food Business", 
			        			   "Dear Sir/Madam " + '\r\n' +
			        			   "I would like to inform you ... " 
			        			   
			        	   );  }
			           }),
			           ], 
		})			

		//PAGE
		var oSearch = new sap.m.SearchField("idSearchMaster",{ 	placeholder : "Material Name", // string
			showMagnifier : true, // boolean
			showRefreshButton : false, // boolean, since 1.16
			showSearchButton : true, // boolean, since 1.23
			selectOnFocus : true, // boolean, since 1.20
			search : [oController.onSearch, oController ],
			liveChange : [ function(oEvent) {
				var control = oEvent.getSource();
			}, this ]
		})

		var page = new sap.m.Page("Sp_MasterViewId", {
			title :   "Recipe : {material>/material} ",
			//title : "Screens",
			showNavButton : true,
			navButtonTap : [ oController.onNavButtonTap, oController ],  
			content : [ oSearch, screen_list  ],
			footer :  oFooter 
		});

		page.addEventDelegate({
			onBeforeShow: [ oController.onBeforeShow, oController ] });

		return page;
	}	
});