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
      dataType: "json",
      success:function(data){
        // console.log(data);
      $("#add_whichbus").empty();
      for (let i=0; i<data.length; i++){
        operator_id=data[i].id;
        operators_name=data[i].operators_name;
        operators_route=data[i].browse_route;
        $("#add_whichbus").append("<option value='"+operator_id+"'>"+operators_name+"("+operators_route+")"+"</option>");
          routes_id=data[i].Routes_id;
          // console.log(data[i].operators_name+"1");
        for(j=0; j<routes_id.length; j++){
        datatable.row.add([
           rowdata+data[i].operators_name,
           rowdata+data[i].class_type,
           // rowdata+data[i].browse_route,
           rowdata+data[i].date,
           rowdata+data[i].depature_time,
           rowdata+'<button id="delete_route" class="btn btn-success" data-toggle="midal"><i class="fas fa-trash"></i></button>',
           rowdata+'<button id="delete_route" class="btn btn-success" data-toggle="midal"><i class="fas fa-edit"></i></button>',

        ]).draw(false);

      }
      }
      }
    });
    });
