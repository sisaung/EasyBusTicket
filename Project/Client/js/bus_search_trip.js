$(document).ready(function() {
    $('#eye').click(function() {
      // alert("hello");
      $('#eye').removeClass("glyphicon glyphicon-eye-close").addClass("glyphicon glyphicon-eye-open");
      var pass=$("#pass");
      if(pass.attr("type")==="password"){
          $('#eye').removeClass("glyphicon glyphicon-eye-close").addClass("glyphicon glyphicon-eye-open");
          pass.attr("type","text");
      }
      else{
        $('#eye').removeClass("glyphicon glyphicon-eye-open").addClass("glyphicon glyphicon-eye-close");
        pass.attr("type","password");
      }
});
});

function login(){
  var email = $('#email').val();
  var pass = $('#pass').val();
  // var email=document.getElementById('email').value;
  // var password=documen
  t.getElementById('pass').value;
  // console.log(email);
  // console.log(pass);

  $.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    url: "http://localhost:8000/Register/",
    dataType: "json",
  }).then(function(data){
    // alert(data[0].email);
    // alert(data[0].password);
    for(i=0; i<data.length; i++){
        // alert(data[i].email+data[i].password);
      if(data[i].Email == email && data[i].password == pass){
        // alert("You r log in");
        location.href="hello.html";
      }
      else{
        alert("Plese try agian.");
      }
    }
  });
};


function Create() {
  var firstname=$("#first_name").val();
  var lastname=$("#last_name").val();
  var email=$("#email").val();
  var password=$("#pass").val();
  var confirm_password=$("#confirm_pass").val();

  console.log(firstname);
  console.log(lastname);
  console.log(email);
  console.log(password);
  console.log(confirm_password);


  if(firstname != "" && lastname != "" && email != "" && password != "" && confirm_password !="")
  {
  var postData = {
    "first_name": firstname,
    "last_name": lastname,
    "Email": email,
    "password": password,
    "confirm_password":confirm_password,
  };
    // console.log(postData.first_name);
  $.ajax({
    type: "POST",
    contentType : "application/json; charset=utf-8",
    url : "http://127.0.0.1:8000/Register/",
    data : JSON.stringify(postData),
    dataType: "json",
    success: function(){
      location.href="index.html";
    }
  });
}
  else
  {
  alert("Please fill out this fields.");
  }
}

$(document).ready(function(){
$('#submit').on('click',function(){
  var user_name =$("#traveller_name").val();
  var email = $("#email").val();
  var phone_no = $("#phone_no").val();
  var gender = $("#gender").val();
  var note = $("#note").val();

  console.log(traveller_name);
  console.log(gender);
  console.log(email);
  console.log(phone_no);
  console.log(note);

  if(user_name!=="" && email!=="" && phone_no!=="" && gender!=="" && note!=="")
  {
    var postData = {
      "user_name": user_name,
      "email": email,
      "phone_no": phone_no,
      "gender": gender,
      "note": note
    };
    $.ajax({
      type: "POST",
      contentType : "application/json; charset=utf-8",
      url : "http://localhost:8000/User_Info/",
      data : JSON.stringify(postData),
      dataType: "json",
      // headers: {'Access-Control-Allow-Origin':  'http://localhost/8000/Travel_Info'},
      success: function(){
        location.href="user_info.html";
      }
    });
  }
  else {
      alert("Please fill out this fields.");
  }

});
});


$(document).ready(function(){
 $('#sub').on('click',function(){
	var traveller_name =$("#traveller_name").val();
	var email = $("#email").val();
	var phone_no = $("#phone_no").val();
	var message = $("#message").val();

	console.log(traveller_name);
	console.log(email);
	console.log(phone_no);
	console.log(message);

	if(traveller_name!=="" && email!=="" && phone_no!=="" && message!=="")
	{
		var postData = {
			"traveller_name": traveller_name,
			"Email": email,
			"phone_no": phone_no,
			"message": message
		};
		$.ajax({
			type: "POST",
			contentType : "application/json; charset=utf-8",
			url : "http://localhost:8000/Contact_Us/",
			data : JSON.stringify(postData),
			dataType: "json",
			// headers: {'Access-Control-Allow-Origin':  'http://localhost/8000/Travel_Info'},
			success: function(){
				location.href="contact.html";
			}
		});
	}
	else {
			alert("Please fill out this fields.");
	}

});
});

$(document).ready(function(){
 $('#search').on('click',function(){
   $("#sourceId").val()==" "
 });
});

$(document).ready(function () {
      $('select').selectize({
          sortField: 'text'
      });
  });
