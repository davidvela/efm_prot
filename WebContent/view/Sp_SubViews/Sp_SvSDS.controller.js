
sap.ui.controller("pdm_demo.view.Sp_SubViews.Sp_SvSDS", {
	onInit : function() {
		
		
		
	},

	onBeforeShow : function(evt) {
		this.onBeforeRendering();
		
		if (evt.data.context) {
			this.getView().setBindingContext(evt.data.context);
		} 
	},


	/**
	* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	* (NOT before the first rendering! onInit() is used for that one!).
	* @memberOf pdfdisplay.pdf
	*/
		onBeforeRendering: function() {
			var pdfUrl; // = "http://brainlens.org/content/newsletters/Spring%202013.pdf";
			//var pdfUrl = "./LocalFiles/{material>/sdspath}";
			
			var matId = sap.ui.getCore().materialId;
			switch (matId) {
			case "123456":
				pdfUrl = "./LocalFiles/123456-apple-pie.pdf";
				break;
			case "201207":
				pdfUrl = "./LocalFiles/201207-Strawberry.pdf";
				break;
			default:
				break;
			}
			
			
			$("#pdfFrame").attr("src",pdfUrl);
			
			$(function(){
				if(/iPhone|iPod|iPad/.test(navigator.userAgent))
					{
					$("#divPdf").css({
						'overflow':'scroll',
						'width':'100%',
						'height': isNaN(window.innerHeight)?window.clientHeight :window.innerHeight,
						'position':'absolute',
						'-webkit-overflow-scrolling':'touch',
					});				
					}
				else
					{
					$("#divPdf").css({
						'overflow':'scroll',
						'width':'100%',
						'height': isNaN(window.innerHeight)?window.clientHeight :window.innerHeight,
						'position':'absolute',
						'-webkit-overflow-scrolling':'auto',
					});
					
					}
				
				
			});		
		},

	/**
	* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	* This hook is the same one that SAPUI5 controls get after being rendered.
	* @memberOf pdfdisplay.pdf
	*/
		onAfterRendering: function() {
			var delay = function pausecomp(millis) 
			{
			var date = new Date();
			var curDate = null;

			do { curDate = new Date(); } 
			while(curDate-date < millis);
			};
			
			delay(1000);
			
			var pdfUrl; // = "http://brainlens.org/content/newsletters/Spring%202013.pdf";
			//var pdfUrl = "./LocalFiles/{material>/sdspath}";
			
			var matId = sap.ui.getCore().materialId;
			switch (matId) {
			case "123456":
				pdfUrl = "./LocalFiles/123456-apple-pie.pdf";
				break;
			case "201207":
				pdfUrl = "./LocalFiles/201207-Strawberry.pdf";
				break;
			default:
				break;
			}
			

			
			$("#pdfFrame").attr("src",pdfUrl);
			
			$(function(){
				if(/iPhone|iPod|iPad/.test(navigator.userAgent))
					{
					$("#divPdf").css({
						'overflow':'scroll',
						'width':'100%',
						'height': isNaN(window.innerHeight)?window.clientHeight :window.innerHeight,
						'position':'absolute',
						'-webkit-overflow-scrolling':'touch',
					});				
					}
				else
					{
					$("#divPdf").css({
						'overflow':'scroll',
						'width':'100%',
						'height': isNaN(window.innerHeight)?window.clientHeight :window.innerHeight,
						'position':'absolute',
						'-webkit-overflow-scrolling':'auto',
					});
					
					}
				
				
			});
		},



});
