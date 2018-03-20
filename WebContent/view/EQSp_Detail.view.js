sap.ui.jsview("pdm_demo.view.EQSp_Detail", {
	getControllerName : function() {
		return "pdm_demo.view.EQSp_Detail";
	},	
	onBeforeShow : function(evt) {
		if (evt.data.context) {
			this.getView().setBindingContext(evt.data.context);
		} 
	},
	createContent : function(oController) {   
		//var oText = new sap.m.Text ({ id: "Sp_Det_l1",text :  "Welcome" });
		var oLabel  = new sap.m.Label({ id: "Sp_EQDet_l1", text: "label" });  
		var oButton = new sap.m.Button( {  	text: "{QuestDet>/name}",   tap : [oController, oController.onSupplierTap ] }); 
		var oPage   = new sap.m.Page( "SpEQDetailViewId_page" ); 
		var oLayout = new sap.ui.layout.VerticalLayout("SpEQDet_LayoutId" );
		oLayout.addContent(oButton);
		
//		showNavButton="{device>/isPhone}";
//		navButtonPress="onNavBack";
//		class="sapUiFioriObjectPage";
//		title="{i18n>detailTitle}">;
		
		//title = {Name}
		
		//Description 
		
		//IconTabBar
		//onDetailSelect -> suplier, view photo 
		
		
		//Footer - > onGotToProductPhotos Button. 
		
		// create page
		this.page = new sap.m.Page( "SpEQDetailViewId" , { 	title : "{QuestDet>/name}",
			showNavButton : false,
			//navButtonTap : [ oController.navButtonTap, oController ],      
			content: [ oLabel  , oLayout ] 	});

		return this.page;
	}		

});