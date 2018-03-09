$('#getSignUpCode').on('submit', function(e) {
  var that = $(this),
  url = that.attr('action'),
  type = that.attr('method');
  var email = $("#email").val();
  //hide the form to stop double submission
  $('#getCodeBtn').hide();

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
        $("#messages").append('<p class="text-center w-900">'+message+'</p>');
        $('#getSignUpCode').hide();
        $('#confirmSignUpCode').show();
      } else {
        $("#messages").empty();
        $("#messages").append('<p class="text-center w-900">'+message+'</p>');

        //hide the submit button to prevent multiple submissions
        $('#getSignUpCode').show();

        //display the working spinner
        $('#showSpinner').hide();
      }
    }
  });

  return false;
});

$('#confirmSignUpCode').on('submit', function(e) {
  var that = $(this),
  url = that.attr('action'),
  type = that.attr('method');
  var code = [$("#code1").val(), $("#code2").val(), $("#code3").val(), $("#code4").val(), $("#code5").val(), $("#code6").val()];

  //hide the submit button to prevent multiple submissions
  $('#confirmCodeBtn').hide();

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
    data: {code: code},
    success: function(response) {
      $('#email').val('');
      var error_code = response.error_code;
      var message = response.message;
      if(error_code == 1) {
        $("#messages").empty();
        $("#messages").append('<p class="text-center w-900">'+message+'</p>');
        //hide the working spinner
        $('#showSpinner').hide();
        //display the confirm icon
        $('#showCompleted').show();

        //redirect to build team after 2 seconds
        if (response.redirect == true && response.redirect) {
          window.setTimeout(function() {
            window.location.href = response.redirect_url;
          }, 2000);
        }
      } else {
        $("#messages").empty();
        $("#messages").append('<p class="text-center w-900">'+message+'</p>');
        //hide the working spinner
        $('#showSpinner').hide();
        //display the confirm icon
        $('#showCompleted').hide();
        //show the submit button to try again
        $('#confirmCodeBtn').show();
      }
    }
  });

  return false;
});