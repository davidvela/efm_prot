sap.ui.jsview("pdm_demo.view.Sp_SubViews.Sp_SvSDS", {
	getControllerName: function() {
		return "pdm_demo.view.Sp_SubViews.Sp_SvSDS";
	},

	onBeforeShow : function(evt) {
		this.getController().onBeforeShow(evt);
	},

	createContent : function(controller) {
		  var html = new sap.ui.core.HTML();  
          html.setContent("<div id=\"divPdf\"><iframe id='pdfFrame'  width= '100%' style=\"height:95%; \"></iframe>");  

          return new sap.m.Page({  
                title : "Product Data Sheet",  
                //showNavButton : true,  
               // navButtonPress : oController.fnGoback,  
                content : [ html ],  
                });
	}
});