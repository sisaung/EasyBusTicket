$("#contact_datatable").DataTable({
      "responsive": true,
      "autoWidth": false,
    });
    $(document).ready(function(){
      var datatable=$("#contact_datatable").DataTable();
      var rowdata="";
      $.ajax({
      type : "GET",
      contentType: "application/json; charset=utf-8",
      url : "http://127.0.0.1:8000/Contact/",
      dataType: "json",
      success:function(data){
        console.log(data);
        $('#total_contact').html(data.length);
        $('#all_contact').html(data.length);
      for (let i=0; i<data.length; i++){
        datatable.row.add([
           rowdata+data[i].traveller_name,
           rowdata+data[i].email,
           rowdata+data[i].phone,
           rowdata+data[i].message,
           rowdata+data[i].date,

        ]).draw(false);
      }
      }
    });
    });
