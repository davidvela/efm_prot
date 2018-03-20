sap.ui.core.mvc.Controller.extend("pdm_demo.view.EQSp_Detail", {
	onInit : function() {
		var oView = this.getView();

		sap.ui.core.UIComponent.getRouterFor(this).attachRouteMatched(function(oEvent) {
			// when detail navigation occurs, update the binding context
			if (oEvent.getParameter("name") === "question") {

				//Try to map the information from the master... which binding? 
				var sQid   = oEvent.getParameter("arguments").question;
				var oModelS = sap.ui.getCore().byId("idEQSplitContainerControl").getModel("EQQuest"); 
				var oProp   = oModelS.getProperty("/");
				var oQuests  = oProp.questions; 
				var oQuestion; 
				
				for (var j = 0;  j < oQuests.length; j++) {
					if (oQuests[j].id == sQid )
					{	oQuestion = oQuests[j]; 
						break; }
				}
				//sap.ui.getCore().byId("SpEQDetailViewId").setTitle = oQuestion.name;
				var oModel = new sap.ui.model.json.JSONModel();
				oModel.setData(oQuestion);
				oView.setModel(oModel,"QuestDet");

			}
		}, this);

	},
	onBeforeShow : function(evt) {
		if (evt.data.context) {
			this.getView().setBindingContext(evt.data.context);
		} 
	},
	onNavBack : function(oEvent) {
		// This is only relevant when running on phone devices
		sap.ui.core.UIComponent.getRouterFor(this).myNavBack("main");
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
