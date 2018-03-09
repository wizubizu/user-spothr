/** Toggle **/
	$("#addJobToggle").click(function(){
		$("#showAllJob").hide();
	  	$("#showAllTitle").hide();
		$("#paginator").hide();
		$("#showCompleted").hide();

	  	$("#addJobDiv").show();
	  	$("#addJobTitle").show();
	});

	$("#viewJobsToggle").click(function(){
		$("#showAllJob").show();
	  	$("#showAllTitle").show();
		$("#paginator").show();

	  	$("#addJobDiv").hide();
	  	$("#addJobTitle").hide();
	});
/** Ends... **/