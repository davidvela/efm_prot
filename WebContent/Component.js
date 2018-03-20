jQuery.sap.declare("pdm_demo.Component");
jQuery.sap.require("pdm_demo.MyRouter");

sap.ui.core.UIComponent
.extend(
		"pdm_demo.Component",
		{
			metadata : {
				name : "PDM Demo App",
				version : "1.0",
				includes : [],
				dependencies : {
					libs : [ "sap.m", "sap.ui.layout" ],
					components : []
				},
				rootView : {
					viewName: "pdm_demo.view.App",
					type: "JS"
				}, 
				config : {
					resourceBundle : "i18n/messageBundle.properties",
					serviceConfig : {
						//name : "Northwind",
						//serviceUrl : "http://services.odata.org/V2/(S(sapuidemotdg))/OData/OData.svc/"
					}
				},
				routing : {
					config : {
						routerClass : pdm_demo.MyRouter,
						viewType : "JS",
						viewPath : "pdm_demo.view",
						targetAggregation : "detailPages",
						clearTarget : false
					},
					/*http://stackoverflow.com/questions/26342435/how-to-implement-the-multi-flow-pattern*/
					routes : [														          
					          {   pattern 	: "",
					         	  name 		: "_Login",
					        	  view 		: "Login",
					        	  targetAggregation: "pages",
					        	  targetControl : "idAppControl", },
					        	  {   pattern 	: "Select",
					        		  name 		: "_Select",
					        		  view 		: "Select",
					        		  targetAggregation: "pages",
					        		  targetControl : "idAppControl" 
					        	  },
					        	  //EDITOR
					        	  {   pattern :"Editor/{projectId}/",
					        		  name : "_Editor",
					        		  view : "EditorMini",
					        		  targetAggregation: "pages",
					        		  targetControl : "idAppControl" 
					        	  },
					        	  //PDM
					        	  {   pattern : "Products",
					        		  name : "_product_list",
					        		  view : "SplitContainer",
					        		  targetAggregation : "pages",
					        		  targetControl : "idAppControl",
					        		  subroutes : 
					        			  [{  pattern : "Products",
					        				  name : "main",
					        				  view : "Sp_Master",
					        				  targetAggregation : "masterPages",
					        				  targetControl : "idSplitContainerControl",
					        				  subroutes : 
					        					  [{  pattern : "Products/{product}",
					        						  name 	: "product",
					        						  view 	: "Sp_Detail",
					        						  targetAggregation : "detailPages", 
					        					  },
					        					  {   pattern : "sales",
					        						  name 	: "Sales",
					        						  view 	: "Sp_SubViews.Sp_SvSales",
					        						  targetAggregation : "detailPages", 
					        					  },
					        					  {   pattern : "header",
					        						  name 	: "Header",
					        						  view 	: "Sp_SubViews.Sp_SvHeader",
					        						  targetAggregation : "detailPages", 
					        					  },
					        					  {   pattern : "recipe",
					        						  name 	: "Recipe",
					        						  view 	: "Sp_SubViews.Sp_SvFormula",
					        						  targetAggregation : "detailPages", 
					        					  },
					        					  {   pattern : "safety",
					        						  name 	: "Safety",
					        						  view 	: "Sp_SubViews.Sp_SvSafety",
					        						  targetAggregation : "detailPages", 
					        					  },
					        					  {   pattern : "fds",
					        						  name 	: "FDS",
					        						  view 	: "Sp_SubViews.Sp_SvSDS",
					        						  targetAggregation : "detailPages", 
					        					  },
					        					  {   pattern : "applic",
					        						  name 	: "Applications",
					        						  view 	: "Sp_SubViews.Sp_SvMaterialScope",
					        						  targetAggregation : "detailPages", 
					        					  },
					        					  /*{  pattern : "Products/{product}/:tab:",
														name : "product",
														view : "Sp_Detail",
														targetAggregation : "detailPages",
														//subroutes for the details.
														subroutes : 
														 [ {
														        pattern : "Products/{product}/:tab:/ProductPhotos",
														        name : "photos",
														        view : "ProductPhotos",
														        targetAggregation : "detailPages"
															     } ]
													 },*/
					        					  {
					        						  pattern : "Products/:all*:/NotFound",
					        						  name : "catchallDetail",
					        						  view : "NotFound",
					        						  targetAggregation : "detailPages"
					        					  }  ] //Master Subroutes
					        			  },

					        			  ]
					        	  },
					        	  {	  pattern : "Products/{product}/FullView",
					        		  name : "fullDetail",
					        		  view : "Sp_SDetail",
					        		  targetAggregation : "pages",
					        		  targetControl : "idAppControl",
					        	  },
					        	  /*{		  pattern : "Products/{product}/:tab:/ProductPhotos/TestNavView",
											  name : "navView",
										      view : "testNav.TestNavView",
											  targetAggregation : "pages",
											  targetControl : "idAppControl",
										},
										{
											  pattern : "AddProduct",
											  name : "productadd",
										      view : "AddProduct",
											  targetAggregation : "pages",
											  targetControl : "idAppControl",

										}// Products routes pattern*/
					        	  //EQ
					        	  {   pattern : "EQ",
					        		  name : "_eq_list",
					        		  view : "EQSplitContainer",
					        		  targetAggregation : "pages",
					        		  targetControl : "idAppControl",
					        		  subroutes : 
					        			  [	{ pattern : "EQ",
					        				  name : "questionnaires",
					        				  view : "EQSp_Master",
					        				  targetAggregation : "masterPages",
					        				  targetControl : "idEQSplitContainerControl",
					        				  subroutes : 
					        					  [ { pattern : "EQ/Questionnaires/{questionnaire}",
					        						  name 	: "questionnaire",
					        						  view 	: "EQSp_SMaster",
					        						  targetAggregation : "masterPages", 
					        						  subroutes : 
					        							  [ { pattern : "EQ/Questionnaires/{questionnaire}/Question/{question}",
					        								  name 	: "question",
					        								  view 	: "EQSp_Detail",
					        								  targetAggregation : "detailPages", 
					        							  },]
					        					  },]
					        			  } ]
					        	  }, ]
				}
			},



			init : function() {

				sap.ui.core.UIComponent.prototype.init.apply(this,
						arguments);

				var mConfig = this.getMetadata().getConfig();

				// always use absolute paths relative to our own
				// component
				// (relative paths will fail if running in the Fiori
				// Launchpad)
				var rootPath = jQuery.sap.getModulePath("pdm_demo");

				// set i18n model
				var i18nModel = new sap.ui.model.resource.ResourceModel(
						{
							bundleUrl : [ rootPath,
							              mConfig.resourceBundle ].join("/")
						});
				this.setModel(i18nModel, "i18n");

				// Create and set domain model to the component
				//var sServiceUrl = mConfig.serviceConfig.serviceUrl;
				//var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true);
				//var oModel = new sap.ui.model.json.JSONModel("model/clientes.json");
				//this.setModel(oModel);

				//***var oModelS = new sap.ui.model.json.JSONModel();
				// set the data for the model 
				//***oModelS.loadData("Model/screens.json");
				// assign the model globally to the core
				//sap.ui.getCore().setModel(oModel, "screens" );
				//sap.ui.getCore().byId("idAppControl").setModel(oModel,"screens");
				//****this.setModel(oModelS,"screens");

				// set device model
				var deviceModel = new sap.ui.model.json.JSONModel(
						{
							isTouch : sap.ui.Device.support.touch,
							isNoTouch : !sap.ui.Device.support.touch,
							isPhone : sap.ui.Device.system.phone,
							isNoPhone : !sap.ui.Device.system.phone,
							listMode : sap.ui.Device.system.phone ? "None"
									: "SingleSelectMaster",
									listItemType : sap.ui.Device.system.phone ? "Active"
											: "Inactive"
						});
				deviceModel.setDefaultBindingMode("OneWay");
				this.setModel(deviceModel, "device");

				this.getRouter().initialize();

			},
		});