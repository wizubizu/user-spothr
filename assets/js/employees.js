/** Toggle **/
	$("#addEmployeeToggle").click(function(){
		$("#allEmployeeTitle").hide();
	  	$("#allEmployeeDiv").hide();
		$("#paginator").hide();
		$("#showCompleted").hide();

		$("#addEmployeeTitle").show();
	  	$("#addEmployeeDiv").show();
	});

	$("#allEmployeeToggle").click(function(){
		$("#allEmployeeTitle").show();
	  	$("#allEmployeeDiv").show();
		$("#paginator").show();

		$("#showCompleted").hide();
		$("#addEmployeeTitle").hide();
	  	$("#addEmployeeDiv").hide();
	});
/** Ends... **/

/**Add employee**/
	/*$('#addEmployeeForm').on('submit', function(e) {
		var that = $(this),
		url = that.attr('action'),
		method = that.attr('method');
	  	var agency_id = $("#agency_id").val();
	  	var name = $("#name").val();
	  	var email = $("#email").val();
	  	var postcode = $("#postcode").val();
	  	var address = $("#address").val();
	  	var phone = $("#phone").val();
	  	var code = $("#code").val();
	  	var upload_type = $("#upload_type").val();

	  	//hide wizards
		$('#addEmployeeDiv').hide();
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
	      	data: {agency_id: agency_id, email: email, name: name, address: address, phone: phone, postcode: postcode, code: code, upload_type: upload_type},
	      	dataType: 'json',
	      	contentType: false,
	      	processData: false,
	      	success: function(response) {
		        var error_code = response.error_code;
		        var message = response.message;
		        if(error_code == 1) {
		          	$("#messages").empty();
		          
		          	$("#messages").append('<p class="text-center w-900">'+message+'</p>');
		          	//hide spinner
		          	$('#showSpinner').hide();

		          	$('#showCompleted').show();
		        } else {
		          	$("#messages").empty();
		          	$("#messages").append('<p class="text-center w-900">'+message+'</p>');
		          	//show wizards
		          	$('#addEmployeeDiv').show();
		          	//remove the working spinner
		          	$('#showSpinner').hide();
		        }
	      	}
	    });

		return false;
	});*/
/** Ends... **/