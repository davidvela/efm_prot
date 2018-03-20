sap.ui.jsview("pdm_demo.view.Sp_SubViews.Sp_SvFormula", {
	getControllerName: function() {
		return "pdm_demo.view.Sp_SubViews.Sp_SvFormula";
	},

	onBeforeShow : function(evt) {
		this.getController().onBeforeShow(evt);
	},

	createContent : function(controller) {

		//Create an instance of the table control
		var oTable = new sap.ui.table.Table({
			title: "R Versions",
			visibleRowCount: 5,
			firstVisibleRow: 5,
			selectionMode: sap.ui.table.SelectionMode.Multitoggle,
		});
		
		//Define the columns and the control templates to be used
		var oColumn = new sap.ui.table.Column({
			//label: new sap.ui.commons.Label({text: "Material"}),
			//template: new sap.ui.commons.TextView({editable:false}).bindProperty("text",  "material>material"),
			label: new sap.m.Label({text: "Ingr"}),	
			template: new sap.m.Text().bindProperty("text",  "material>material"),
			sortProperty: "material>material",
			filterProperty: "material>material",
			width: "15%"
		});
		oTable.addColumn(oColumn);
		
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.m.Label({text: "Ingredient Description"}),
			template: new sap.m.Input({ editable: false }).bindProperty("value", "material>matDesc"),
			width: "30%",
		    sortProperty: "material>matDesc",
			filterProperty: "material>matDesc",
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.m.Label({text: "Item"}),
			template: new sap.m.Text().bindProperty("text", "material>item"),
			width: "15%",
			hAlign: "Center",
		    sortProperty: "material>item",
			filterProperty: "material>item",

		}));
			
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.m.Label({text: "Σ    NOW"}),
			template: new sap.m.Text().bindProperty("text", "material>sumNow"),
			width: "20%",
		    sortProperty: "material>sumNow",
			filterProperty: "material>sumNow",
		}));
		
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.m.Label({text: "Σ Before "}),
			template: new sap.m.Text().bindProperty("text", "material>sumPast "),
			width: "10%",
		    sortProperty: "material>sumPast ",
			filterProperty: "material>sumPast ",
		}));
		
        oTable.addColumn(new sap.ui.table.Column({
            label: new sap.m.Label({text: "Modify Description"}),
			width: "10%",
            template: new sap.m.Button({
                                  text : "Edit",
                                  press : //controller.editButtonTap
                                  		  function(oEvent) {                                                         
                                                        var iRowIndex = this.getParent().getIndex();
                                                        var celID = this.getParent().getId() +"-col1"; // col1 is 'Description' column
                                                        var tdCell= document.getElementById(celID);
                                                        var inputF= tdCell.getElementsByTagName("input");
                                                      
                                                        var btnText = oEvent.getSource().getText();
                                                            if ( btnText == "Edit"){
                                                            		  inputF[0].readOnly = false;
                                                            		  inputF[0].disabled = false;
                                                            		  inputF[0].editable = true; 
                                                            		  inputF[0].class = 'colorRed'; 

                                                                      oEvent.getSource().setText("Update");

                                                           } else if ( btnText == "Update") {
                                                                    inputF[0].readOnly = true;
                                                         		    inputF[0].disabled = true;  
                                                        	   		inputF[0].editable = false; 
                                                          		    inputF[0].class = 'sapMInputBaseInner'; 

                                                                   oEvent.getSource().setText("Edit");
                                                           }
                                             }
                             })
        }));
		
		//oTable.setEditable(false); - only for the table controls
		oTable.bindRows("material>/Formula");
		var oLabel =  new sap.m.Text ({ text :  "R Usage: " });
		//var oDropdownBox1 = new sap.ui.commons.DropdownBox("DropdownBox1");
		var oDropdownBox1 = new sap.m.ComboBox("DropdownBoxFor");
			oDropdownBox1.setTooltip("BOM Usage");
			oDropdownBox1.setEditable(true);
			oDropdownBox1.setWidth("200px");
			oDropdownBox1.setValue("Dessert");
			oDropdownBox1.addItem(new sap.ui.core.ListItem("R_For",{ text : "Dessert"  }));
	   
		oDropdownBox1.addStyleClass("spaceBetweenLines");
		oLabel.addStyleClass("spaceBetweenLines");

	    var controlSpace= new sap.ui.core.HTML("htmlspace",{    content:"<span>&nbsp;</span>"    });
		
	    var oSpace     = new sap.m.Label({ design : sap.m.LabelDesign.bold, text : ""});
		var oSubTitle     = new sap.m.Label({ design : sap.m.LabelDesign.bold, text : "RECIPE"});
		oSubTitle.addStyleClass("header");
	    
		var vBox = new sap.m.VBox( { items:[oSpace, oSubTitle   ]   });
		vBox.setAlignItems("Center");
		vBox.setJustifyContent("Center");
	    
		var oDetailPage5 = sap.ui.jsview( "idFormulaHeader" , "pdm_demo.view.Sp_SubViews.Sp_SvHeaderSub");
	    oDetailPage5.setHeight("25%");
	    var oLayout = new sap.ui.layout.VerticalLayout({
			content : [ oDetailPage5, vBox, oLabel, oDropdownBox1, controlSpace, 	oTable	  ]
		});
	    
		// create page
		this.page = new sap.m.Page({
			title : "Recipe",
			//showNavButton : true,
			//navButtonTap : [ controller.navButtonTap, controller ],      
			content: [   oLayout    ] 
		});

		return this.page;
	}
});