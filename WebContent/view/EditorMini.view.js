jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("sap.m.MessagePopover");
sap.ui.jsview("pdm_demo.view.EditorMini", {
	getControllerName : function() {
		return "pdm_demo.view.EditorMini";
	},
	createContent : function(oController) {

		var oTable =  new sap.m.Table({
			id : "idHTab", 	
			headerText : "Project: " + "pname", 
			mode : sap.m.ListMode.SingleSelect, 
	        //inset: true,
			width : "100%", // sap.ui.core.CSSSize
			//items : [ new sap.m.ListItemBase	({ id : "idTableItem", }) ], // sap.m.ListItemBase
			swipeContent : undefined, // sap.ui.core.Control
			headerToolbar : new sap.m.Toolbar({	id : "idTableToolbar",	
							content : [ new sap.m.Label({ design : sap.m.LabelDesign.bold, // text : "{Project>projectName}"}),
																							text : "Project: New Strawberry Cake"}),
					           			new sap.m.ToolbarSpacer(),
							            new sap.m.Button({text: "Add Recipe", icon: "sap-icon://add", 
								  			press : [oController.onAddNewMaterial, oController] })		
							]}),
			columns : [ 
			            new sap.m.Column({ id : "idCMnum",  	header: new sap.m.Label({text: "Recipe Num"}), width: "5%",}),
						new sap.m.Column({ id : "idCMname", 	header: new sap.m.Label({text: "Recipe Nam"}), width: "10%",}),
						new sap.m.Column({ id : "idCTGrams", 	header: new sap.m.Label({text: "Total in g."}), width: "5%",	}),
						new sap.m.Column({ id : "idCTVal", 		header: new sap.m.Label({text: "Total val. in EUR"}), width: "5%",}),
						new sap.m.Column({ id : "idCTCalcR", 	header: new sap.m.Label({text: "Total Calc. Results"}), width: "5%",}),
						new sap.m.Column({ id : "idCTYield", 	header: new sap.m.Label({text: "Yield in g."}), width: "5%",}),
					], 
			/*select : [ function(oEvent) {
				var control = oEvent.getSource();
			}, this ],
			selectionChange : [ function(oEvent) {
				var control = oEvent.getSource();
			}, this ], */
		});

	    oTable.bindAggregation("items", {
	        path: "header>/elements",
	        template: new sap.m.ColumnListItem({
	            cells: [   new sap.m.Label({ text: "{header>matNumber}" }),
	                       new sap.m.Label({ text: "{header>matName}" }),
	                       new sap.m.Label({ text: "{header>totalGrams}" }),
	                       new sap.m.Label({ text: "{header>totalVal}" }),
	                       new sap.m.Label({ text: "{header>totalCalc}" }),
	                       new sap.m.Label({ text: "{header>YieldGrams}" })
	            ]
	        })
	    });	
		var oTreeTable = new sap.ui.table.TreeTable({
			id : "TreeTableId",
			visibleRowCount : 10, 
			firstVisibleRow : 0, 
			selectionMode : sap.ui.table.SelectionMode.Multi, 
			selectionBehavior : sap.ui.table.SelectionBehavior.RowSelector, 
			title : new sap.m.Title({text: " "}), 
			footer : undefined, 
			toolbar : undefined,
			columns : [ new sap.ui.table.Column({ id : "idCTInfo", 	label: new sap.m.Label({text: "Info"}), width: "2%",		
							template: new sap.m.Input({ editable: false }).bindProperty("value", "components>info") }),
				
	            		new sap.ui.table.Column({ id : "idCTLine", 	label: new sap.m.Label({text: "Line"}), width: "2%",		
	            			template: new sap.m.Input({ editable: false }).bindProperty("value", "components>line") }),
			            
			            new sap.ui.table.Column({ id : "idCTMatNum", 	label: new sap.m.Label({text: "Ingredient"}), width: "5%",		
							template: new sap.m.Input({ editable: false }).bindProperty("value", "components>material") }),
							
						new sap.ui.table.Column({ id : "idCTMatNam",  	label: new sap.m.Label({text: "I.Name"}), width: "10%",			
							template: new sap.m.Input({ editable: false }).bindProperty("value", "components>matDesc") }),
						
						new sap.ui.table.Column({ id : "idCT1", 		label: new sap.m.Label({text: "Recipe 1"}), width: "5%",  			
							template: new sap.m.Input({ editable: false }).bindProperty("value", "components>sumNow") }),		
			], 
			/*rows : [ new sap.ui.table.Row({
				id : "id5", 
				tooltip : undefined, 
				customData : [], 
				dependents : [], 
				cells : []
			}) ], /*/
		});	
		oTreeTable.bindRows("components>/Formula");
				
		//**********************************************************************************************************************
		//**********************************************************************************************************************
		// FOOTER 
		//**********************************************************************************************************************
		//**********************************************************************************************************************
		var oMessagePopover = new sap.m.MessagePopover({
			items: {
				path: "message>/messages",
				template: new sap.m.MessagePopoverItem({
			        type: "{message>type}",
			        title: "{message>title}",
			        description: "{message>description}",
			        longtextUrl: "{message>longtextUrl}"
				})
			}
		});
		var oFooter = new sap.m.OverflowToolbar({
			//height : "20px", // sap.ui.core.CSSSize
			design : sap.m.ToolbarDesign.Auto, // sap.m.ToolbarDesign, since 1.16.8
			tooltip : undefined, // sap.ui.core.TooltipBase
			content : [			
			           			
								new sap.m.Button({ text : "", icon : "sap-icon://alert",
										dependent : oMessagePopover, 
										press :function () {
									          oMessagePopover.toggle(this);
								        }}),
			           			new sap.m.ToolbarSpacer(),
										
								new sap.m.Button({
								  			text  : "Approve",
								  			icon  : "sap-icon://accept",
								  			//type  : sap.m.ButtonType.Back,
								  			customData : [ 
								  			          	   new sap.ui.core.CustomData({
								  			          		   key:"id", 
								  			          		   value:"{req_id}"})
								  			          	],
								  			//visible: jQuery.device.is.phone,
								  			press :  function() { 
								  									//alert("Save Changes in SAP");
								  									sap.m.MessageBox.alert("Changes Saved in SAP");

								  								}
	  										}),
						  		new sap.m.Button({
						  			text : "Cancel",
						  			icon : "sap-icon://decline",
						  			press :  function() { alert("Cancel Changes")},
						  			customData : [ 
						          	    new sap.ui.core.CustomData({
						          	    	key:"id", 
						          	    	value:"{req_id}"})
						          	]
						  		}),
					  		new sap.m.Button({ text : "", icon : "sap-icon://favorite",
					  			press :  function() { alert("Cancel Changes")} }),
			], 
		})			
		//**********************************************************************************************************************
		//**********************************************************************************************************************
		// create page
		//**********************************************************************************************************************
		//**********************************************************************************************************************
		this.page = new sap.m.Page("idEditorView", { 	title : "EDP",
			showNavButton : true,
			footer :  oFooter ,
			navButtonTap : [ oController.onNavButtonTap, oController ],      
			content: [ oTable, oTreeTable , oMessagePopover   ] 	});

		return this.page;

	}//end of create content
	
});