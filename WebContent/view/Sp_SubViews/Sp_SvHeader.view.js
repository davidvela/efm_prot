jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("sap.m.MessagePopover");

sap.ui.jsview("pdm_demo.view.Sp_SubViews.Sp_SvHeader", {
	getControllerName: function() {
		return "pdm_demo.view.Sp_SubViews.Sp_SvHeader";
	},

	onBeforeShow : function(evt) {
		this.getController().onBeforeShow(evt);
	},

	createContent : function(controller) {
		
		var osearchLabel = new sap.m.Label( {text : "Search ", width : "200px"});
		var osearchTxt   = new sap.m.Input( { id: "searchTxt", value: "{material>/material}"});
		var osearchButton  = new sap.m.Button({text : "Search "} )
	    
		var oLayout = new sap.ui.layout.HorizontalLayout({
			content : [ osearchTxt  , osearchButton ],
		});
		var vBoxMat = new sap.m.VBox( { items:[oLayout  ]   });
		vBoxMat.setAlignItems("End");

		
		var oSpace     = new sap.m.Label({ design : sap.m.LabelDesign.bold, text : ""});
		var oSubTitle     = new sap.m.Label({ design : sap.m.LabelDesign.bold, text : "Header"});
		oSubTitle.addStyleClass("header");
	    
		var vBox = new sap.m.VBox( { items:[oSpace, oSubTitle   ]   });
		vBox.setAlignItems("Center");
		vBox.setJustifyContent("Center");
		
		
		var oHeaderForm = new sap.ui.layout.form.SimpleForm(
				{	maxContainerCols: 1,
					//minWidth : 1024,
					labelSpanL : 4, 
					labelSpanM : 2, 
					labelSpanS : 4, 
					emptySpanL : 0, 
					emptySpanM : 0, 
					emptySpanS : 0, 
					columnsL : 3, 
					columnsM : 1, 
					breakpointL : 800, 
					breakpointM : 600,
					editable: true,
					layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
					content:[
					    new sap.ui.core.Title({text : ''	}),
						new sap.m.Label( {text : "Material "}),
						new sap.m.Input( {value: "{material>/material}"}),
						new sap.m.Label( {text : "Prod Method "}),
						new sap.m.Input( {value: "{material>/prodMethod}"}),
						new sap.m.Label( {text : "Status "}),
						new sap.m.Input( {value: "{material>/status}"})	,
						
					    new sap.ui.core.Title({text : ''	}),
						new sap.m.Label( {text : "Global Name "}),
						new sap.m.Input( {value: "{material>/localName}"}),
						new sap.m.Label( {text : "Costing Plant "}),
						new sap.m.Input( {value: "{material>/costingPlant}"}),
						new sap.m.Label( {text : "Valid From "}),
						new sap.m.Input( {value: "{material>/validFrom}"}),
										   
					    new sap.ui.core.Title({text : ''	}),
						new sap.m.Label( {text : "Cost "}),
						new sap.m.Input( {value: "{material>/status}"}),
						new sap.m.Label( {text : "Date "}),
						new sap.m.Input( {value: "{material>/date}"}),
						new sap.m.Label( {text : "Division "}),
						new sap.m.Input( {value: "{material>/division}"})	,
					   ]
					});

		var oLayout2 = new sap.ui.layout.form.ResponsiveGridLayout("L2", {
			labelSpanL: 5,
			labelSpanM: 1,
			labelSpanS: 1,
			emptySpanL: 1,
			emptySpanM: 1,
			emptySpanS: 1,
			columnsL: 3,
			columnsM: 2,
			breakpointL: 800,
			breakpointM: 400
		});
		  
		var oForm2 = new sap.ui.layout.form.Form("F2",{
			title: new sap.ui.core.Title({text: "Header ", /*icon: "./LocalFiles/header.png",*/ tooltip: "Main Header"}),
			editable: true,
			layout: oLayout2,
			formContainers: [
				new sap.ui.layout.form.FormContainer("F2C1",{
					title: "",
					formElements: [
						new sap.ui.layout.form.FormElement({
							label: "Material ",
							fields: [new sap.m.Text({text: "{material>/material}",editable:false})] }),
							
						new sap.ui.layout.form.FormElement({
							label: "Prod Method",
							fields: [new sap.m.Text({text: "{material>/prodMethod}",editable:false})	 ]
						}),
						new sap.ui.layout.form.FormElement({
							label: "Status",
							fields: [new sap.m.Text({text: "{material>/status}",editable:false})	]
						})
						]
				}),
				new sap.ui.layout.form.FormContainer("F2C2",{
					title: "",
					formElements: [
						new sap.ui.layout.form.FormElement({
							label: "Global Name",
							fields: [new sap.m.Text({text: "{material>/localName}",editable:false, layoutData: new sap.ui.layout.GridData({span: "L7 M2 S3"})})    ] 	}),
						new sap.ui.layout.form.FormElement({
							label: "Costing Plant",
							fields: [new sap.m.Text({text: "{material>/costingPlant}",editable:false})	] }),
						new sap.ui.layout.form.FormElement({
							label: "Valid From ",
							fields: //[ new sap.ui.commons.DatePicker({yyyymmdd: "19990909",  value: "{material>/validFrom}",editable:false, 
									  [ new sap.m.Input({ editable: false ,  value: "{material>/validFrom}",
										layoutData: new sap.ui.layout.GridData({span: "L6 M2 S4"})  })				]	
						})]
				}),
				new sap.ui.layout.form.FormContainer("F2C3",{
					title: "",
					formElements: [
						new sap.ui.layout.form.FormElement({
							label: "Cost",
							fields: [new sap.m.Text({text: "{material>/status}" ,editable:false })
							]
						}),
						new sap.ui.layout.form.FormElement({
							label: "Date",
							fields: [ new sap.m.Input({editable:false, value: "{material>/date}", 
									  layoutData: new sap.ui.layout.GridData({span: "L6 M2 S4"})})

							]
						}),
						new sap.ui.layout.form.FormElement({
							label: "division",
							fields: [new sap.m.Text({text: "{material>/division}",editable:false})
							]
						})
					]
				})
			]
		});
		
		
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
	

		//Footer
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
		});			
				
		// create page
		this.page = new sap.m.Page({
			title : "Header",
			footer :  oFooter ,
			//showNavButton : true,
			//navButtonTap : [ controller.navButtonTap, controller ],      
			content: [  vBox, oHeaderForm   , oMessagePopover       ] 
		});

		return this.page;
		//return [  vBox, oHeaderForm   , oMessagePopover       ] ;
		
		
	}
});