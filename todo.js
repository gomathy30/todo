const inputArray = [];
const Entry = document.getElementById("input1");
const btn = document.getElementById("btn");
const list = document.getElementById("list");

btn.addEventListener("click", function(){
    var text = document.getElementById("input1").value;

     inputArray.push(text);
     var i;
     var store="";
     for(i=0; i< inputArray.length;i++)
     {
        store = store + inputArray[i] + "</br>";
     }
     var li1 = document.createElement("li");
     li1.appendChild(document.createTextNode(Entry));
     list.appendChild(li1);
     document.getElementById("input1").value="";
     
    
});
