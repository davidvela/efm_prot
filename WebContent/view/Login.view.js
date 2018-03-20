sap.ui.jsview("pdm_demo.view.Login", {
	getControllerName : function() { return "pdm_demo.view.Login"; 	},
	createContent : function(oController) {
	        var oTVs     = new sap.m.Label({design : sap.m.LabelDesign.bold, text : ""});
			oTVs.addStyleClass("header");
	        var oTV     = new sap.m.Label({design : sap.m.LabelDesign.bold, text : "Login"});
			oTV.addStyleClass("header");
			
			var oUser = new sap.m.Input( "inp1", // this.createId("inp1"),  //"inp1",
		 			{placeholder:"USER ID",
			    	 width:"200px"
			    	});
	    	
			var oPass = new sap.m.Input("inp2", {
	    		type:sap.m.InputType.Password,
	    		placeholder:"PASSWORD",
	    		width:"200px"
	     	});
	     	
	     	var oButton = new sap.m.Button("btn1",
	     			{text:"Login",width:"200px",
	     		     press:[oController,oController.login]
	     		});
			
	     	var dummyText = new sap.m.Input( this.createId("dummyTextbox") , { value: "{dummyTextModel>/dummyTextValue}"}); // this.createId("inp1"),  //"inp1",
		 			   	
	     	//Layouts 
	     	var oLayout = new sap.ui.layout.VerticalLayout("Layout1", {
				content: [ oUser, oPass, oButton]
			});	
			var oBorderLayout = new sap.ui.layout.HorizontalLayout({ id: "BorderLayout",
				content :  [oLayout]
			});
			  
			var centerLayout = new sap.m.VBox("MainlayoutLogin", { items:[oTVs, oTV,    oLayout , dummyText    ]   });
			centerLayout.setAlignItems("Center");
			centerLayout.setJustifyContent("Center");
				     	
	 		//return new sap.m.Page({	content: [ centerLayout ]		});	
	 		return centerLayout;
	}
});