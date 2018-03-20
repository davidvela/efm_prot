
sap.ui.core.mvc.Controller.extend("pdm_demo.view.Sp_SDetail", {
//	onInit : function() {
//	},


	onInit : function() {
		var oView = this.getView();

		sap.ui.core.UIComponent.getRouterFor(this).attachRouteMatched(function(oEvent) {
			// when detail navigation occurs, update the binding context
			if (oEvent.getParameter("name") === "fullDetail")  { //fullDetail 
 
				//Try to map the information from the master... which binding? 
				
				var sProduct     = oEvent.getParameter("arguments").product;
				
				
				this.screen = sProduct; 

				var sProductPath = "/" + sProduct;
				oView.bindElement(sProductPath);

		
				sap.ui.getCore().byId("Sp_SDet_l1").setText(sProduct);
				var oViewP = sap.ui.getCore().byId("SpSDetailViewId");
				oViewP.setTitle(sProduct);

				var oViewPP = sap.ui.getCore().byId("SpSDet_LayoutId");
				oViewPP.removeAllContent(); 
				var oButton = new sap.m.Button( {text: "Next",   tap : [this, this.onSupplierTap ] }); 

				switch (sProduct) {
				case "Header": 
					oButton.setText("Header Button"); 
					break;

				default:
					break;
				}
				
				oViewPP.insertContent( oButton );



				// Check that the product specified actually was found
				/*oView.getElementBinding().attachEventOnce("dataReceived", jQuery.proxy(function() {
					var oData = oView.getModel().getData(sProductPath);
					if (!oData) {
//						sap.ui.core.UIComponent.getRouterFor(this).myNavToWithoutHash({
//							currentView : oView,
//							targetViewName : "tostas.view.NotFound",
//							targetViewType : "XML"
//						});

						sap.ui.core.UIComponent.getRouterFor(this).navTo("catchallDetail");
					}
				}, this));*/

				// Make sure the master is here
				/*var oIconTabBar = oView.byId("idIconTabBar");
				oIconTabBar.getItems().forEach(function(oItem) {
					if(oItem.getKey() != 'photos')
						oItem.bindElement(pdm_demo.util.Formatter.uppercaseFirstChar(oItem.getKey()));
				});*/

				// Which tab?
				/*var sTabKey = oEvent.getParameter("arguments").tab || "supplier";
				if (oIconTabBar.getSelectedKey() !== sTabKey) {
					oIconTabBar.setSelectedKey(sTabKey);
				}*/

			}
		}, this);

	},

	onBeforeShow : function(evt) {
		if (evt.data.context) {
			this.getView().setBindingContext(evt.data.context);
		} 
	},

	onNavBack : function(oEvent) {
		var bReplace = jQuery.device.is.phone ? false : true;

		// This is only relevant when running on phone devices
		//sap.ui.core.UIComponent.getRouterFor(this.getView()).myNavBack("main");
		sap.ui.core.UIComponent.getRouterFor(this).navTo("product", {
			from : this.getView(),
			product : this.screen, 
		}, bReplace);
	},

	onGoToProductPhotos : function(oEvent) {
		sap.ui.core.UIComponent.getRouterFor(this).navTo("photos" ,{
			currentView : this.getView(),
			product : oEvent.getSource().getBindingContext().getPath().slice(1),
			tab: "photos"
		}, true);
	},


	onDetailSelect : function(oEvent) {
		var tab = oEvent.getParameter("selectedKey");		
		sap.ui.core.UIComponent.getRouterFor(this).navTo((tab == "photos" ? "photos" : "product"),{
			currentView : this.getView(),
			product : oEvent.getSource().getBindingContext().getPath().slice(1),
			tab: tab
		}, true);
	}

});
