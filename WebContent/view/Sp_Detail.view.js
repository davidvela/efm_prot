sap.ui.jsview("pdm_demo.view.Sp_Detail", {
	getControllerName : function() {
		return "pdm_demo.view.Sp_Detail";
	},	
	onBeforeShow : function(evt) {
		if (evt.data.context) {
			this.getView().setBindingContext(evt.data.context);
		} 
	},
	createContent : function(oController) {   
		//var oText = new sap.m.Text ({ id: "Sp_Det_l1",text :  "Welcome" });
		var oLabel  = new sap.m.Label({ id: "Sp_Det_l1", text: "label" });  
		var oButton = new sap.m.Button( {  	text: "Next2",   tap : [oController.onButtonTap, oController ] }); 
		var oPage   = new sap.m.Page( "SpDetailViewId_page" ); 
		var oLayout = new sap.ui.layout.VerticalLayout("SpDet_LayoutId" );

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
		this.page = new sap.m.Page( "SpDetailViewId" , { 	title : "Detail",
			showNavButton : false,
			//navButtonTap : [ oController.navButtonTap, oController ],      
			content: [ oLabel, oButton  , oLayout ] 	});

		return this.page;
	}		

});