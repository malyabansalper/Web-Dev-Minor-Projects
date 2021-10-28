function testit()
      {
       var ct = document.getElementById("varrows").rows.length;
       alert(ct);
       var table=document.getElementById("varrows");
       var row=table.insertRow(ct);
       var cell1 = row.insertCell(0);
       var cell2 = row.insertCell(1);
       var cell3 = row.insertCell(2);
       cell1.innerHTML = "num 1";
       cell2.innerHTML = "num 2";
       cell3.innerHTML = "num 3";
      }