sap.ui.jsview("pdm_demo.view.Select", {
	getControllerName : function() {
		return "pdm_demo.view.Select";
	},
	createContent : function(oController) {
		//image
		var ologSym = new sap.m.Image({	src : "LocalFiles/logo.png",  width : "200px", height:"150px" 	});
		var oText = new sap.m.Text ({ text :  "Welcome to the EFM Demo. Enterprise Food Manager. ex: 123456, 201207  " });	

		var centerLayoutSym = new sap.m.VBox( { items:[ologSym, oText]   });
		centerLayoutSym.setAlignItems("Center");
		centerLayoutSym.setJustifyContent("Center");

		var dummyText = new sap.m.Input( this.createId("dummyTextbox") ,{ value: "{dummyTextModel>/dummyTextValue}"} ); 

		//**********************************************************************************************************************
		//**********************************************************************************************************************
		// FDM Food Data Manager -  Master / Detail => Show features of every ingredient 
		//**********************************************************************************************************************
		//**********************************************************************************************************************
		var materialInput = new sap.m.Input("inp3MatId", {	value : "123456",
															placeholder:"MATERIAL ID",
															width:"90%"  	}); 
		var oButton = new sap.m.Button( {  	text: "Next",
								            width:"8%" ,
								            tap : [oController,oController.onNextTap] }); 
	
		
		oText.addStyleClass("spaceBetweenLines");
		materialInput.addStyleClass("spaceLeft");
		oButton.addStyleClass("spaceRight");
				
		
		//**********************************************************************************************************************
		//**********************************************************************************************************************
		// EDP Enterprise Data Portal - Allow you to create new recipes 
		//**********************************************************************************************************************
		//**********************************************************************************************************************
		var oTable =  new sap.m.Table({
			headerText : "Project: New Strawberry Flavor", 
			mode : sap.m.ListMode.SingleSelectMaster, 
	        inset: true,
			width : "100%", // sap.ui.core.CSSSize
			//items : [ new sap.m.ListItemBase	({ id : "idTableItem", }) ], // sap.m.ListItemBase
			swipeContent : undefined, // sap.ui.core.Control
			headerToolbar : new sap.m.Toolbar({	
							content : [ new sap.m.Label({ design : sap.m.LabelDesign.bold, text :"Data Portal Projects"}),
					           			new sap.m.ToolbarSpacer(),
							            new sap.m.Button({text: "Create a New Project", icon: "sap-icon://add", 
								  			press : [oController.onAddNewProjectED, oController] })		
							]}),
			columns : [ 
			            new sap.m.Column({ id : "idPNum", 	header: new sap.m.Label({text: "PN"}), width: "5%",}),
						new sap.m.Column({ id : "idPName", 	header: new sap.m.Label({text: "Project Name "}),  width: "40%",}),
						new sap.m.Column({ id : "idPPers", 	header: new sap.m.Label({text: "Created Person "}),  width: "10%",}),
						new sap.m.Column({ id : "idPdate", 	header: new sap.m.Label({text: "Created Date "}),  width: "10%",}),
						new sap.m.Column({ id : "idPStat", 	header: new sap.m.Label({text: "Status"}),  width: "10%",}),

					], 
			select : [ oController.onNextTapED, oController ]
		});
	    oTable.bindAggregation("items", {
	        path: "projects>/elements",
	        template: new sap.m.ColumnListItem({
	            cells: [   new sap.m.Label({ text: "{projects>projectId}" }),
	                       new sap.m.Label({ text: "{projects>projectName}" }),
	                       new sap.m.Label({ text: "{projects>creator}" }),
	                       new sap.m.Label({ text: "{projects>creationDate}" }),
	                       new sap.m.ObjectStatus({ text: "{projects>statusTxt}", state: "{projects>status}"})
	            	   ]
	        })
	    });	
	    
	    new sap.m.Button({
			id : "id", // sap.ui.core.ID
			busy : false, // boolean
			busyIndicatorDelay : 1000, // int
			visible : true, // boolean
			fieldGroupIds : [], // string[], since 1.31
			text : undefined, // string
			type : sap.m.ButtonType.Default, // sap.m.ButtonType
			width : undefined, // sap.ui.core.CSSSize
			enabled : true, // boolean
			icon : undefined, // sap.ui.core.URI
			iconFirst : true, // boolean
			activeIcon : undefined, // sap.ui.core.URI
			iconDensityAware : true, // boolean
			textDirection : sap.ui.core.TextDirection.Inherit, // sap.ui.core.TextDirection, since 1.28.0
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
			ariaDescribedBy : [], // sap.ui.core.Control
			ariaLabelledBy : [], // sap.ui.core.Control
			validateFieldGroup : [ function(oEvent) {
				var control = oEvent.getSource();
			}, this ],
			tap : [ function(oEvent) {
				var control = oEvent.getSource();
			}, this ],
			press : [ function(oEvent) {
				var control = oEvent.getSource();
			}, this ]
		})
	    
	    
		//**********************************************************************************************************************
		//**********************************************************************************************************************
		//ER - Easy Recipe - Display documentation and order of the ingredients. 
		//**********************************************************************************************************************
		//**********************************************************************************************************************
     	var oBtEQ = new sap.m.Button(	{text:"ER", //width:"200px",
     		     						 press:[oController,oController.onEQBtPress ]   		});
		var centerLayout = new sap.m.VBox("MainlayoutEQSel", { items:[oBtEQ]   });
		centerLayout.setAlignItems("Center");
		centerLayout.setJustifyContent("Center");
		
		
		// create page
		this.page = new sap.m.Page("SelectViewId" , { 	title : "Selection Screen",
										showNavButton : true,
										navButtonTap : [ oController.onNavButtonTap, oController ],      
										content: [  centerLayoutSym,
										           	// FDM
												   	oText, materialInput, 	oButton, 
													dummyText,          
										           	// EDP
										           	oTable,
										           	// ER
										        	centerLayout
										         ] 	});
		return this.page;
	}
});