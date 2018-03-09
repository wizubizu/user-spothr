/** Toggle **/
	$("#addEmployeesToggle").click(function(){
		$("#createShiftSection").hide();
	  	$("#addEmployeeSection").show();
	});

	$("#viewSitesToggle").click(function(){
		$("#addEmployeeSection").show();
	  	$("#createShiftSection").hide();
	});

	$("#shiftCancelRequestsToggle").click(function(){
		$("#shiftCancelRequests").show();
	  	$("#shiftDetailToggle").show();

	  	$("#shiftDetail").hide();
	  	$("#shiftApplications").hide();
	  	$("#assignedEmployees").hide();
	});

	$("#shiftApplicationsToggle").click(function(){
	  	$("#shiftApplications").show();
	  	$("#shiftDetailToggle").show();
	  	
	  	$("#shiftDetail").hide();
		$("#shiftCancelRequests").hide();
	  	$("#assignedEmployees").hide();
	});

	$("#assignedEmployeesToggle").click(function(){
	  	$("#assignedEmployees").show();
	  	$("#shiftDetailToggle").show();
	  	
	  	$("#shiftDetail").hide();
	  	$("#shiftApplications").hide();
		$("#shiftCancelRequests").hide();
	});

	$("#shiftDetailToggle").click(function(){
		$("#shiftDetail").show();
	  	
	  	$("#shiftCancelRequests").hide();
	  	$("#shiftApplications").hide();
	  	$("#assignedEmployees").hide();
	  	$("#shiftDetailToggle").hide();
	});
/** Ends... **/

/**Accept and decline shift cancel requests by employees**/
	function approveRequest(shift_id, title, user_id, request_id, action_url)
	{	
		//disable the buttons to prevent double data request.
		$("#approverequestBtn"+request_id).attr("disabled", "disabled");
		$("#declinerequestBtn"+request_id).attr("disabled", "disabled");


		$.ajaxSetup({
	    	headers: {
	      		'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
	    	}
	  	});
		
		$.ajax({
		    url: action_url,
		    type: "GET",
		    data: {shift_name: title, user_id: user_id, id: request_id},

		    success: function(response) {
		    	var message = response.message;
		    	var success = response.success;

		    	if(success == true)
		    	{
			    	$("#requestStatus"+request_id).replaceWith("<span class='label label-success label-xs'>approved</span>");
			    	$("#messages").empty();
	        		$("#messages").append('<p class="text-center p-t-3p w-900">'+message+'</p>');
		    	} else {
					//enable the buttons to they can try again.
					$("#approverequestBtn"+request_id).removeAttr("disabled");
					$("#declinerequestBtn"+request_id).removeAttr("disabled");

					/*$("#messages").empty();
	        		$("#messages").replaceWith('<p class="text-center w-900">'+message+'</p><br>');*/
		    	}
			},
		});

		return true;
	}

	function declineRequest(shift_id, title, user_id, request_id, action_url)
	{	
		//disable the buttons to prevent double data request.
		$("#approverequestBtn"+request_id).attr("disabled", "disabled");
		$("#declinerequestBtn"+request_id).attr("disabled", "disabled");


		$.ajaxSetup({
	    	headers: {
	      		'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
	    	}
	  	});
		
		$.ajax({
		    url: action_url,
		    type: "GET",
		    data: {shift_name: title, user_id: user_id, id: request_id},

		    success: function(response) {
		    	var message = response.message;
		    	var success = response.success;

		    	if(success == true)
		    	{
			    	$("#requestStatus"+request_id).replaceWith("<span class='label label-danger label-xs'>declined</span>");
			    	$("#messages").empty();
	        		$("#messages").append('<p class="text-center p-t-3p w-900">'+message+'</p>');
		    	} else {
					//enable the buttons to they can try again.
					$("#approverequestBtn"+request_id).removeAttr("disabled");
					$("#declinerequestBtn"+request_id).removeAttr("disabled");

					/*$("#messages").empty();
	        		$("#messages").replaceWith('<p class="text-center w-900">'+message+'</p><br>');*/
		    	}
			},
		});

		return true;
	}
/** Ends... **/