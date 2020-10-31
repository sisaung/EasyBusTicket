function Contact(){
  var name = $("#name-form4-24").val();
  var phone = $("#phone-form4-24").val();
  var email = $("#email-form4-24").val();
  var message = $("#message-form4-24").val();

  if(name != "" && phone != "" && email != "" && message != "")
  {
  var postData = {
    "traveller_name": name,
    "email": email,
    "phone": phone,
    "message": message,

  };
    console.log(postData);
  $.ajax({
    type: "POST",
    contentType : "application/json; charset=utf-8",
    url : "http://127.0.0.1:8000/Contact/",
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
