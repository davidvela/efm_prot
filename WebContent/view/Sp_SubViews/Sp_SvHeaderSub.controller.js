
sap.ui.controller("pdm_demo.view.Sp_SubViews.Sp_SvHeaderSub", {
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
});
