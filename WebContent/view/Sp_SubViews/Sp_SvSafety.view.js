
sap.ui.jsview("pdm_demo.view.Sp_SubViews.Sp_SvSafety", {
	getControllerName: function() {
		return "pdm_demo.view.Sp_SubViews.Sp_SvSafety";
	},

	onBeforeShow : function(evt) {
		//this.getController().onBeforeShow(evt);
	},

	createContent : function(controller) {

		var oSpace = new sap.m.Label({ design : sap.m.LabelDesign.bold, text : ""});
		var oSubTitle = new sap.m.Label({ design : sap.m.LabelDesign.bold, 
			text : "Safety"});
		oSubTitle.addStyleClass("header");

		var vBox = new sap.m.VBox( { items:[oSpace, oSubTitle   ]   });
		vBox.setAlignItems("Center");
		vBox.setJustifyContent("Center");

		var oDetailPage5 = sap.ui.jsview( "idSafetyHeader" , "pdm_demo.view.Sp_SubViews.Sp_SvHeaderSub");
		oDetailPage5.setHeight("25%");
		var oLayout = new sap.ui.layout.VerticalLayout({
			content : [ oDetailPage5, vBox,	  ],
			height: "80%", 
			width : "100%",
			scrollToLoad : true 
		});

		
		
		var oList = new sap.m.List({ headerText : "Danger", width: "130px",		
			columns : [ new sap.m.Column({width: "90px"}) ], 	})
		
		
		oList.bindAggregation("items", {    path: "material>/danger",
	        template: new sap.m.ColumnListItem({ 
	            cells: [   new sap.m.Image({ src: "{material>pic}" , width: "90px" })       ]    })    });	
		
		var oHeaderForm = new sap.ui.layout.form.SimpleForm(
				{	maxContainerCols: 2,
					//minWidth : 1024,
					labelSpanL : 4, 
					labelSpanM : 4, 
					labelSpanS : 4, 
					emptySpanL : 0, 
					emptySpanM : 0, 
					emptySpanS : 0, 
					columnsL : 2, 
					columnsM : 2, 
					breakpointL : 500, 
					breakpointM : 500,
					editable: false,
					layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
					content:[
					    new sap.ui.core.Title({text : ''	}),
						new sap.m.Label( {text : "Water pol. class "}),	new sap.m.Text( {text: "{material>/d_wpc}"}),
						new sap.m.Label( {text : "Flashpoint"}), 		new sap.m.Text( {text: "{material>/d_flash}"}),
						new sap.m.Label( {text : "Burning rate "}),		new sap.m.Text( {text: "{material>/d_br}"})	,
						
					    new sap.ui.core.Title({text : ''	}),
						new sap.m.Label( {text : "Water solubility"}),	   	new sap.m.Text( {text: "{material>/d_ws}"}),
						new sap.m.Label( {text : "Water miscibillity "}),	new sap.m.Text( {text: "{material>/d_wm}"}),
						new sap.m.Label( {text : "Burning Number"}),		new sap.m.Text( {text: "{material>/d_bn}"}),
					   ]
					});
		
		var oTreeTable = new sap.ui.table.TreeTable({ width: "100%",			visibleRowCount : 3, 
						columns : [ new sap.ui.table.Column({ label: new sap.m.Label({text: "H+P Phrase"}), width: "20%",		
							template: new sap.m.Input({ editable: false }).bindProperty("value", "material>header") }),
				
	            		new sap.ui.table.Column({ label: new sap.m.Label({text: "Phrase Text"}), width: "40%",		
	            			template: new sap.m.Input({ editable: false }).bindProperty("value", "material>phrase") }) ]

		});	
		oTreeTable.bindRows("material>/dangerTab");
		
		var vBox2 = new sap.m.VBox( { items:[ oHeaderForm, oTreeTable   ]  , width: "85%"});		
		
		var oLayoutTab = new sap.ui.layout.HorizontalLayout({ 	//allowWrapping : true,
																content : [oList, vBox2] }); //.addStyleClass('container');;


		var oTabBar = new sap.m.IconTabBar("SafetyTabBar", { 
			//select: [controller.onSelectTab, controller],
			items: [	new sap.m.IconTabFilter({text: "GHS EU", icon: "sap-icon://warning2",
				count: "0", iconColor: "Positive", 
				content:[ //new sap.ui.core.mvc.JSView({viewName: "pdm_demo.tab1"}), 
				          oLayoutTab         ]
			}),
			new sap.m.IconTabFilter({text: "EU Label", icon: "sap-icon://to-be-reviewed",
				count: "1", 
				content:[ //new sap.ui.core.mvc.JSView({viewName: "pdm_demo.tab1"}), 
				          new sap.m.Label({ design : sap.m.LabelDesign.bold, text : "This tab will be available soon. " +
				          															"Sorry for the inconveniences. "}), 
				          new sap.m.Table({ showOverlay: false, mode: sap.m.ListMode.Single, 
				          					 showSeparators: sap.m.ListSeparators.all, 
				          					 columns: [
				          					            new sap.m.Column(),
				          					            new sap.m.Column()
				          					 ]
				          				})
				          ]

			}),
			
			/*new sap.m.IconTabFilter({text: "EU Label", icon: "sap-icon://to-be-reviewed"}),
			new sap.m.IconTabFilter({text: "EU Label", icon: "sap-icon://to-be-reviewed"}),
			new sap.m.IconTabFilter({text: "EU Label", icon: "sap-icon://to-be-reviewed"}),
			new sap.m.IconTabFilter({text: "EU Label", icon: "sap-icon://to-be-reviewed"}),
			new sap.m.IconTabFilter({text: "EU Label", icon: "sap-icon://to-be-reviewed"}),
			new sap.m.IconTabFilter({text: "EU Label", icon: "sap-icon://to-be-reviewed"}),
			new sap.m.IconTabFilter({text: "EU Label", icon: "sap-icon://to-be-reviewed"}),
			new sap.m.IconTabFilter({text: "EU Label", icon: "sap-icon://to-be-reviewed"}),
			new sap.m.IconTabFilter({text: "EU Label", icon: "sap-icon://to-be-reviewed"}),
			new sap.m.IconTabFilter({text: "EU Label", icon: "sap-icon://to-be-reviewed"}),
			new sap.m.IconTabFilter({text: "EU Label", icon: "sap-icon://to-be-reviewed"}),
			new sap.m.IconTabFilter({text: "EU Label", icon: "sap-icon://to-be-reviewed"}),
			new sap.m.IconTabFilter({text: "EU Label", icon: "sap-icon://to-be-reviewed"}),
			new sap.m.IconTabFilter({text: "EU Label", icon: "sap-icon://to-be-reviewed"}),
			new sap.m.IconTabFilter({text: "EU Label", icon: "sap-icon://to-be-reviewed"}),*/

			]	   	
		});

		// create page
		this.page = new sap.m.Page({
			title : "Safety",
			//showNavButton : true,
			//navButtonTap : [ controller.navButtonTap, controller ],      
			content: [   oLayout,   oTabBar  ] 
		});

		return this.page;
	}
});
