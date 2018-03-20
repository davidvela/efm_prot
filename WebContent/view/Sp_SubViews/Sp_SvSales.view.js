sap.ui.jsview("pdm_demo.view.Sp_SubViews.Sp_SvSales", {
	getControllerName: function() {
		return "pdm_demo.view.Sp_SubViews.Sp_SvSales";
	},

	onBeforeShow : function(evt) {
		//this.getController().onBeforeShow(evt);
	},

	createContent : function(controller) {

		var oSpace = new sap.m.Label({ design : sap.m.LabelDesign.bold, text : ""});
		var oSubTitle = new sap.m.Label({ design : sap.m.LabelDesign.bold, 
			text : "Sales"});
		oSubTitle.addStyleClass("header");

		var vBox = new sap.m.VBox( { items:[oSpace, oSubTitle   ]   });
		vBox.setAlignItems("Center");
		vBox.setJustifyContent("Center");

		var oDetailPage5 = sap.ui.jsview( "idSalesHeader" , "pdm_demo.view.Sp_SubViews.Sp_SvHeaderSub");
		oDetailPage5.setHeight("25%");
		var oLayout = new sap.ui.layout.VerticalLayout({
			content : [ oDetailPage5, vBox,	  ],
			width : "100%",
		}); 

		/*var a1a2m1m2m3Model = {
				data:[
				      {Region: "Asia", Company: "FJ", Revenue: 10, Measure: 110, Population: 1200},
				      {Region: "Asia", Company: "KI", Revenue: 5, Measure: 180, Population: 1900},
				      {Region: "Asia", Company: "LA", Revenue: 17, Measure: 105, Population: 1680},
				      {Region: "Europe", Company: "FJ", Revenue: 2, Measure: 130, Population: 1003},
				      {Region: "Europe", Company: "KI", Revenue: 22, Measure: 80, Population: 1312},
				      {Region: "Europe", Company: "LA", Revenue: 24, Measure: 40, Population: 1453},
				      {Region: "Africa", Company: "FJ", Revenue: 37, Measure:88, Population: 1335},
				      {Region: "Africa", Company: "KI", Revenue: 15, Measure: 55, Population: 1859},
				      {Region: "Africa", Company: "LA", Revenue: 44, Measure:140, Population: 1879}
				      ]
		};

		var a1a2m1m2Data = {
				dimensions : [
				              {axis : 1, name: "Region", value: "{chart>Region}"},
				              {axis : 2, name: "Company", value: "{chart>Company}"},
				              ],
				              measures : [
				                          {group: 1, name : "Revenue", value : "{chart>Revenue}"},
				                          {group: 2, name : "Measure", value : "{chart>Measure}"}
				                          ],
				                          data : {
				                        	  path : "chart>/data"
				                          }
		};

		var oDataset = new sap.viz.core.FlattenedDataset(a1a2m1m2Data);
		var oModel = new sap.ui.model.json.JSONModel(a1a2m1m2m3Model);
		oDataset.setModel(oModel, "chart");


		var oDualChart = new sap.viz.ui5.DualBar(
				{
					id: "dualbar",
					width : "80%",
					height : "400px",
					title: {
						visible : true,
						text : 'Profit & Measure By Region & Customer'
					},
					dataset: oDataset
				});*/



		//********************************************************************************
		//********************************************************************************
		//********************************************************************************

		//https://sapui5.netweaver.ondemand.com/test-resources/sap/viz/VIZFrame.html 
		// Prepare business data
		/*var oModel = new sap.ui.model.json.JSONModel({
			'businessData' : [{
				'Country' : "Canada",
				'profit' : -141.25
			}, {
				'Country' : "China",
				'profit' : 133.82
			}, {
				'Country' : "France",
				'profit' : 348.76
			}, {
				'Country' : "Germany",
				'profit' : 217.29
			}, {
				'Country' : "India",
				'profit' : 117.00
			}, {
				'Country' : "United States",
				'profit' : 609.16
			}]
		});*/

		// A Dataset defines how the model data is mapped to the chart
		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
			// a Bar Chart requires exactly one dimension (x-axis)
			'dimensions' : [{
				'name' : 'Country',
				'value' : "{Country}"
			}],
			// it can show multiple measures, each results in a new set of bars in a new color
			'measures' : [
			              // measure 1
			              {
			            	  'name' : 'Profit', // 'name' is used as label in the Legend
			            	  'value' : '{profit}' // 'value' defines the binding for the displayed value
			              }],
			              // 'data' is used to bind the whole data collection that is to be displayed in the chart
			              'data' : {
			            	  'path' : "/businessData"
			              }
		}).bindData("salesModel>/businessData");
		
		// create a VizFrame
		var oVizFrame = new sap.viz.ui5.controls.VizFrame({
			'uiConfig' : {
				'applicationSet': 'fiori'
			},
			'vizType' : 'bar' 
				//Supported chart types: bubble, combination, column, bar, line, stacked_bar, stacked_column, bullet, vertical_bullet, timebubble.
		});				

		// attach the model to the chart and display it
		oVizFrame.setDataset(oDataset);
		//oVizFrame.setModel(oModel);

		// set feeds
		var feedPrimaryValues = new sap.viz.ui5.controls.common.feeds.FeedItem({
			'uid' : "primaryValues",
			'type' : "Measure",
			'values' : ["Profit"]
		}), feedAxisLabels = new sap.viz.ui5.controls.common.feeds.FeedItem({
			'uid' : "axisLabels",
			'type' : "Dimension",
			'values' : ["Country"]
		});

		oVizFrame.addFeed(feedPrimaryValues);
		oVizFrame.addFeed(feedAxisLabels);

		oVizFrame.attachSelectData(function(event) {
			var data = event.getParameter('data');
			for (var i = 0; i < data.length; i++) {
				console.log(oDataset.findContext(data[i].data))
			}
		});

		var properties = {
				'legend' : {'visible' : true},
		};
		var scales = [{
			'feed': 'primaryValues',
			'palette': ['#ff0000']
		}];

		var customizations = {id:"sap.viz.custom",customOverlayProperties: {}};

		/*var FeedItem = sap.viz.ui5.controls.common.feeds.FeedItem;
		var feeds = [
		             new FeedItem({'uid' : 'primaryValues',
		            	 'type' : 'Measure',
		            	 'values' []}),
		            	 new FeedItem({'uid' : 'regionColor',
		            		 'type' : 'Dimension',
		            		 'values' []})];*/

		oVizFrame.setVizScales(scales);

		oVizFrame.vizUpdate({
			//'data' : data,
			'properties' : properties,
			'scales' : scales,
			'customizations' : customizations,
			//'feeds' : feeds
		});


		var chartPopover = new sap.viz.ui5.controls.Popover({});
		chartPopover.connect(oVizFrame.getVizUid());

		//chart types: bubble, combination, column, bar, line, stacked_bar, stacked_column, bullet, vertical_bullet, timebubble.

		var oBtbub = new sap.m.Button(	{text:"bubble",  		press: function() { oVizFrame.setVizType(this.getText())}   		});
		var oBt1   = new sap.m.Button(	{text:"combination", 	press: function() { oVizFrame.setVizType(this.getText())}   		});
		var oBt2   = new sap.m.Button(	{text:"column",  		press: function() { oVizFrame.setVizType(this.getText())}   		});
		var oBt3   = new sap.m.Button(	{text:"bar",  			press: function() { oVizFrame.setVizType(this.getText())}   		});
		var oBt4   = new sap.m.Button(	{text:"line",  			press: function() { oVizFrame.setVizType(this.getText())}   		});
		var oBt5   = new sap.m.Button(	{text:"stacked_bar",  	press: function() { oVizFrame.setVizType(this.getText())}   		});
		var oBt6   = new sap.m.Button(	{text:"stacked_column", press: function() { oVizFrame.setVizType(this.getText())}   		});
		var oBt7   = new sap.m.Button(	{text:"bullet",  		press: function() { oVizFrame.setVizType(this.getText())}   		});
		var oBt8   = new sap.m.Button(	{text:"vertical_bullet",press: function() { oVizFrame.setVizType(this.getText())}   		});
		var oBt9   = new sap.m.Button(	{text:"timebubble",  	press: function() { oVizFrame.setVizType(this.getText())}   		});
		 



		var oChart = new sap.makit.Chart({
			height: "50%", 
			width:  "100%", 
			category: sap.makit.Category({column: "year"}),
			series: new sap.makit.Series({	column : "Country", }),
			values: [new sap.makit.Value({ expression: "profit", format: "number"   })],
			categoryAxis: new sap.makit.CategoryAxis({color : "blue", displayLastLabel : true, }),
			valueBubble: new sap.makit.ValueBubble({ showCategoryText : true, style : sap.makit.ValueBubbleStyle.FloatTop, 	}),
		});



		oChart.addColumn(new sap.makit.Column({name : "year",    value: "{salesModel>year}"}) );
		oChart.addColumn(new sap.makit.Column({name : "Country", value: "{salesModel>Country}"}) );
		oChart.addColumn(new sap.makit.Column({name : "profit",  value: "{salesModel>profit}", type: "number"}) );
		oChart.bindRows("salesModel>/businessData")

		var otxtCL = new sap.m.Text({ text : "Below you can see the data displayed in the chart", })

		var oTableData = new sap.ui.table.Table({id : "idTableSales", 		});

		oTableData.bindColumns('salesModel>/columns', function(sId, oContext) {
			var sColumnId = oContext.getObject().header;
			return new sap.ui.table.Column({
				id: sColumnId,
				width: "{salesModel>width}", 
				label: sColumnId,

				template: new sap.m.Input({"value" : {path: "salesModel>" + sColumnId} , editable: false , readOnly : false }),

				sortProperty: sColumnId,
				filterProperty: sColumnId
			});
		});

		oTableData.setEditable(true);


		/*
		oTableData.addColumn(new sap.ui.table.Column({label: "Year", value: "salesModel>Year"}));
		oTableData.addColumn(new sap.ui.table.Column({
			label : new sap.m.Label({	text : "Country" }),
			template : new sap.m.Text({ text : { path : "salesModel>Country" 	}	}),
			width : "40%"
		}));			
		oTableData.addColumn(new sap.ui.table.Column({label: "Country"}));
		oTableData.addColumn(new sap.ui.table.Column({label: "Profit"}));
		 */

		oTableData.bindRows("salesModel>/businessData");

		//  new sap.m.Input({value="{clone>width}", description="{clone>header}"})

		/* oTableData.bindAggregation("items", {
	        path: "salesModel>/businessData",
	        template: new sap.m.ColumnListItem({
	            cells: [   new sap.m.Label({ text: "{salesModel>year}" }),
	                       new sap.m.Label({ text: "{salesModel>Country}" })         ]
	        })
	    });	*/



		var centerLayout = new sap.m.VBox( { items:[  oTableData ]   });
		centerLayout.setAlignItems("Center");
		centerLayout.setJustifyContent("Center");
		//Footer
		var oFooter = new sap.m.OverflowToolbar({
			//height : "20px", // sap.ui.core.CSSSize
			design : sap.m.ToolbarDesign.Auto, // sap.m.ToolbarDesign, since 1.16.8
			tooltip : undefined, // sap.ui.core.TooltipBase
			content : [	new sap.m.ToolbarSpacer(),
			           	new sap.m.Button({ text : "", icon : "sap-icon://edit",
			           		press :  function() { 
			           			var rows = oTableData.getRows(); 
			           			var cells;
			           			for(var i in rows )
			           			{	
			           				cells = rows[i].getCells();
			           				for(var j in cells )	
			           				{	
			           					var editable = cells[j].getEditable();
				  						cells[j].setEditable(!editable);
			           					
			           				}
			           			}
			           		} }),
			           		], 
		});			


		// create page
		this.page = new sap.m.Page({
			title : "Sales",
			footer :  oFooter ,
			//showNavButton : true,
			//navButtonTap : [ controller.navButtonTap, controller ],      
			content: [  oBtbub,oBt1,oBt2,oBt3,oBt4,oBt5,oBt6,oBt7,oBt8,oBt9, oVizFrame,
			           oChart,otxtCL, centerLayout   ] ,
		});

		return this.page;
	}
});
