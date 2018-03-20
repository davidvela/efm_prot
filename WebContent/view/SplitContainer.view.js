sap.ui.jsview("pdm_demo.view.SplitContainer", {
	getControllerName : function() {
		return "pdm_demo.view.SplitContainer";
	},	
	onBeforeShow : function(evt) {
		if (evt.data.context) {
			this.getView().setBindingContext(evt.data.context);
		} 
	},
	createContent : function(oController) {   
		
	/*	var oSplitApp = new sap.m.SplitContainer({
			id : "idSplitContainerControl", // sap.ui.core.ID
			busy : false, // boolean
			busyIndicatorDelay : 1000, // int
			visible : true, // boolean
			defaultTransitionNameDetail : "slide", // string
			defaultTransitionNameMaster : "slide", // string
			mode : sap.m.SplitAppMode.ShowHideMode, // sap.m.SplitAppMode
			masterButtonText : undefined, // string
			backgroundColor : undefined, // string, since 1.11.2
			backgroundImage : undefined, // sap.ui.core.URI, since 1.11.2
			backgroundRepeat : false, // boolean, since 1.11.2
			backgroundOpacity : 1, // float, since 1.11.2
			tooltip : undefined, // sap.ui.core.TooltipBase
			customData : [ new sap.ui.core.CustomData({
				id : "id1", // sap.ui.core.ID
				key : undefined, // string
				value : undefined, // any
				writeToDom : false, // boolean, since 1.9.0
				tooltip : undefined, // sap.ui.core.TooltipBase
				customData : [], // sap.ui.core.CustomData
				dependents : []
			// sap.ui.core.Control, since 1.19
			}) ], // sap.ui.core.CustomData
			dependents : [], // sap.ui.core.Control, since 1.19
			masterPages : [], // sap.ui.core.Control
			detailPages : [], // sap.ui.core.Control
			
			initialDetail : undefined, // sap.ui.core.Control
			initialMaster : undefined, // sap.ui.core.Control
			
			
			masterNavigate : [ function(oEvent) {
				var control = oEvent.getSource();
			}, this ],
			
			afterMasterNavigate : [ function(oEvent) {
				var control = oEvent.getSource();
			}, this ],
			
			masterButton : [ function(oEvent) {
				var control = oEvent.getSource();
			}, this ],
			
			beforeMasterOpen : [ function(oEvent) {
				var control = oEvent.getSource();
			}, this ],
			
			afterMasterOpen : [ function(oEvent) {
				var control = oEvent.getSource();
			}, this ],
			
			beforeMasterClose : [ function(oEvent) {
				var control = oEvent.getSource();
			}, this ],
			
			afterMasterClose : [ function(oEvent) {
				var control = oEvent.getSource();
			}, this ],
			
			detailNavigate : [ function(oEvent) {
				var control = oEvent.getSource();
			}, this ],
			
			afterDetailNavigate : [ function(oEvent) {
				var control = oEvent.getSource();
			}, this ]
		}) */
		
		var oSplitApp = new sap.m.SplitContainer("idSplitContainerControl", {});
		
		return oSplitApp; 
	}		
		
});