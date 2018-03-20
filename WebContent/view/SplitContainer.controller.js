sap.ui.controller("pdm_demo.view.SplitContainer", {
	onInit : function() {
		/*sap.ui.core.UIComponent.getRouterFor(this).attachRouteMatched(function(oEvent) {
			// when detail navigation occurs, update the binding context		
			if (oEvent.getParameter("name") === "_Login") {				
				var dummyTextbox = this.byId('dummyTextbox');
				//var dummyTextbox = sap.ui.getCore().byId("dummyTextbox");
				var dummyText = dummyTextbox.getValue();	

				var oModel = sap.ui.getCore().getModel("dummyTextModel");
				if(oModel)
					this.getView().setModel(oModel, "dummyTextModel");
				else if(!dummyText)
					dummyTextbox.setValue('dummyText');
			}
		}, this);*/

	},
	onBeforeShow : function(evt) {
		if (evt.data.context) {
			this.getView().setBindingContext(evt.data.context);
		} 
	},


});


