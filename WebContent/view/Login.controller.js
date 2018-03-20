jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("sap.m.MessagePopover");

sap.ui.controller("pdm_demo.view.Login", {
	onInit : function() {
		
		sap.ui.core.UIComponent.getRouterFor(this).attachRouteMatched(function(oEvent) {
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
		}, this);
		
		//this._animate(1, true);
		//app.setBackgroundColor("#f00");
		//oSplitApp.setBackgroundImage("http://foodindustry.asia/site/food/uploadedresources/slogo2.jpg");
		//***app.setBackgroundImage("./LocalFiles/slogo.PNG");
		//app.setBackgroundImage("./images/border1.PNG");
		//**app.setBackgroundRepeat(false);
	},
	
	setViewDataAsGlobalModel : function(){
		//https://www.youtube.com/watch?v=F5BCf-j6GLA
		var dummyText = this.byId('dummyTextbox').getValue();
		var json = {};
		json.dummyTextValue = dummyText;		
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData(json);
		sap.ui.getCore().setModel(oModel, "dummyTextModel");		
	},
	
	login:function(){
		var nextPage = function(){
			var user = sap.ui.getCore().byId("inp1").setValue("");
			var key = sap.ui.getCore().byId("inp2").setValue("");
			//app.to("idpage2")
			var view = sap.ui.getCore().byId("MainlayoutLogin").getParent();
			sap.ui.core.UIComponent.getRouterFor(view).navTo("_Select" ,{
				currentView :view
			}, true);
			/*sap.ui.core.UIComponent.getRouterFor(this).navTo("_Select" ,{
				currentView : this.getView()
			}, true);*/
		};
		
		var setGlobalModel = function(){
			var controller = sap.ui.getCore().byId("MainlayoutLogin").getParent().getController(); 
			controller.setViewDataAsGlobalModel();
		};
		
		//this.setViewDataAsGlobalModel();	
		setGlobalModel();

		//var app = this.getView().app;
		//var app = this.getParent().getParent().getParent().getParent().app;
		var user = sap.ui.getCore().byId("inp1").getValue();
		var key = sap.ui.getCore().byId("inp2").getValue();
			
		//Web-Service in the future
		if (user.trim() == 'david') {
			if (key.trim() == 'hola') {
				alert("Correct");
				nextPage();
			
			} else {	sap.m.MessageBox.alert("Inconrrect Password"); } //alert("Incorrect Password");	}
			} else {  nextPage();  }
			
	},//end login function
});