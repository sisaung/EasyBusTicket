$(document).ready(function(){

  var seat=JSON.parse(sessionStorage.getItem("sessionKey"));
  seat=parseInt(seat[3]);

  if(seat>1){

    options = '<option value="">--- Select ---</option>'+
              '<option class="text-my" value="MALE_ONLY">Male Group</option>'+
              '<option class="text_my" value="FEMALE_ONLY">Male Group</option>'+
              '<option class="text_my" value="MIXED">Mixed</option>';
    $("#gender").html(options);


}
  else{
    options = '<option value="">--- Select ---</option>'+
              '<option class="text-my" value="MALE_ONLY">Male </option>'+
              '<option class="text_my" value="FEMALE_ONLY">Female </option>'
              
    $("#gender").html(options);
  }

$("#traveller-info-submit-button").click(function(){
  var name = document.getElementById('name').value;
  var gender = document.getElementById('gender').value;
  var email = document.getElementById('email').value;
  var phone_number = document.getElementById('phoneNumber').value;
  var message = document.getElementById('specialRequest').value;
  var traveller_value = [name,gender,email,phone_number,message];
  sessionStorage.setItem("traveller_session", JSON.stringify(traveller_value));


});
});
// });
