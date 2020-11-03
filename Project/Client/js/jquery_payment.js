$(document).ready(function(){
  $("#success").click(function(){
    setTimeout("window.location.href='ticket.html'",1000);
      var test= JSON.parse(sessionStorage.getItem("sessionKey"));
      var traveller= JSON.parse(sessionStorage.getItem("traveller_session"));
      var seat = sessionStorage.getItem("seatValue");

  seatNumber=seat.split(",");
  seat_quantity=seatNumber.length;
  if(traveller[0] != "" && traveller[1] != "" && traveller[2] != "" &&  traveller[3] != "" && traveller[4] != "")
  {

  var ticketData = {
    "traveller_name": traveller[0],
    "gender": traveller[1],
    "email": traveller[2],
    "phone_no": traveller[3],
    "note": traveller[4],
    "busId": test[7],
    "busname": test[0],
    "route": test[5]+"-"+test[6],
    "depaturetime": test[1],
    "arrivaltime": test[2],
    "seatnumbers": seat,
    "subtotal": test[4],

  };
  // alert("ticketData");
  console.log(ticketData);

    $.ajax({
      type: "POST",
      contentType : "application/json; charset=utf-8",
      url : "http://127.0.0.1:8000/Sale_Tickets/",
      data : JSON.stringify(ticketData),
      dataType: "json",
      success: function(){
        // alert(seats);
        // alert("XXXXXXXXXXXXXXXXXXXX");

        BusSeatControl(test[7], seat_quantity);
        SelledSeats(test[7],seat);
        VoucherTicket();
      }
    });
 }
  else
  {
  alert("Please fill out this fields.");
  }
});
});

function BusSeatControl(bus_id, seat_quantity){
  $.ajax({
  type : "GET",
  contentType: "application/json; charset=utf-8",
  url : "http://127.0.0.1:8000/Operators/"+bus_id+"/",
  dataType: "json",
  success:function(data){
    total_seat=data.available_seat;
    console.log(total_seat);
    ReduceSeatQuantity(bus_id, seat_quantity,total_seat);
    console.log(seat_quantity);
  }
   });
 }

function ReduceSeatQuantity(bus_id, seat_quantity,total_seat){
    console.log(bus_id+"is bus id");
    console.log(seat_quantity+"is seat_quantity");
    console.log(total_seat+"tt");

    $.ajax({
        type: "PATCH",
        contentType: "application/json; charset=utf-8",
        url: "http://127.0.0.1:8000/Operators/"+bus_id+"/",
        data: JSON.stringify({"available_seat": total_seat - seat_quantity})
    });
  }

  function SelledSeats(bus_id,Seats){
    $.ajax({
    type : "GET",
    contentType: "application/json; charset=utf-8",
    url : "http://127.0.0.1:8000/Operators/"+bus_id+"/",
    dataType: "json",
    success:function(data){
      selled_seat=data.selled_seats;
      AddingSelledSeats(bus_id,Seats,selled_seat);
    }
     });
   }

   function AddingSelledSeats(bus_id, Seats,selled_seat){
     if (selled_seat=="") {
       $.ajax({
           type: "PATCH",
           contentType: "application/json; charset=utf-8",
           url: "http://127.0.0.1:8000/Operators/"+bus_id+"/",
           data: JSON.stringify({"selled_seats": Seats})
       });
     }
     else {
       $.ajax({
           type: "PATCH",
           contentType: "application/json; charset=utf-8",
           url: "http://127.0.0.1:8000/Operators/"+bus_id+"/",
           data: JSON.stringify({"selled_seats": selled_seat +","+ Seats})
       });
     }

     }

     function VoucherTicket(){
  $.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    url: "http://127.0.0.1:8000/Sale_Tickets/",
    dataType: "json",
  }).then(function(data){
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        var leaving = data[i].depaturetime;
        var arrival = data[i].arrivaltime;
        var traveller = data[i].traveller_name;
        var phone_number = data[i].phone_no;
        var seat_no = data[i].seatnumbers;
        var total = data[i].subtotal;


        var voucher = [leaving,arrival,traveller,phone_number,seat_no,total];
        sessionStorage.setItem("voucher_ticket", JSON.stringify(voucher));
    }
  });
}
  $(document).ready(function(){

         function AddMinutesToDate(date, minutes) {
        return new Date(date.getTime() + minutes*60000);
     }
     function DateFormat(date){
       var hours = date.getHours();
       var minutes = date.getMinutes();
       // var newformat = hours >= 12 ? 'PM' : 'AM';


                    // Find current hour in AM-PM Format
                    hours = hours % 12 ;

                    // To display "0" as "12"
                    hours = hours ? hours : 12;

                    minutes = minutes < 10 ? '0' + minutes : minutes;

       var strTime = hours + ':' + minutes;
       return strTime;

     }
     var now = new Date();

     var date_format = DateFormat(now);
     var next = AddMinutesToDate(now,5);
     console.log(DateFormat(next));
     var date_format_next = DateFormat(next);

     setTimeout("location.href='index.html'",600000);
     sessionStorage.setItem("time_limit_payment",date_format_next);
   });
