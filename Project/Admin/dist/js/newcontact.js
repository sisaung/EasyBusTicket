$("#newcontact_datatable").DataTable({
      "responsive": true,
      "autoWidth": false,
    });
    $(document).ready(function(){
      var datatable=$("#newcontact_datatable").DataTable();
      var rowdata="";
      $.ajax({
      type : "GET",
      contentType: "application/json; charset=utf-8",
      url : "http://127.0.0.1:8000/Contact/",
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
        // var inhand=data[i].storedQty-data[i].soldQty;

        if(data[i].date == output){

          datatable.row.add([
             rowdata+data[i].traveller_name,
             rowdata+data[i].email,
             rowdata+data[i].phone,
             rowdata+data[i].message,


          ]).draw(false);
          counter++;
        }
      }
      $('#new_contact').html(counter);
      $('#newcontact_list').html(counter);

      }
    });
    });
