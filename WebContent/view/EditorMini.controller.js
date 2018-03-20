	var oHeader ;
	var oComponents ;

	sap.ui.controller("pdm_demo.view.EditorMini", {


		onInit : function() {
			sap.ui.core.UIComponent.getRouterFor(this).attachRouteMatched(function(oEvent) {
				// when detail navigation occurs, update the binding context
				if (oEvent.getParameter("name") === "_Editor") {			

					oComponents = {	
							Formula : [  { info: "X", line: "1", material : "131269 ", matDesc : "Sugar", 					item : "0061", sumNow : "20", }, 
							             { info: "X", line: "2", material : "131104 ", matDesc : "Strawberries",   			item : "0020", sumNow : "20", }, 
							             { info: " ", line: "3", material : "201102 ", matDesc : "Milk", 					item : "0061", sumNow : "60", }							             ]};

					oHeader = {	
							elements : [ { 	matNumber : "201207", matName : "Straberry Cake",	totalGrams: "1000", totalVal: "2,78", 
								totalCalc: " ", YieldGrams: "1000", }, 
								]};

					// load data 
					var oModelH = new sap.ui.model.json.JSONModel();
					oModelH.setData(oHeader);
					//oModelH.loadData("Model/EditorHeader.json");
					//sap.ui.getCore().setModel(oModelH, "header" );
					this.getView().setModel(oModelH, "header");

					var oModelC = new sap.ui.model.json.JSONModel();
					oModelC.setData(oComponents);
					this.getView().setModel(oModelC, "components");

					
					
					/*
					 * var oModel = new sap.ui.model.json.JSONModel()
					.attachRequestCompleted(function(oData) {
						var oTasks = oData.getSource().getProperty("/");
						iDone = 0;
						iOpen = 0;
						for ( var i = 0; i < oTasks.length; i++) {
							if (oTasks.Tasks[i].done == "X")
								iDone++;
							else
								iOpen++;
						}

						var oModel = new sap.ui.model.json.JSONModel({
							projectData : [ {
								task : "done",
								value : iDone
							}, {
								task : "open",
								value : iOpen
							} ]
						});
						sap.ui.getCore().byId("oTaskStatusBar").setModel(oModel,"dataset");

					});
					 */
					
					var aMockMessages = {
							count: 5,
							messages: [{
								type: "Error",
								title: "Error message",
								description: "First Error message description",
								longtextUrl: "",
							}, {
								type: "Warning",
								title: "Warning without description",
								description: "",
								longtextUrl: "",
							}, {
								type: "Success",
								title: "Success message",
								description: "First Success message description",
								longtextUrl: "",
							}, {
								type: "Error",
								title: "Error",
								description: "Second Error message description",
								longtextUrl: "",
							}, {
								type: "Information",
								title: "Information message (Long)",
								description: "Just some text description",
								longtextUrl: "./SampleHTML.html"
							}, {
								type: "Information",
								title: "Information message (Long) 2",
								description: "Just some text description",
								longtextUrl: "./SampleHTML.html"
							}]
						};
						var oModel3 = new sap.ui.model.json.JSONModel();
						oModel3.setData(aMockMessages);
						this.getView().setModel(oModel3, "message");
						//sap.ui.getCore().setModel(oModel3, "message");

				}
			}, this);
		},
		
		handleRouteMatched:function(evt){
			if("_Project" !== evt.getParameter("name")){
				return;
			}
			var id = evt.getParameter("arguments").projectId;
			//var model = new sap.ui.model.json.JSONModel({id:id});
			var oModel = new sap.ui.model.json.JSONModel()
				.attachRequestCompleted(function(oData) {
					var oProjects = oData.getSource().getProperty("/");
					for ( var i = 0; i < oTasks.length; i++) {
						if (oProjects.projectId[i].projectId == "X")
							iDone++;
						else
							iOpen++;
					}
				});
			
			this.getView().setModel(model,"ProjectId");
		},
		
		onAddNewMaterial: function(evt){
			var oHeaderTab = sap.ui.getCore().byId("idHTab");
			var oCompTab   = sap.ui.getCore().byId("TreeTableId");

			var oModelH = sap.ui.getCore().byId("idEditorView").getModel("header");
			oHeader.elements.push( { matNumber : " ", matName : " ",	totalGrams: " ", totalVal: " ", totalCalc: " ", YieldGrams: "", } );

			oModelH.setData(oHeader);
			this.getView().setModel(oModelH, "header");
			
			oCompTab.addColumn(new sap.ui.table.Column({
				label: new sap.m.Label({text: "Material 2"}), width : "5%",
				template: new sap.m.Input({ editable: true }).bindProperty("value", "component>col2"),	}));

		},
		onBeforeShow : function(evt) {
			if (evt.data.context) {
				this.getView().setBindingContext(evt.data.context);
			} 
		},
		onNavButtonTap : function(evt) { 
			//var app = this.getView().app;
			//app.setBackgroundImage("./LocalFiles/slogo.PNG");
			// This is only relevant when running on phone devices
			sap.ui.core.UIComponent.getRouterFor(this).navTo("_Select");

		},

	});






