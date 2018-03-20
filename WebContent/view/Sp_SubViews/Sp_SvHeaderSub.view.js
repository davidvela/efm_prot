//jQuery.sap.declare("pdm_demo.SubHeader");

sap.ui.jsview("pdm_demo.view.Sp_SubViews.Sp_SvHeaderSub", {
	getControllerName: function() {
		return "pdm_demo.view.Sp_SubViews.Sp_SvHeaderSub";
	},

	onBeforeShow : function(evt) {
	  this.getController().onBeforeShow(evt);
	},

	createContent : function(controller) {
	
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
				editable: false,
				layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
				content:[
				    new sap.ui.core.Title({text : ''	}),
					new sap.m.Label( {text : "Material "}),
					new sap.m.Text( {text: "{material>/material}"}),
					new sap.m.Label( {text : "Prod Method "}),
					new sap.m.Text( {text: "{material>/prodMethod}"}),
					new sap.m.Label( {text : "Status "}),
					new sap.m.Text( {text: "{material>/status}"})	,
					
				    new sap.ui.core.Title({text : ''	}),
					new sap.m.Label( {text : "Global Name "}),
					new sap.m.Text( {text: "{material>/localName}"}),
					new sap.m.Label( {text : "Costing Plant "}),
					new sap.m.Text( {text: "{material>/costingPlant}"}),
					new sap.m.Label( {text : "Valid From "}),
					new sap.m.Text( {text: "{material>/validFrom}"}),
									   
				    new sap.ui.core.Title({text : ''	}),
					new sap.m.Label( {text : "Cost "}),
					new sap.m.Text( {text: "{material>/status}"}),
					new sap.m.Label( {text : "Date "}),
					new sap.m.Text( {text: "{material>/date}"}),
					new sap.m.Label( {text : "Division "}),
					new sap.m.Text( {text: "{material>/division}"})	,
				   ]
				});
		
		var oLayout2 = new sap.ui.layout.form.ResponsiveGridLayout( {
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
		  
		var oForm2 = new sap.ui.layout.form.Form({
			title: new sap.ui.core.Title({text: "Header", tooltip: "Main Header"}),
			editable: true,
			layout: oLayout2,
			formContainers: [
				new sap.ui.layout.form.FormContainer({
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
				new sap.ui.layout.form.FormContainer({
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
				new sap.ui.layout.form.FormContainer({
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
		
		
		
		
		// create page
		this.page = new sap.m.Page({
			//title : "Header",
			//showNavButton : true,
			//navButtonTap : [ controller.navButtonTap, controller ],      
			content: [ oHeaderForm          ] 
		});

		return oHeaderForm;
	}
});