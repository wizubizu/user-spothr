/** Toggle **/
	$("#editProfileToggle").click(function(){
		$("#editAgencyTitle").hide();
		$("#agencyUpdateDiv").hide();

	  	$("#editProfileTitle").show();
	  	$("#userProfileDiv").show();
	});

	$("#editAgencyToggle").click(function(){
		$("#editAgencyTitle").show();
		$("#agencyUpdateDiv").show();

	  	$("#editProfileTitle").hide();
	  	$("#userProfileDiv").hide();
	});
/** Ends... **/