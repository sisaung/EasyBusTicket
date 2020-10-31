const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
async function Addbus(){
  var busname=$("#add_busname").val();
  var class_type=$("#add_class").val();
  var date=$("#add_date").val();
  var dep_time=$("#add_deptime").val();
  var arr_time=$("#add_arrtime").val();
  var nationality=$("#add_nationality").val();
  var available_seats=$("#add_available").val();
  var routes=$("#add_routes").val();
  var travel_time=$("#add_traveltime").val();
  var img=$('#add_image')[0].files[0];
  var images=await toBase64(img);

  // var images=$("#add_image").val();
  // console.log(busname);
  // console.log(email);
  // console.log(phone);
  // console.log(message);


  if(busname != "" && class_type != "" && date != "" && dep_time != "" && arr_time != "" && nationality != "" && available_seats != "" && routes != "" && travel_time != "" && images != "")
  {
  var busData = {
    "operators_name": busname,
    "class_type": class_type,
    "date": date,
     "depature_time": dep_time,
    "arrival_time": arr_time,
    "nationality": nationality,
    "available_seat": available_seats,
    "browse_route": routes,
    "day_night": travel_time,
    "images": images,

  };
     console.log(busData.images);

    $.ajax({
      type: "POST",
      contentType : "application/json; charset=utf-8",
      url : "http://127.0.0.1:8000/Operators/",
      data : JSON.stringify(busData),
      dataType: "json",
      success: function(){
        alert("Adding Bus Successfully!");
      }
    });
}
  else
  {
  alert("Please fill out this fields.");
  }
}
// ######...................................
$('#exampleModalCenter').on('hidden.bs.modal', function () {
  location.reload();
  $("#add_busname").val('');
  $("#add_class").val('');
  $("#add_date").val('');
  $("#add_deptime").val('');
  $("#add_arrtime").val('');
  $("#add_nationality").val('');
  $("#add_available").val('');
  $("#add_routes").val('');
  $("#add_traveltime").val('');
  $('#add_image').val('');


})
// ###################################################


$("#bus_datatable").DataTable({
      "responsive": true,
      "autoWidth": false,
    });
    $(document).ready(function(){
      var datatable=$("#bus_datatable").DataTable();
      var rowdata="";
      $.ajax({
      type : "GET",
      contentType: "application/json; charset=utf-8",
      url : "http://127.0.0.1:8000/Operators/",
      // data:{name:"pdlist"},
      dataType: "json",
      success:function(data){
        // console.log(data);
          $('#total_bus').html(data.length);
      for (let i=0; i<data.length; i++){
        // var inhand=data[i].storedQty-data[i].soldQty;
        busid=data[i].id;
        datatable.row.add([
           rowdata+data[i].operators_name,
           // rowdata+'<img src="'+data[i].imageOne+'" width="100px" height="70px">',
           rowdata+data[i].class_type,
           rowdata+data[i].date,
           rowdata+data[i].depature_time,
           rowdata+data[i].selled_seats,
           rowdata+data[i].available_seat,
           rowdata+data[i].browse_route,
           rowdata+'<button type="button" id="select_btn" class="btn btn-success" data-toggle="modal" data-target="#updateBusModal" onclick="busDetail('+busid+');"><i class="fas fa-info-circle"></i></button>',

        ]).draw(false);
      }
      }
    });
    });

// ..........................................
function busDetail(bid) {
  // alert(bid);
  if(bid != "")
	{
    $.ajax({
    type : "GET",
    contentType: "application/json; charset=utf-8",
    url: "http://127.0.0.1:8000/Operators/"+bid+"/",
    dataType: "json",
    success:function(data){
      $('#update_busid').val(data.id);
      $('#update_busname').val(data.operators_name);
			$('#update_class').val(data.class_type);
      $('#update_date').val(data.date);
      $('#update_deptime').val(data.depature_time);
      $('#update_arrtime').val(data.arrival_time);
      $('#update_nationality').val(data.nationality);
      $('#update_quantity').val(data.selled_seats);
      $('#update_available').val(data.available_seat);
      $('#update_routes').val(data.browse_route);
      $('#update_traveltime').val(data.day_night);
      $('#update_image').val(data.images);


       }
	});
}
	else
	{
		alert("ID is null");
	}
};

function Delete_bus(){
	var id = $("#update_busid").val();
	if(id != "")
	{
		$.ajax({
			type : "DELETE",
			contentType : "application/json; charset=utf-8",
			url: "http://127.0.0.1:8000/Operators/"+id+"/",
			dataType: "json",
			success: function(){
				alert("Deleting Success!");
				location.reload();
			}
		});
	}
	else
	{
		alert("Please insert employee ID");
	}
};
// .........................................
async function Edit_bus(){
  var id = $("#update_busid").val();
  var busname=$("#update_busname").val();
  var class_type=$("#update_class").val();
  var date=$("#update_date").val();
  var dep_time=$("#update_deptime").val();
  var arr_time=$("#update_arrtime").val();
  var nationality=$("#update_nationality").val();
  var seat_quantity=$("#update_quantity").val();
  var available_seats=$("#update_available").val();
  var routes=$("#update_routes").val();
  var travel_time=$("#update_traveltime").val();
  var img=$('#update_image')[0].files[0];
  var images=await toBase64(img);

	if(id != ""&& busname != "" && class_type != "" && date != "" && dep_time != "" && arr_time != "" && nationality != "" && seat_quantity != "" && available_seats != "" && routes != "" && travel_time != "" && images != "")
	{
		var putData = {
      "id": id,
      "operators_name": busname,
      "class_type": class_type,
      "date": date,
       "depature_time": dep_time,
      "arrival_time": arr_time,
      "nationality": nationality,
      "selled_seats": seat_quantity,
      "available_seat": available_seats,
      "browse_route": routes,
      "day_night": travel_time,
      "images": images,
		};
		$.ajax({
			type : "PUT",
			contentType : "application/json; charset=utf-8",
			url: "http://127.0.0.1:8000/Operators/"+id+"/",
			data : JSON.stringify(putData),
			dataType: "json",
			success: function(){
        alert("Update Successful!");
        location.reload();
			}
		});
	}
	else
	{
		alert("Please insert data!");
	}
};
