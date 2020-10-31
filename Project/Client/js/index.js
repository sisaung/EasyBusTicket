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


  $.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    url: "http://localhost:8000/Register/",
    dataType: "json",
  }).then(function(data){
    // alert(data[0].email);
    // alert(data[0].password);
    for(i=0; i<data.length; i++){
      
      if(data[i].Email == email && data[i].password == pass){

        location.href="hello.html";
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
