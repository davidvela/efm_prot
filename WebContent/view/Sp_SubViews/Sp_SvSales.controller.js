sap.ui.controller("pdm_demo.view.Sp_SubViews.Sp_SvSales", {
	onInit : function() {

		var oModel2 = new sap.ui.model.json.JSONModel();
		oModel2.loadData("Model/sales.json");
		this.getView().setModel(oModel2, "salesModel");

		//jsonModel.setData(oModel2);
		//oChart.setModel(jsonModel);
		//sap.ui.getCore().setModel(jsonModel, "salesModel");
		
		
		
	},
	onBeforeShow : function(evt) {
		this.getController().onBeforeShow(evt);
	},

	navButtonTap : function(evt) { 
		var app = this.getView().app;
		if(app) {
			//app.backToPage("ProductList");
		}
	},
});