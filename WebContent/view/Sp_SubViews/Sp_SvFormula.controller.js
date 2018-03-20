
sap.ui.controller("pdm_demo.view.Sp_SubViews.Sp_SvFormula", {
	onInit : function() {
	},

	onBeforeShow : function(evt) {
		if (evt.data.context) {
			this.getView().setBindingContext(evt.data.context);
		} 
	},

	navButtonTap : function(evt) { 
		var app = this.getView().app;
		if(app) {
			//app.backToPage("ProductList");
		}
	},

	supplierTap : function(evt) {

		var supplierId = evt.getSource().data("id");
		var app = this.getView().app;

		/* extra task - show a busy indicator when I am calling web services
				OData.read( 
					  "https://sapes1.sapdevcenter.com/sap/opu/odata/sap/ZGWSAMPLE_SRV/BusinessPartnerCollection('" + supplierId + "')?$format=json", 
					  function (data) { 
						  app.to("SupplierDetail",data);
					  } 
					);*/
	}

});
