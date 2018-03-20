jQuery.sap.require("pdm_demo.util.Formatter");

sap.ui.controller("pdm_demo.view.EQSp_SMaster", {

	onInit : function() {
		this.oUpdateFinishedDeferred = jQuery.Deferred();
		
		//Questionnaire mapping
		var oView = this.getView();
		sap.ui.core.UIComponent.getRouterFor(this).attachRouteMatched(function(oEvent) {
			// when detail navigation occurs, update the binding context
			if (oEvent.getParameter("name") === "questionnaire") {

				//Try to map the information from the master... which binding? 
				this.sQGroup     = oEvent.getParameter("arguments").questionnaire;
				var sProductPath = "/" + this.sQGroup ;
				oView.bindElement(sProductPath);

			}
		}, this);
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
		sap.ui.core.UIComponent.getRouterFor(this).navTo("questionnaires");

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
		// If we're on a phone, include nav in history; if not, don't.
		var bReplace = jQuery.device.is.phone ? false : true;
		// Read the model. 

		sap.ui.core.UIComponent.getRouterFor(this).navTo("question", {
			from : "master",
			questionnaire : this.sQGroup,
			question : oItem, //oItem.getBindingContext().getPath().substr(1),
			//tab : "supplier"
		}, bReplace);

	},



});
