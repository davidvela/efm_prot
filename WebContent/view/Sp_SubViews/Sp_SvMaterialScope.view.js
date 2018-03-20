sap.ui.jsview("pdm_demo.view.Sp_SubViews.Sp_SvMaterialScope", {
	getControllerName: function() {
		return "pdm_demo.view.Sp_SubViews.Sp_SvMaterialScope";
	},

	onBeforeShow : function(evt) {
		this.getController().onBeforeShow(evt);
	},

	createContent : function(controller) {
		//Create an instance of the table control
		var oTable = new sap.ui.table.Table({
			title: "",
			visibleRowCount: 4,
			firstVisibleRow: 4,
			selectionMode: sap.ui.table.SelectionMode.None,
		});
		
		//Define the columns and the control templates to be used
		var oColumn = new sap.ui.table.Column({
			label: new sap.m.Label({text: "Area"}),
			template: new sap.m.Text().bindProperty("text",  "material>area"),
			sortProperty: "material>area",
			filterProperty: "material>area",
			width: "30%"
		});

		oTable.addColumn(oColumn);
		
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.m.Label({text: "Food Indicator"}),
			template: new sap.m.Text().bindProperty("text", "material>rawMaterial"),
			width: "20%",
		    sortProperty: "material>rawMaterial",
			filterProperty: "material>rawMaterial",
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.m.Label({text: "High Calories"}),
			template: new sap.m.CheckBox().bindProperty("selected", "material>formula"),
			width: "20%",
			hAlign: "Center",
		    sortProperty: "material>formula",
			filterProperty: "material>formula",

		}));
			
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.m.Label({text: "Ratings"}),
			template: new sap.m.RatingIndicator().bindProperty("value", "material>solution"),
			width: "20%",
		    sortProperty: "material>solution",
			filterProperty: "material>solution",
		}));
		
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.m.Label({text: "Unclassified"}),
			template: new sap.m.Text().bindProperty("text", "material>unclassified"),
			width: "20%",
		    sortProperty: "material>unclassified",
			filterProperty: "material>unclassified",
		}));
		
		//oTable.setEditable(false); - only for the table controls
		oTable.bindRows("material>/materialScope");

		
		
		
		var oText = new sap.m.Text({
			text	 : "{material>/material}"
		});
		
		var oText2 = new sap.m.Input({
			value : "{material>/material}",
			editable: true, 
			width: '200px',
		});
		oText2.addStyleClass('height1_5');

		var oDetailPage5 = sap.ui.jsview( "idMaterialSHeader" , "pdm_demo.view.Sp_SubViews.Sp_SvHeaderSub");	    
	    var oSpace     = new sap.m.Label({ design : sap.m.LabelDesign.bold, text : ""});
		var oSubTitle     = new sap.m.Label({ design : sap.m.LabelDesign.bold, text : "Applications"});
		oSubTitle.addStyleClass("header");
	    
		var vBox = new sap.m.VBox( { items:[ oSpace, oSubTitle    ]   });
		vBox.setAlignItems("Center");
		vBox.setJustifyContent("Center");
	    
	    var oLayout = new sap.ui.layout.VerticalLayout({
			content : [ oDetailPage5 , vBox  , oTable, oText , oText2 ],
	    	height: "80%", 
	    	scrollToLoad : true 
		});
	    
		// create page
		this.page = new sap.m.Page({
			title : "Applic",
			//showNavButton : true,
			//navButtonTap : [ controller.navButtonTap, controller ],      
			content: [oLayout    ] 
		});

		return this.page;
	}
});