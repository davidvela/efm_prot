sap.ui.controller("pdm_demo.view.Select", {
	onInit : function() {
		sap.ui.core.UIComponent.getRouterFor(this).attachRouteMatched(function(oEvent) {
			// when detail navigation occurs, update the binding context
			if (oEvent.getParameter("name") === "_Select") {			
				
				var dummyTextbox = this.byId('dummyTextbox');
				var dummyText = dummyTextbox.getValue();				

				var oModel = sap.ui.getCore().getModel("dummyTextModel");
				if(oModel)
					this.getView().setModel(oModel, "dummyTextModel");
				else if(!dummyText)
					dummyTextbox.setValue('dummyText');	
				
				var oModelH = new sap.ui.model.json.JSONModel();
				oModelH.loadData("Model/EDProjects.json");
				this.getView().setModel(oModelH, "projects");
			}
		}, this);
	},

	onBeforeShow : function(evt) {
		if (evt.data.context) {
			this.getView().setBindingContext(evt.data.context);
		} 
	},

	onNavButtonTap : function(evt) { 
			//this.setViewDataAsGlobalModel();
			// This is only relevant when running on phone devices
			sap.ui.core.UIComponent.getRouterFor(this).navTo("_full1");
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

	onContinue : function() {
		this.setViewDataAsGlobalModel();
		sap.ui.core.UIComponent.getRouterFor(this).navTo("_product_list" ,{
			currentView : this.getView()
		}, true);
	},
		
	onNextTap : function(evt) {
		// create JSON model instance
		//var oModel = new sap.ui.model.json.JSONModel();
		// set the data for the model 
		//oModel.setData(screens);
		//oModel.loadData("Model/screens.json");
		// assign the model globally to the core
		//sap.ui.getCore().setModel(oModel, "screens" );
		//sap.ui.getCore().byId("idAppControl").setModel(oModel,"screens");

		
		var matId = sap.ui.getCore().materialId;
		var oMatModel = new sap.ui.model.json.JSONModel();
		
		//app.setBackgroundImage("./images/grayBack.png");
		//var supplierId = evt.getSource().data("id");
		//var app = this.getView().app;
		var matId = sap.ui.getCore().byId("inp3MatId").getValue();
		
		if (matId == "123456" || matId == "201207" ) {
			sap.ui.getCore().materialId = matId;
			
			oMatModel = new sap.ui.model.json.JSONModel();
			switch (matId) {
			case "123456":
				//oMatModel.setData(mat123456);
				oMatModel.loadData("Model/mat123456.json");
				break;
			case "201207":
				//oMatModel.setData(mat201207);
				oMatModel.loadData("Model/mat201207.json");
				break;
			default:
				break;
			}
			//sap.ui.getCore().setModel(oMatModel, "material" );	
			sap.ui.getCore().byId("idAppControl").setModel(oMatModel,"material");

			var oView = this.getParent().getParent();
			sap.ui.core.UIComponent.getRouterFor(oView).navTo("_product_list" ,{
				currentView : oView
			}, true);
			
		} else {
			alert("Material not founded.");
		}
		
		/* extra task - show a busy indicator when I am calling web services
				OData.read( 
					  "https://sapes1.sapdevcenter.com/sap/opu/odata/sap/ZGWSAMPLE_SRV/BusinessPartnerCollection('" + supplierId + "')?$format=json", 
					  function (data) { 
						  app.to("SupplierDetail",data);
					  } 
					);*/
	},
	
	
	//EDITOR 

	onAddNewProjectED: function(evt){
		alert("New Project");
	},
	onNextTapED : function(oEvent) {
		sap.ui.core.UIComponent.getRouterFor(this).navTo("_Editor", {
			projectId: "01" //oEvent.getSource().getBindingContext().getProperty("projectId")
		}, false);
	}, 
	//EQ
	onEQBtPress: function(oEvent){	
		//var oView = sap.ui.getCore().byId("SelectViewId").getParent();
		var oView = this.getParent().getParent().getParent();
		sap.ui.core.UIComponent.getRouterFor(oView).navTo("_eq_list" ,{ currentView : oView }, true);
	}, 

	
});






// Data 
/*


// load material info. 
var screens = {
		  elements : [ { name : "Header"},
		  		       { name : "Material Scope"},
		  		       { name : "SDS"},
		  		       { name : "Formula"},
		  ]
}; 

var mat123456 = {
		  material  : "123456",
		  localName : "VERBENA TOUCH # FC10760",
		  cost : "10",
		  
		  prodMethod: "2Compounds",
		  costingPlant : "HR01 HR01",
		  date : "24.08.2015",
		  
		  status : "released",
		  validFrom : "18.11.2013",
		  division : "CN Fragances",
		  
		  materialScope : [ { area : "Aroma Molecules", rawMaterial : "",     formula : false,  solution : 1,  unclassified : "", },
		                    { area : "Cosmetic Ingr.",  rawMaterial : "",     formula : false,  solution : 2,  unclassified : "", },
		                    { area : "Flavor", 		    rawMaterial : "",     formula : false,  solution : 3,  unclassified : "", },
		                    { area : "Fragances", 	    rawMaterial : "1012", formula : true,   solution : 4, unclassified : "B", },
		                  ],
		  Formula : [ { material : "100023", matDesc : "VALERIAN OIL", 		     item : "0049", sumNow : "300,000 ",  sumPast : "300,000", },
		              { material : "103011", matDesc : "DIHYDRO MYRCENOL", 	     item : "0001", sumNow : " ", 		  sumPast : "20", },
		              { material : "103208", matDesc : "FREESIOL / CORPS 119",   item : "0002", sumNow : " ", 		  sumPast : "20", },
		              { material : "103248", matDesc : "PHENLYNETHLYL ACETATE",  item : "0023", sumNow : " ", 		  sumPast : "20", },
		              { material : "103519", matDesc : "FLOROSA", 				 item : "0045", sumNow : "22,000 ",   sumPast : "20", },
		            ],
		  sdspath : "123456_datasheet.pdf",
}; 

var mat201207 = {
		  material  : "201207",
		  localName : "ERDBEER AROMA",
		  cost : "20",
		  prodMethod: "2 Compounds",
		  costingPlant : "HR01 HR01",
		  date : "24.08.2015",
		  status : "released",
		  validFrom : "21.12.2001",
		  division : "CM Cosmetics",
		  materialScope : [ { area : "Aroma Molecules", rawMaterial : "",     formula : false,  solution : 1,  unclassified : "", },
		                    { area : "Cosmetic Ingr.",  rawMaterial : "",     formula : true,   solution : 2,  unclassified : "", },
		                    { area : "Flavor", 		    rawMaterial : "",     formula : false,  solution : 3,  unclassified : "", },
		                    { area : "Fragances", 	    rawMaterial : "1012", formula : false,  solution : 4, unclassified : "B", },
		                  ],
		  Formula : [ { material : "123456", matDesc : "VERBENA TOUCH #FC10760",   item : "0061", sumNow : " ",       sumPast : "20,000", },
		              { material : "131104", matDesc : "HEXENOL CIS-3", 		   item : "0020", sumNow : "20,000",  sumPast : "20,000", },
		              { material : "131269", matDesc : "METHZL CAPROATE", 		   item : "0061", sumNow : "10,000",  sumPast : "10,000", },
		              { material : "160221", matDesc : "PROPYLENE GLYCOL-1,2", 	   item : "0061", sumNow : "730,000", sumPast : "740,000", },
		              { material : "201102", matDesc : "STRAWBERRY FLAVOR CONC.",  item : "0061", sumNow : "60,000",  sumPast : "80,000", },
		            ],
		  sdspath : "201207-Strawberry.pdf",
}; */

