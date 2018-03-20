jQuery.sap.require("pdm_demo.util.Formatter");

sap.ui.controller("pdm_demo.view.Sp_Master", {

	onInit : function() {
		this.oUpdateFinishedDeferred = jQuery.Deferred();

		var oModelS = new sap.ui.model.json.JSONModel();
		oModelS.loadData("Model/screens.json");
		this.getView().setModel(oModelS,"screens");

		var oModelM = sap.ui.getCore().getModel("material");
		if(oModelM)
			this.getView().setModel(oModelM, "material"); 		

		//When I finish loading the list of data: 
		this.oUpdateFinishedDeferred.resolve();

		/*this.getView().byId("MasterList").attachEventOnce("updateFinished",
				function() {
			this.oUpdateFinishedDeferred.resolve();
		}, this);*/

		//sap.ui.core.UIComponent.getRouterFor(this).attachRouteMatched( this.onRouteMatched, this);
	},

	onBeforeShow : function(evt) {
		if (evt.data.context) {
			this.getView().setBindingContext(evt.data.context);
		} 
	},


	onRouteMatched : function(oEvent) {

		//var oList = this.getView().byId("MasterList");
		var oList = sap.ui.getCore().byId("MasterList");

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
							if (//aItems[i].getBindingContext().getPath() === "/"
								//+ oArguments.product) {
									aItems[i].mProperties.title === oArguments.product) {
										
								oList.setSelectedItem(aItems[i], true);
								break;
							}
						}
					}
				}, this));	
	},


	onAddProduct : function() {
		//sap.ui.core.UIComponent.getRouterFor(this).navTo("productadd");
	},


	onSearch : function() {
		// add filter for search

		/*var priceTreshholdFilter = this.getView().byId("searchPriceTresholdComboBox").getSelectedKey();		

		var filters = [];
		var searchString = this.getView().byId("searchField").getValue();
		if (searchString && searchString.length > 0) {
			filters = [ new sap.ui.model.Filter("Name",
					sap.ui.model.FilterOperator.Contains, searchString) ];
		}

		if (priceTreshholdFilter && (priceTreshholdFilter =="1" || priceTreshholdFilter =="2")) {
			filters.push(new sap.ui.model.Filter("Price",
					(priceTreshholdFilter =="2" ? sap.ui.model.FilterOperator.GE : sap.ui.model.FilterOperator.LT), 20));
		}

		// update list binding
		this.getView().byId("list").getBinding("items").filter(filters); 
		 */

		// my code: 
		//var matId = evt.mParameters.query;
		var matId = this.getView().byId("idSearchMaster").getValue();
		var oMatModel = new sap.ui.model.json.JSONModel();	
		if (matId == "123456" || matId == "201207" ) {
			sap.ui.getCore().materialId = matId;

			oMatModel = new sap.ui.model.json.JSONModel();
			switch (matId) {
			case "123456":
				//oMatModel.setData(mat123456);
				oMatModel.loadData("Model/mat123456.json");    				
				break;
			case "201207":
				//oMatModel.setData(mat201207);
				oMatModel.loadData("Model/mat201207.json");
				break;
			default:
				break;
			}
			// update the model.
			//sap.ui.getCore().setModel(oMatModel, "material" );	
			sap.ui.getCore().byId("idAppControl").setModel(oMatModel,"material");
			sap.ui.getCore().byId("idSearchMaster").setValue("")

		} else {
			alert("Recipe not founded.");
		}

	},

	onNavButtonTap : function(evt) { 
		//var app = this.getView().app;
		//app.setBackgroundImage("./LocalFiles/slogo.PNG");
		// This is only relevant when running on phone devices
		sap.ui.core.UIComponent.getRouterFor(this).navTo("_Select");

	},
	selectDetail : function() {		

		if (!sap.ui.Device.system.phone) {
			//var oList = this.getView().byId("MasterList");
			var oList = sap.ui.getCore().byId("MasterList");
			var aItems = oList.getItems();

			if (aItems.length && !oList.getSelectedItem()) {
				oList.setSelectedItem(aItems[0], true);
				//this.showDetail(aItems[0]);
				this.showDetail("Header");
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
		/*
		 * all the same detail... 
		 * sap.ui.core.UIComponent.getRouterFor(this).navTo("product", {
			from : "master",
			product : oItem.getBindingContext().getPath().substr(1),
			tab : "supplier"
		}, bReplace);*/
		
		
		// Read the model. 
		/*sap.ui.core.UIComponent.getRouterFor(this).navTo(oItem , {
			from : "master" }, bReplace);*/
		
		var oModelS = this.getView().getModel("screens"); 
		var oProp   = oModelS.getProperty("/");
		var screens = oProp.elements; 

		//$.inArray(value, array)
		var i = screens.length;
		var returnObject;
		while (i--) {
			if (screens[i].name === oItem) {
				returnObject = screens[i].staticF; 
			}
		}
		
		//debugger;
		//if (oItem === "Sales") {
		if (returnObject) {
			sap.ui.core.UIComponent.getRouterFor(this).navTo(oItem , {
				from : "master" }, bReplace);
		}else {
			sap.ui.core.UIComponent.getRouterFor(this).navTo("product", {
				from : "master",
				product : oItem, //oItem.getBindingContext().getPath().substr(1),
				//tab : "supplier"
			}, bReplace);
		}

	},

// old code 

	listTap : function(evt) {
		var data = {};
		//data = evt.getSource().data;
		var screen = evt.getSource().data("screen");
		data.context = evt.getSource().getBindingContext();
		var oSplitApp = this.getView().app;

		switch(screen) {
		case "Header":
			oSplitApp.to("Header", data); 
			break;
		case "Material Scope":
			oSplitApp.to("Applications", data); 
			break;
		case "PDS":
			oSplitApp.to("FDS", data); 
			break;
		case "Recipe":
			oSplitApp.to("Recipe", data); 
			break;
		case "Geo Map":
			oSplitApp.to("geoMap", data); 
			break;
		default:
		}	
	},

	search: function(evt){

		var matId = evt.mParameters.query;
		var oMatModel = new sap.ui.model.json.JSONModel();	

		if (matId == "123456" || matId == "201207" ) {
			sap.ui.getCore().materialId = matId;

			oMatModel = new sap.ui.model.json.JSONModel();
			switch (matId) {
			case "123456":
				//oMatModel.setData(mat123456);
				oMatModel.loadData("Model/mat123456.json");    				
				break;
			case "201207":
				//oMatModel.setData(mat201207);
				oMatModel.loadData("Model/mat201207.json");
				break;
			default:
				break;
			}
			// update the model.
			//sap.ui.getCore().setModel(oMatModel, "material" );	
			sap.ui.getCore().byId("idAppControl").setModel(oMatModel,"material");
			sap.ui.getCore().byId("idSearchMaster").setValue("")

		} else {
			alert("Material not founded.");
		}

	}

});
