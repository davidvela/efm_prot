sap.ui.jsview("pdm_demo.view.Sp_SDetail", {
	getControllerName : function() {
		return "pdm_demo.view.Sp_SDetail";
	},	
	onBeforeShow : function(evt) {
		if (evt.data.context) {
			this.getView().setBindingContext(evt.data.context);
		} 
	},
	createContent : function(oController) {   
		//var oText = new sap.m.Text ({ id: "Sp_Det_l1",text :  "Welcome" });
		var oLabel  = new sap.m.Label({ id: "Sp_SDet_l1", text: "label" });  
		var oButton = new sap.m.Button( {  	text: "Next",   tap : [oController, oController.onSupplierTap ] }); 
		var oPage   = new sap.m.Page( "SpSDetailViewId_page" ); 
		var oLayout = new sap.ui.layout.VerticalLayout("SpSDet_LayoutId" );

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
		this.page = new sap.m.Page( "SpSDetailViewId" , { 	title : "FullView",
			showNavButton : true,
			navButtonTap : [ oController.onNavBack, oController ],      
			content: [ oLabel  , oLayout ] 	});

		return this.page;
	}		

});