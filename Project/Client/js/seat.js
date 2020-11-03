 var selectedSeatNumbers = [];
var selectedSeatIDs = [];
var selectCount=0;
var maxSeats = $('#seat-table').attr('data-max-seats');



$(document).ready(function(){
  var operator=sessionStorage.getItem("operator_seat");
var test= JSON.parse(sessionStorage.getItem("sessionKey"));
  $.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    url: "http://localhost:8000/Operators/"+operator+"/",
    dataType: "json",
  }).then(function(data){
     BusId(data.id);
      routes_id=data.Routes_id;
      seats_id = data.Seats_id;
      clas_type = data.class_type;
      // console.log(clas_type);
      // console.log(routes_id);
      // console.log(seats_id);
      $("#tb").html("");
      if (clas_type == "Standard") {




            for ( var i = 0; i < 40; i++) {
              if (i == 0 || (i+1)%4 == 1) {
                $("#tb").append('<tr>');
              }

                var check_seat = seatCheck((i+1));
                if(check_seat == true){

                    $("#tb").append('<td><a class="seat seat-unavailable" href="#" ><span><i class="fa fa-lock" aria-hidden="true"></i></span></a></a></td>');
                }
                // var x=0;
                else {

                  $("#tb").append('<td><a class="seat seat-available" href="#" data-seat-number="'+(i+1)+'" data-seat-id="'+data.id+'" id="number_one"><span>'+ (i+1) +'</span></a></a></td>');
                }

               if((i+1)%4 == 0){
                  $("#tb").append('</tr>');
                }

            }

          }
      else if(clas_type == "VIP"){
        $("#tb").html("");



                  for ( var i = 0; i < 30; i++) {
                    if (i == 0 || (i+1)%3 == 1) {
                      $("#tb").append('<tr>');
                    }

                      var check_seat = seatCheck((i+1));
                      if(check_seat == true){

                          $("#tb").append('<td><a class="seat seat-unavailable" href="#" ><span><i class="fa fa-lock" aria-hidden="true"></i></span></a></a></td>');
                      }
                      // var x=0;
                      else {

                        $("#tb").append('<td><a class="seat seat-available" href="#" data-seat-number="'+(i+1)+'" data-seat-id="'+data.id+'" id="number_one"><span>'+ (i+1) +'</span></a></a></td>');
                      }

                     if((i+1)%3 == 0){
                        $("#tb").append('</tr>');
                      }

                  }


      }

      function BusId(bus_id){
        $.ajax({
             type : "GET",
             contentType: "application/json; charset=utf-8",
             url : "http://127.0.0.1:8000/Operators/"+bus_id+"/",
             dataType: "json",
             success:function(data){
               seat=data.selled_seats;
               // seatNumber=seat.split(",");
               // console.log(seatNumber);
               // location.reload();
               var jsonStr =seat; //insert some json data here
               sessionStorage.setItem("myJson", JSON.stringify(jsonStr));

             }

           });
      }

      function seatCheck(seat){

        if (sessionStorage.getItem("myJson") !== null) {
              var passedJson = sessionStorage.getItem("myJson"); //get saved data anytime

          }

          var arr=passedJson.replace(/['"]+/g, '');

          seatArr = arr.split(",");

          console.log(seatArr);
          console.log(seatArr.length);
        for (var i = 0; i < seatArr.length; i++) {
          if(seat == seatArr[i]){
            return true;
          }
          if(i == seatArr.length-1){
            return false;
          }
        }
      }


      $('.seat-available').click(function(){

        var seatId = $(this).attr('data-seat-id');
        var seatNumber = $(this).attr('data-seat-number');

          // var seat=sessionStorage.getItem("valid");
          // seat=parseInt(seat);

          var seat=JSON.parse(sessionStorage.getItem("sessionKey"));
          seat=parseInt(seat[3]);
          console.log(seat);

        if($(this).hasClass("seat-selected")) {
          selectedSeatNumbers.splice( $.inArray(seatNumber, selectedSeatNumbers),1 );
          selectedSeatIDs.splice( $.inArray(seatId, selectedSeatIDs), 1 );
              $(this).removeClass("seat-selected");

          // $("#selectedSeatNumbers").text(selectedSeatNumbers.join(", "));
            // selectCount--;


        } else {

            if(selectedSeatNumbers.length < seat) {
                       selectedSeatNumbers.push(seatNumber);
                       selectedSeatIDs.push(seatId);
                         $(this).addClass("seat-selected");

                             // selectCount++;
          }
        }
          var ss=$("input#seatIDs").val(selectedSeatIDs.join());


      $("#selectedSeatNumbers").text(selectedSeatNumbers.join(","));
        // console.log(ss);
        if(selectedSeatIDs.length != seat) {
                $('#seatSelectionSubmitButton').prop('disabled', true);
           } else {
               $('#seatSelectionSubmitButton').prop('disabled', false);
           }
        // if(selectCount>seat){
        //
        // }
        sessionStorage.setItem("seatValue",selectedSeatNumbers);
    });
});
});
