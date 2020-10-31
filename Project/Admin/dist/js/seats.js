// .......view list..........
$("#route_datatable").DataTable({
      "responsive": true,
      "autoWidth": false,
    });
    $(document).ready(function(){
      var datatable=$("#route_datatable").DataTable();
      var rowdata="";
      $.ajax({
      type : "GET",
      contentType: "application/json; charset=utf-8",
      url : "http://127.0.0.1:8000/Operators/",
      // data:{name:"pdlist"},
      dataType: "json",
      success:function(data){
      $("#add_whichbus").empty();
      for (let i=0; i<data.length; i++){
        let bid =data[i].id;
        operators_name=data[i].operators_name;
        operators_route=data[i].browse_route;
        let routes_id=data[i].Routes_id;
        datatable.row.add([
           rowdata+data[i].operators_name,
           rowdata+data[i].class_type,
           rowdata+data[i].date,
           rowdata+data[i].depature_time,
           rowdata+'<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addseatmodel" onclick="InsertDataIntSeatAddModal('+bid+');">Add Seats</button>',
           rowdata+'<button id="edit_route" class="btn btn-success" data-toggle="modal" data-target="#editRoute" onclick="InsertDataIntSeatUpdateModal('+bid+');"><i class="fas fa-info-circle"></i></button>',


        ]).draw(false);


      }
      }
    });
    });


// ....................................................................................................................

// $("#seat_list").DataTable({
//   "paging": false,
//   "lengthChange": false,
//   "searching": false,
//   "ordering": false,
//   "info": false,
//   "autoWidth": false,
//   "responsive": false,
//     });
// var routelist = null;
function InsertDataIntSeatUpdateModal(busid){
  // console.log(busid);
  // var routelist=$("#seat_list").DataTable();
  $('#busid').val(busid);
  // var routedata="";
	if(busid != "")
	{
		$.ajax({
			type: "GET",
			contentType: "application/json; charset=utf-8",
			url: "http://127.0.0.1:8000/Operators/"+busid+"/",
			dataType: "json",
		}).then(function(data){
      console.log(data.operators_name);
      let seatId=data.Seats_id;
       for(let i=0; i<10; i++){
         console.log(seatId[i].operators);
         console.log(seatId[i].id);
         seatnumber=seatId[i].seat_no;
            }
		});
	}
	else
	{
		alert("ID is null");
	}
};




// delete route..............................
function Deleteroute(){
	var id = $("#edit_routeid").val();
	if(id != "")
	{
		$.ajax({
			type : "DELETE",
			contentType : "application/json; charset=utf-8",
			url : "http://127.0.0.1:8000/Routes/"+id+"/",
			dataType: "json",
			success: function(){
				ClearRouteUpdateModal();
        console.log("success");
				// $('#showEmployee').click();
			}
		});
	}
	else
	{
		alert("Please insert employee ID");
	}
};

function ClearRouteUpdateModal(){
    $('editRoute').modal('hide');
}

// update.....................................

function EditSeat(){
  var id = $("#busid").val();
	var seat = $("#edit_seat_no").val();
	var source = $("#edit_status").val();

	if(id != "" && seat != "" && source != "" &&)
	{
		var putData = {
			"operators": bus,
			"source": source,
			"destination": destination,
			"price": price,
		};
		$.ajax({
			type : "PUT",
			contentType : "application/json; charset=utf-8",
			url : "http://127.0.0.1:8000/Routes/"+id+"/",
			data : JSON.stringify(putData),
			dataType: "json",
			success: function(){
        console.log("success update");
			}
		});
	}
	else
	{
		alert("Please insert data!");
	}
};

// .........................................................................

function InsertDataIntSeatAddModal(seatadd_id){
	if(seatadd_id != "")
	{
		$.ajax({
			type: "GET",
			contentType: "application/json; charset=utf-8",
			url: "http://127.0.0.1:8000/Operators/"+seatadd_id+"/",
			dataType: "json",
		}).then(function(data){
      console.log(data);
      for(let i=0; i<data.length; i++){
        // console.log(seatId[i].operators);
        // console.log(data[i].Seats_id;
        // seatnumber=seatId[i].seat_no;
           }
			$('#add_busid').val(data.id);
     //  $('#seat_alist').append("<tr>"+"<td> <button type='button' id='select_btn' class='btn btn-success' value='1' onclick='Addselect(this.value);'>"+"1"+"</button></td>"
     // +"<td> <button type='button' id='2' class='btn btn-success' value='2' onclick='Addselect(this.value);'>"+"2"+"</button></td>"
     // +"<td>"+"	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp;"+"</td>"
     // +"<td> <button type='button' id='select_btn' class='btn btn-success' value='3' onclick='Addselect(this.value);'>"+"3"+"</button></td>"
     // +"<td> <button type='button' id='select_btn' class='btn btn-success' value='4' onclick='Addselect(this.value);'>"+"4"+"</button></td>"+"</tr>"
     //
     // +"<tr>"+"<td> <button type='button' id='select_btn' class='btn btn-success' value='5' onclick='Addselect(this.value);'>"+"5"+"</button></td>"
     // +"<td> <button type='button' id='select_btn' class='btn btn-success' value='6' onclick='Addselect(this.value);'>"+"6"+"</button></td>"
     // +"<td>"+"	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp;"+"</td>"
     // +"<td> <button type='button' id='select_btn' class='btn btn-success' value='7' onclick='Addselect(this.value);'>"+"7"+"</button></td>"
     // +"<td> <button type='button' id='select_btn' class='btn btn-success' value='8' onclick='Addselect(this.value);'>"+"8"+"</button></td>"+"</tr>"
     //
     // +"<tr>"+"<td> <button type='button' id='select_btn1' class='btn btn-success' value='9' onclick='Addselect(this.value);'>"+"9"+"</button></td>"
     // +"<td> <button type='button' id='select_btn2' class='btn btn-success' value='10' onclick='Addselect(this.value);'>"+"10"+"</button></td>"
     // +"<td>"+"	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp;"+"</td>"
     // +"<td> <button type='button' id='select_btn' class='btn btn-success' value='11' onclick='Addselect(this.value);'>"+"11"+"</button></td>"
     // +"<td> <button type='button' id='select_btn' class='btn btn-success' value='12' onclick='Addselect(this.value);'>"+"12"+"</button></td>"+"</tr>"
     //
     // +"<tr>"+"<td> <button type='button' id='select_btn1' class='btn btn-success' value='13' onclick='Addselect(this.value);'>"+"13"+"</button></td>"
     // +"<td> <button type='button' id='select_btn2' class='btn btn-success' value='14' onclick='Addselect(this.value);'>"+"14"+"</button></td>"
     // +"<td>"+"	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp;"+"</td>"
     // +"<td> <button type='button' id='select_btn' class='btn btn-success' value='15' onclick='Addselect(this.value);'>"+"15"+"</button></td>"
     // +"<td> <button type='button' id='select_btn' class='btn btn-success' value='16' onclick='Addselect(this.value);'>"+"16"+"</button></td>"+"</tr>"
     //
     // +"<tr>"+"<td> <button type='button' id='select_btn1' class='btn btn-success' value='17' onclick='Addselect(this.value);'>"+"17"+"</button></td>"
     // +"<td> <button type='button' id='select_btn2' class='btn btn-success' value='18' onclick='Addselect(this.value);'>"+"18"+"</button></td>"
     // +"<td>"+"	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp;"+"</td>"
     // +"<td> <button type='button' id='select_btn' class='btn btn-success' value='19' onclick='Addselect(this.value);'>"+"19"+"</button></td>"
     // +"<td> <button type='button' id='select_btn' class='btn btn-success' value='20' onclick='Addselect(this.value);'>"+"20"+"</button></td>"+"</tr>"
     //
     // +"<tr>"+"<td> <button type='button' id='select_btn1' class='btn btn-success' value='21' onclick='Addselect(this.value);'>"+"21"+"</button></td>"
     // +"<td> <button type='button' id='select_btn2' class='btn btn-success' value='22' onclick='Addselect(this.value);'>"+"22"+"</button></td>"
     // +"<td>"+"	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp;"+"</td>"
     // +"<td> <button type='button' id='select_btn' class='btn btn-success' value='23' onclick='Addselect(this.value);'>"+"23"+"</button></td>"
     // +"<td> <button type='button' id='select_btn' class='btn btn-success' value='24' onclick='Addselect(this.value);'>"+"24"+"</button></td>"+"</tr>"
     //
     // +"<tr>"+"<td> <button type='button' id='select_btn1' class='btn btn-success' value='25' onclick='Addselect(this.value);'>"+"25"+"</button></td>"
     // +"<td> <button type='button' id='select_btn2' class='btn btn-success' value='26' onclick='Addselect(this.value);'>"+"26"+"</button></td>"
     // +"<td>"+"	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp;"+"</td>"
     // +"<td> <button type='button' id='select_btn' class='btn btn-success' value='27' onclick='Addselect(this.value);'>"+"27"+"</button></td>"
     // +"<td> <button type='button' id='select_btn' class='btn btn-success' value='28' onclick='Addselect(this.value);'>"+"28"+"</button></td>"+"</tr>"
     //
     // +"<tr>"+"<td> <button type='button' id='select_btn1' class='btn btn-success' value='29' onclick='Addselect(this.value);'>"+"29"+"</button></td>"
     // +"<td> <button type='button' id='select_btn2' class='btn btn-success' value='30' onclick='Addselect(this.value);'>"+"30"+"</button></td>"
     // +"<td>"+"	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp;"+"</td>"
     // +"<td> <button type='button' id='select_btn' class='btn btn-success' value='31' onclick='Addselect(this.value);'>"+"31"+"</button></td>"
     // +"<td> <button type='button' id='select_btn' class='btn btn-success' value='32' onclick='Addselect(this.value);'>"+"32"+"</button></td>"+"</tr>"
     //
     // +"<tr>"+"<td> <button type='button' id='select_btn1' class='btn btn-success' value='33' onclick='Addselect(this.value);'>"+"33"+"</button></td>"
     // +"<td> <button type='button' id='select_btn2' class='btn btn-success' value='34' onclick='Addselect(this.value);'>"+"34"+"</button></td>"
     // +"<td>"+"	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp;"+"</td>"
     // +"<td> <button type='button' id='select_btn' class='btn btn-success' value='35' onclick='Addselect(this.value);'>"+"35"+"</button></td>"
     // +"<td> <button type='button' id='select_btn' class='btn btn-success' value='36' onclick='Addselect(this.value);'>"+"36"+"</button></td>"+"</tr>"
     //
     // +"<tr>"+"<td> <button type='button' id='select_btn1' class='btn btn-success' value='37' onclick='Addselect(this.value);'>"+"37"+"</button></td>"
     // +"<td> <button type='button' id='select_btn2' class='btn btn-success' value='38' onclick='Addselect(this.value);'>"+"38"+"</button></td>"
     // +"<td>"+"	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp;"+"</td>"
     // +"<td> <button type='button' id='select_btn' class='btn btn-success' value='39' onclick='Addselect(this.value);'>"+"39"+"</button></td>"
     // +"<td> <button type='button' id='select_btn' class='btn btn-success' value='40' onclick='Addselect(this.value);'>"+"40"+"</button></td>"+"</tr>"
     //
     // );
     //
     //  e = $(".addbtn").val();
      // alert(e);
      // if(null != e)
      // {
      // e.style.color = "Yellow";
      // }


		});
	}
	else
	{
		alert("ID is null");
	}
};
// var count=all;
// function Addselect(val){
//   var value=val;
// if (i=1,i<=value,i++) {
//   var all=i;
//   console.log(all);
//
// }
//
//     $('#add_seat_no').val(val);
// }


function Addseat(){
  var bus=$("#add_busid").val();
  var seatno=$("#add_seat_no").val();
  var status=$("#add_status").val();

  if(bus != "" && seatno != "" && status != "")
  {
  var postData = {
    "operators": bus,
    "seat_no": seatno,
    "status": status,


  };
    console.log(postData);
  $.ajax({
    type: "POST",
    contentType : "application/json; charset=utf-8",
    url : "http://127.0.0.1:8000/Seats/",
    data : JSON.stringify(postData),
    dataType: "json",
    success: function(){


      alert("Seat Adding Successfully!");
      // seatnois=$('#select_btn' + seatno);
      // seatnois.css("background-color", "red");
      // alert("success input seat");
    }
  });
}
  else
  {
  alert("Please fill out this fields.");
  }
};
$('#addseatmodel').on('hidden.bs.modal', function () {
  location.reload();
  $('#add_busid').val("");
  $('#add_seat_no').val("");
  $('#add_status').val("");

})

// .....
function inputSelectData(sNO){
  console.log(sNO);
  $('#edit_seat_no').val(sNO);
  if(sNO != "")
	{
		$.ajax({
			type: "GET",
			contentType: "application/json; charset=utf-8",
			url: "http://127.0.0.1:8000/Seats/"+sNO+"/",
			dataType: "json",
		}).then(function(data){

      $('#edit_status').val(data.status);

    // }

 });
}
  else
  {

    alert("ID is null");
  }
}
