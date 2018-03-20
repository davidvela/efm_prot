jQuery.sap.require("pdm_demo.util.Formatter");
var iDone; 
var iOpen; 
sap.ui.controller("pdm_demo.view.EQSp_Master", {
	onInit : function() {
		this.oUpdateFinishedDeferred = jQuery.Deferred();	
	},
	onBeforeShow : function(evt) {
		if (evt.data.context) {
			this.getView().setBindingContext(evt.data.context);
		} 
	},
	onRouteMatched : function(oEvent) {

		var oList = this.getView().byId("MasterList");
		var sName = oEvent.getParameter("name");

		var oArguments = oEvent.getParameter("arguments");

		// Wait for the list to be loaded once
		jQuery.when(this.oUpdateFinishedDeferred).then(
				jQuery.proxy(function() {
					var aItems;

					// On the empty hash select the first item
					if (sName === "main") {
						this.selectDetail();
					}

					// Try to select the item in the list
					if (sName === "product") {
						aItems = oList.getItems();
						for (var i = 0; i < aItems.length; i++) {
							if (aItems[i].getBindingContext().getPath() === "/"
								+ oArguments.product) {
								oList.setSelectedItem(aItems[i], true);
								break;
							}
						}
					}
				}, this));	
	},
	onNavButtonTap : function(evt) { 
		//var app = this.getView().app;
		//app.setBackgroundImage("./LocalFiles/slogo.PNG");
		// This is only relevant when running on phone devices
		sap.ui.core.UIComponent.getRouterFor(this).navTo("_Select");

	},
	selectDetail : function() {		

		if (!sap.ui.Device.system.phone) {
			var oList = this.getView().byId("list");
			var aItems = oList.getItems();

			if (aItems.length && !oList.getSelectedItem()) {
				oList.setSelectedItem(aItems[0], true);
				this.showDetail(aItems[0]);
			}
		}
	},
	onSelect : function(oEvent) {
		// Get the list item, either from the listItem parameter or from the
		// event's
		// source itself (will depend on the device-dependent mode).
		//this.showDetail(oEvent.getParameter("listItem") || oEvent.getSource());
		this.showDetail(oEvent.getSource().data("screen") || oEvent.getSource());

	},
	showDetail : function(oItem) {
		// If we're on a phone, include Nav. in history; if not, don't.
		var bReplace = jQuery.device.is.phone ? false : true;
		// Read the model and create the tree. 

		var oModelS = this.getView().getModel("EQGr"); 
		var oProp   = oModelS.getProperty("/");

		var oQGroups = oProp.questionnaires; 
		var oQuests  = oProp.questions; 

		//find my questionnaire. 
		var oQGroup = 0; 
		var oQGQuests; 
		for (var i = 0;  i < oQGroups.length; i++) {
			if (oQGroups[i].key == oItem )
			{	oQGroup = oQGroups[i]; break; }
		}
		//Get Questions
		if(oQGroup != 0)
		{
			var oQGQuests = {  questions : [ ]		};
				              
			for (var i = 0;  i < oQGroup.elements.length; i++) {
				for (var j = 0;  j < oQuests.length; j++) {

					if (oQGroup.elements[i].key == oQuests[j].id )
					{	oQGQuests.questions[i] = oQuests[j]; 
						break; }
				}			
			}
			if (oQGQuests.leght != 0)
			{
				var oModel = new sap.ui.model.json.JSONModel();
				oModel.setData(oQGQuests);
				sap.ui.getCore().byId("idEQSplitContainerControl").setModel(oModel,"EQQuest");
			}
		}

		sap.ui.core.UIComponent.getRouterFor(this).navTo("questionnaire", {
			from : "master",
			questionnaire : oItem, //oItem.getBindingContext().getPath().substr(1),
			//tab : "supplier"
		}, bReplace);

	},



});
