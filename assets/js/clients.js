/** Toggle **/
	$("#addClientToggle").click(function(){
		$("#showAllClient").hide();
		$("#searchClient").hide();
		$("#paginator").hide();
	  	$("#addClientDiv").show();
	  	$("#clientTitle").show();

	  	$("#removeClientTitle").hide();
		$("#removeClientDiv").hide();
	});

	$("#viewClientToggle").click(function(){
		$("#showAllClient").show();
		$("#paginator").show();
		$("#searchClient").show();
	  	$("#addClientDiv").hide();
	  	$("#clientTitle").hide();

	  	$("#removeClientTitle").hide();
		$("#removeClientDiv").hide();
	});

	$("#removeClientToggle").click(function(){
		$("#removeClientTitle").show();
		$("#removeClientDiv").show();
		$("#paginator").hide();
		$("#showAllClient").hide();
	  	$("#addClientDiv").hide();
	  	$("#clientTitle").hide();
	  	$("#searchClient").hide();
	});

	$("#editClientToggle").click(function(){
		$("#removeClientTitle").show();
		$("#backToggle").show();
		$("#editClientForm").show();

		$("#clientData").hide();
		$("#editClientToggle").hide();
	});

	$("#backToggle").click(function(){
		$("#removeClientTitle").hide();
		$("#backToggle").hide();
		$("#editClientForm").hide();
		
		$("#clientData").show();
		$("#editClientToggle").show();
	});
/** Ends... **/

/**Add client**/
	/*$('#addClientForm').on('submit', function(e) {
		var that = $(this),
		url = that.attr('action'),
		method = that.attr('method');
	  	var agency_id = $("#agency_id").val();
	  	var name = $("#name").val();
	  	var email = $("#email").val();
	  	var postcode = $("#postcode").val();
	  	var address = $("#address").val();
	  	var phone = $("#phone").val();
	  	var logo = $("#logo").val();

	  	//hide wizards
		$('#addClientDiv').hide();
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
	      	data: {agency_id: agency_id, email: email, name: name, address: address, phone: phone, postcode: postcode, logo: logo},
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
		          	$('#addClientDiv').show();
		          	//remove the working spinner
		          	$('#showSpinner').hide();
		        }
	      	}
	    });

		return false;
	});*/
/** Ends... **/