/** Toggle **/
	$("#addSiteToggle").click(function(){
		$("#showAllSite").hide();
	  	$("#showAllTitle").hide();
		$("#paginator").hide();
		$("#showCompleted").hide();

	  	$("#addSiteDiv").show();
	  	$("#addSiteTitle").show();
	});

	$("#viewSitesToggle").click(function(){
		$("#showAllSite").show();
	  	$("#showAllTitle").show();
		$("#paginator").show();

	  	$("#addSiteDiv").hide();
	  	$("#addSiteTitle").hide();
	});
/** Ends... **/