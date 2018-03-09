/** Toggle **/
	$("#recoverPasswordToggle").click(function(){
		$("#loginDiv").hide();
	  	$("#recoverPasswordDiv").show();
	});

	$("#loginToggle").click(function(){
		$("#loginDiv").show();
	  	$("#recoverPasswordDiv").hide();
	});
/** Ends... **/

$('#recoverPasswordForm').on('submit', function(e) {
  var that = $(this),
  url = that.attr('action'),
  type = that.attr('method');
  var email = $("#recover-email").val();

  //hide the submit button to prevent multiple submissions
  $('#recoverPasswordForm').hide();

  //display the working spinner
  $('#showSpinner').show();
  
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
    }
  });
  $.ajax({
    url: url,
    type: type,
    data: {email: email},
    success: function(response) {
      $('#email').val('');
      var error_code = response.error_code;
      var message = response.message;
      if(error_code == 1) {
        $("#messages").empty();
        $("#messages").append('<p class="text-center w-900">'+message+'</p><br>');
        //hide the working spinner
        $('#showSpinner').hide();
        //show the form for another attempt
        $('#recoverPasswordForm').show();
      } else {
        $("#messages").empty();
        $("#messages").append('<p class="text-center w-900">'+message+'</p><br>');
        //hide the working spinner
        $('#showSpinner').hide();
        //show the form for another attempt
        $('#recoverPasswordForm').show();
      }
    }
  });

  return false;
});

$('#choosePasswordForm').on('submit', function(e) {
  var that = $(this),
  url = that.attr('action'),
  type = that.attr('method');
  var id = $("#user_id").val();
  var password = $("#password").val();
  var password_confirm = $("#password_confirm").val();

  if(password == password_confirm)
  {
    //hide the submit button to prevent multiple submissions
    $('#choosePasswordForm').hide();

    //display the working spinner
    $('#showSpinner').show();
    $.ajaxSetup({
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
      }
    });
    $.ajax({
      url: url,
      type: type,
      data: {password: password, user_id: id, password_confirm: password_confirm},
      success: function(response) {
        $('#email').val('');
        var error_code = response.error_code;
        var message = response.message;
        if(error_code == 1) {
          //hide the working spinner and the choose password container
          $('#choosePassword').hide();
          $('#showSpinner').hide();
          //show the form for another attempt
          $('#showCompleted').show();

          //redirect to build team after 2 seconds
          if (response.redirect !== undefined && response.redirect) {
            window.setTimeout(function() {
              window.location.href = response.redirect_url;
            }, 2000);
          }
        } else {
          $("#messages").empty();
          $("#messages").append('<p class="text-center w-900">'+message+'</p><br>');
          //hide the working spinner
          $('#showSpinner').hide();
          //show the form for another attempt
          $('#choosePasswordForm').show();
        }
      }
    });
  } else {
    $("#messages").empty();
    $("#messages").append('<p class="text-center w-900">Your password and confirm password must match</p><br>');
    //hide the working spinner
    $('#showSpinner').hide();
    //show the form for another attempt
    $('#choosePasswordForm').show();
  }

  return false;
});