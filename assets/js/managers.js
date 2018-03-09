/** Toggle **/
	$("#inviteManagerToggle").click(function(){
		$("#showAllManager").hide();
	  	$("#showAllTitle").hide();
		$("#paginator").hide();
		$("#showCompleted").hide();

	  	$("#inviteManagerDiv").show();
	  	$("#inviteManagerTitle").show();
	});

	$("#viewManagersToggle").click(function(){
		$("#showAllManager").show();
	  	$("#showAllTitle").show();
		$("#paginator").show();

	  	$("#inviteManagerDiv").hide();
	  	$("#inviteManagerTitle").hide();
	  	$("#showCompleted").hide();
	});
/** Ends... **/

/**Invite manager**/
	$('#inviteManagerForm').on('submit', function(e) {
		var that = $(this),
		url = that.attr('action'),
		method = that.attr('method');
	  	var agency_id = $("#agency_id").val();
	  	var email = $("#email").val();
	  	var agency = $("#agency").val();
	  	var role_id = $("#role_id").val();

	  	//hide wizards
		$('#inviteManagerDiv').hide();
		//display the working spinner
	  	$('#showSpinner').show();

	  	$.ajaxSetup({
	      headers: {
	        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
	      }
	    });

	    $.ajax({
	    	url: url,
	    	type: method,
	      	data: {agency_id: agency_id, email: email, agency: agency, role_id: role_id},
	      	success: function(response) {
		        var error_code = response.error_code;
		        var message = response.message;
		        if(error_code == 1) {
		          	$("#messages").empty();
		          
		          	$("#messages").append('<p class="text-center w-900">'+message+'</p>');
		          	//hide spinner
		          	$('#showSpinner').hide();

		          	$('#showCompleted').show();
		          	
		          	//clear the form data
		          	$('#inviteManagerForm')[0].reset();
		          	//reload page after 3 secs
		          	window.setTimeout(function(){location.reload()},3000)
		        } else {
		          	$("#messages").empty();
		          	$("#messages").append('<p class="text-center w-900">'+message+'</p>');
		          	//show wizards
		          	$('#inviteManagerDiv').show();
		          	//remove the working spinner
		          	$('#showSpinner').hide();
		        }
	      	}
	    });

		return false;
	});
/** Ends... **/