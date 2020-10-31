function Timeout() {
  var print_data= JSON.parse(sessionStorage.getItem("sessionKey"));
  var leave = $("#place").val();
  var go = $("#place1").val();
  var date = $("#departureDate").val();
  var phone = $("#phoneNumber").val();
  var route = leave +"-"+go;
  console.log(route);

  $.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    url: "http://127.0.0.1:8000/Sale_Tickets/",
    dataType: "json",
  }).then(function(data){
      for (var i = 0; i < data.length; i++) {
        var route_db = data[i].route;
        var bought_date = data[i].buyingdate;
        var phone_number_data = data[i].phone_no;
        console.log(route_db);


        if (bought_date == date &&  phone_number_data == phone) {
          var leaving = data[i].depaturetime;
          var arrival = data[i].arrivaltime;
          var traveller = data[i].traveller_name;
          var phone_number = data[i].phone_no;
          var seat_no = data[i].seatnumbers;
          var total = data[i].subtotal;
          var data_route = print_data[5] +"-"+print_data[6];


          var booking = [leaving,arrival,traveller,phone_number,seat_no,total];
          sessionStorage.setItem("order", JSON.stringify(booking));
          var history = ('<div class="panel panel-default"><div class="panel-body"><table class="table table-striped table-sm"><tbody><tr class="d-flex"><td class="col-4 text-myp">'+print_data[0]+
          '</td></tr><tr class="d-flex"><td class="col-4 text-myp">'+data_route+'</tr></td><tr class="d-flex"><td class="col-4 text-myp">'+bought_date+

          '<tr><td></tbody></table></div></div>');
          $("#order_ticket_find").html(history);

        }

        else{
          $("#order_ticket_find").html("<p style='color:red'>There is no booking found for the given search box. </p>")
        }

      }
  });

}
