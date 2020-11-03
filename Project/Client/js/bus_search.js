$(document).ready(function(){

    // $("#departureDate").datepicker({
    //   minDate: 0
    // });


    $("#search").click(function(){
        var leave = $("#sourceId").val();
        var go = $("#goID").val();
        var date = $("#departureDate").val();
        var seatno=$("#seatID").val();
        var nationality=$("#nationalID").val();




          $.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            url: "http://127.0.0.1:8000/Operators/",
            dataType: "json",
          }).then(function(data){

            $('#radiobtn').html('');
            $('#trip').html('');
            data_operator_id=data.id;

            for(i=0; i<data.length; i++){


            operators_name= data[i].operators_name;
            // date=data[i].date;
            browse_route= data[i].browse_route;
            depature_time=data[i].depature_time;
            arrival_time=data[i].arrival_time;
            class_type = data[i].class_type;
            images=data[i].images;
            routes_id=data[i].Routes_id;
            time=data[i].day_night;

                for(j=0; j<routes_id.length; j++){
                  if(routes_id[j].source==leave && routes_id[j].destination==go && data[i].date==date ){

                  $('#radiobtn').append('<input id="operator_option_'+data[i].id+'" type="radio" name="operator_option" class="operator_option" value="'+data[i].id+'" ><label for="operator_option" >'+"&nbsp;"+operators_name+"</label></br>")
              $('#trip').append('<div id="result_trip" class="card mb-4 trip_result" data-time-period="'+time+'" data-operator-id="'+data[i].id+'"><div class="card-body"><div class="row"> <div class="col-md-6 col-12"><div class="text-bold text-dark" ><div class="lead" >'+depature_time+" - "+class_type+'</div></div>'+'<div class="mt-1">'+browse_route+'<div class="small" id="departurename">'+"Departs :"+depature_time+"</div>"+'<div class="small" id="arrivalname">'+"Arrives :"+arrival_time+"</div>"+'</div></div>'+'<div class="col-md-3 col-5 d-flex align-items-center"><div class="text-center">'+"<div id='opname'>"+operators_name+'</div></div></div>'+'<div class="col-md-3 col-7 text-right"><div class="lead text-success text-bold"><div class="lead text-success text-bold" id="subtotal">'+routes_id[j].price*seatno+" <small>MMK </small>"+'</div>'+'<div class="small">'+seatno+" Seats"+" x "+routes_id[j].price +'</div>'+'<button type="submit" class="btn btn-primary btn-search" id="select_seat" onclick="seatSelection('+data[i].id+');">Select Seat</button>'+'</div></div></div></div></div>')

                    }

              }


            }



      });
    });
});

function seatSelection(operator_id) {
  sessionStorage.setItem("operator_seat",operator_id);
  var leave = $("#sourceId").val();
  var go = $("#goID").val();
  var date = $("#departureDate").val();
  var seatno=$("#seatID").val();
  var nationality=$("#nationalID").val();
  var seat_number=$("#seatID").val();




  $.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    url: "http://127.0.0.1:8000/Operators/"+operator_id+"/",
    dataType: "json",
  }).then(function(data){
    routes_id=data.Routes_id;
    seats_id = data.Seats_id;


        for(var i=0; i<routes_id.length; i++){
        var price = routes_id[i].price*seat_number+" "+"MMK";
        var seat=document.getElementById('seatID').value;
        var routname=document.getElementById('sourceId').value;
        var routname1=document.getElementById('goID').value;
          location.href="test.html"
        var value=[data.operators_name,data.depature_time,data.arrival_time,seat,price,routname,routname1,operator_id];
        sessionStorage.setItem("sessionKey", JSON.stringify(value));

      }


  });





}
$(document).ready(function(){
    $('#preloader5').hide();

    var filterOperatorId = "";
    var filterTimePeriod = "";

    var filterFun = function() {
        // alert(filterTimePeriod + " | " + filterOperatorId);

        $( ".trip_result" ).each(function() {
            operatorId = $(this).attr('data-operator-id');
            timePeriod = $(this).attr('data-time-period');


            isOperatorMatched = true;

            if(filterOperatorId!= "") {

                isOperatorMatched = (filterOperatorId==operatorId);



            }

            isTimePeriodMatched = true;
            if(filterTimePeriod!="") {
                isTimePeriodMatched = (filterTimePeriod==timePeriod);
            }

            if(isOperatorMatched && isTimePeriodMatched) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }

    var progressiveFilterFun = function() {
        $('#preloader5').show();
            $('#trip').hide();
            setTimeout(function(){
                $('#preloader5').hide();
                filterFun();
                $('#trip').show();
            }, 500);
    };

    $( ".time_option" ).change(function() {
        filterTimePeriod = $("input[type='radio'].time_option:checked").val();
        progressiveFilterFun();
    });

    $( ".operator_option").change(function() {
        filterOperatorId=$("input[type='radio'].operator_option:checked").val();
        progressiveFilterFun();
        // console.log(filterOperatorId);



    });
});
