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
           rowdata+'<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" onclick="InsertDataIntRouteAddModal('+bid+');">Add Route</button>',
           rowdata+'<button id="edit_route" class="btn btn-success" data-toggle="modal" data-target="#editRoute" onclick="InsertDataIntRouteUpdateModal('+bid+');"><i class="fas fa-info-circle"></i></button>',


        ]).draw(false);


      }
      }
    });
    });


// ....................................................................................................................

$("#route_list").DataTable({
      "responsive": true,
      "autoWidth": false,
    });
// var routelist = null;
function InsertDataIntRouteUpdateModal(busid){
  // console.log(busid);
  var routelist=$("#route_list").DataTable();
  var routedata="";
	if(busid != "")
	{
		$.ajax({
			type: "GET",
			contentType: "application/json; charset=utf-8",
			url: "http://127.0.0.1:8000/Operators/"+busid+"/",
			dataType: "json",
		}).then(function(data){
      // console.log(data);
      let routeId=data.Routes_id;
       for(let i=0; i<routeId.length; i++){
         console.log(routeId[i].id);
         // if (dataTable !== null) {
         routelist.row.add([
            routedata+routeId[i].source,
            routedata+routeId[i].destination,
            routedata+routeId[i].price,
            // routedata+'<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" onclick="InsertDataIntRouteAddModal('+routeId[i]+');">Select</button>',
            routedata+'<button type="button" id="select_btn" class="btn btn-success" onclick="inputSelectData('+routeId[i].id+');">Select</button>',


         ]).draw(false);
         // routelist.destroy()
         // routelist = null
       // }
       }

		});
	}
	else
	{
		alert("ID is null");
	}
};

$('#editRoute').on('hidden.bs.modal', function () {
  location.reload();
  $('#edit_routeid').val('');
  $('#edit_busid').val('');
  $('#edit_source').val('');
  $('#edit_destination').val('');
  $('#edit_price').val('');

})


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

function Editroute(){
  var id = $("#edit_routeid").val();
	var bus = $("#edit_busid").val();
	var source = $("#edit_source").val();
	var destination = $("#edit_destination").val();
	var price = $("#edit_price").val();

	if(bus != "" && source != "" && destination != "" && price != "")
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

function InsertDataIntRouteAddModal(routeadd_id){
	if(routeadd_id != "")
	{
		$.ajax({
			type: "GET",
			contentType: "application/json; charset=utf-8",
			url: "http://127.0.0.1:8000/Operators/"+routeadd_id+"/",
			dataType: "json",
		}).then(function(data){
      // console.log(data);
			$('#add_whichbus').val(data.operators_name);
			$('#add_busid').val(data.id);

		});
	}
	else
	{
		alert("ID is null");
	}
};

function Addroute(){
  var bus=$("#add_busid").val();
  var source=$("#add_source").val();
  var destination=$("#add_destination").val();
  var price=$("#add_price").val();

  if(bus != "" && source != "" && destination != "" && price != "")
  {
  var postData = {
    "operators": bus,
    "source": source,
    "destination": destination,
    "price": price,

  };
    // console.log(postData);
  $.ajax({
    type: "POST",
    contentType : "application/json; charset=utf-8",
    url : "http://127.0.0.1:8000/Routes/",
    data : JSON.stringify(postData),
    dataType: "json",
    success: function(){
      location.reload();
    }
  });
}
  else
  {
  alert("Please fill out this fields.");
  }
};

// .....
function inputSelectData(rID){
  if(rID != "")
	{
		$.ajax({
			type: "GET",
			contentType: "application/json; charset=utf-8",
			url: "http://127.0.0.1:8000/Routes/"+rID+"/",
			dataType: "json",
		}).then(function(data){
      $('#edit_routeid').val(data.id);
      $('#edit_busid').val(data.operators);
      $('#edit_source').val(data.source);
      $('#edit_destination').val(data.destination);
      $('#edit_price').val(data.price);
    // }

 });
}
  else
  {

    alert("ID is null");
  }
}
