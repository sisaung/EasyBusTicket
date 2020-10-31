$("#newbus").DataTable({
      "responsive": true,
      "autoWidth": false,
    });
    $(document).ready(function(){
      var datatable=$("#newbus").DataTable();
      var rowdata="";
      $.ajax({
      type : "GET",
      contentType: "application/json; charset=utf-8",
      url : "http://127.0.0.1:8000/Operators/",
      // data:{name:"pdlist"},
      dataType: "json",
      success:function(data){
        // console.log(data);
        var d = new Date();
        var month = d.getMonth()+1;
        var day = d.getDate();
        var output = d.getFullYear() + '-' +
        (month<10 ? '0' : '') + month + '-' +
        (day<10 ? '0' : '') + day;
        console.log(output);
        var counter = 0;
      for (let i=0; i<data.length; i++){
        if(data[i].date == output){
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
        counter++;
      }
    }
    $('#today_bus').html(counter);
    // $('#newcontact_list').html(counter);
      }
    });
    });
