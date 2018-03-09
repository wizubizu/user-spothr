$('#createAccountForm').on('submit', function(e) {
  var that = $(this),
  url = that.attr('action'),
  method = that.attr('method');
  var type = $("#type").val();
  var email = $("#email").val();
  var name = $("#name").val();
  var password = $("#password").val();
  var password_confirm = $("#password_confirm").val();
  var phone = $("#phone").val();

  //hide both wizards
  $('#createAccountDiv').hide();
  //ends...

  //display the working spinner
  $('#showSpinner').show();
  if(password === password_confirm)
  {
    $.ajaxSetup({
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
      }
    });

    $.ajax({
      url: url,
      type: method,
      data: {type: type, email: email, name: name, password: password, phone: phone, password_confirm: password_confirm},
      success: function(response) {
        var error_code = response.error_code;
        var message = response.message;
        if(error_code == 1) {
          $("#messages").empty();
          
          $("#messages").append('<p class="text-center w-900">'+message+'</p>');
          //remove the working spinner
          $('#showSpinner').hide();

          //show the next wizard.
          $('#createAgencyDiv').show();
          $("#creator_id").val(response.creator_id);
        } else {
          $("#messages").empty();
          $("#messages").append('<p class="text-center w-900">'+message+'</p>');

          //hide both wizards
            $('#createAccountDiv').show();
          //ends...

          //remove the working spinner
          $('#showSpinner').hide();
        }
      }
    });
  } else {
    $("#messages").empty();
    $("#messages").append('<p class="text-center w-900">Your passwords must match!</p>');

    $('#createAccountDiv').show();
    $('#showSpinner').hide();
  }

  return false;
});

$('#createAgencyForm').on('submit', function(e) {
  var that = $(this),
  url = that.attr('action'),
  method = that.attr('method');
  var creator_id = $("#creator_id").val();
  var email = $("#company_email").val();
  var name = $("#company_name").val();
  var postcode = $("#postcode").val();
  var address = $("#address").val();
  var phone = $("#phone").val();
  var country = $("#country").val();

  //hide both wizards
  $('#createAgencyDiv').hide();
  //ends...

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
      data: {creator_id: creator_id, company_email: email, company_name: name, postcode: postcode, phone: phone, address: address, country: country},
      success: function(response) {
        var error_code = response.error_code;
        var message = response.message;
        if(error_code == 1) {
          $("#messages").empty();
          
          $("#messages").append('<p class="text-center w-900">'+message+'</p>');
          //remove the working spinner
          $('#showSpinner').hide();

          $('#showCompleted').show();

          if(response.redirect === true)
          {
            //redirect to build team after 3 seconds
            window.setTimeout(function() {
              window.location.href = response.redirect_url;
            }, 3000);
          }
        } else {
          $("#messages").empty();
          $("#messages").append('<p class="text-center w-900">'+message+'</p>');

          //hide both wizards
            $('#createAgencyDiv').show();
          //ends...

          //remove the working spinner
          $('#showSpinner').hide();
        }
      }
    });

  return false;
});