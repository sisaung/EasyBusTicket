$("#newcustomer_datatable").DataTable({
      "responsive": true,
      "autoWidth": false,
    });
    $(document).ready(function(){
      var datatable=$("#newcustomer_datatable").DataTable();
      var rowdata="";
      $.ajax({
      type : "GET",
      contentType: "application/json; charset=utf-8",
      url : "http://127.0.0.1:8000/Sale_Tickets/",
      dataType: "json",
      success:function(data){
        var d = new Date();
        var month = d.getMonth()+1;
        var day = d.getDate();
        var output = d.getFullYear() + '-' +
        (month<10 ? '0' : '') + month + '-' +
        (day<10 ? '0' : '') + day;
        // console.log(output);
        var counter = 0;

      for (let i=0; i<data.length; i++){
        if(data[i].buyingdate == output){
          console.log(data[i].buyingdate);
        datatable.row.add([
           rowdata+data[i].traveller_name,
           // rowdata+'<img src="'+data[i].imageOne+'" width="100px" height="70px">',
           rowdata+data[i].email,
           rowdata+data[i].phone_no,
           rowdata+data[i].busname,
           rowdata+data[i].route,
           rowdata+data[i].depaturetime,
           rowdata+data[i].seatnumbers,
           rowdata+data[i].subtotal,
           rowdata+data[i].buyingdate,


        ]).draw(false);
        counter++;
      }
      }
      $('#newcustomer').html(counter);
      }
    });
    });
