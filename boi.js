Student_slave_array=[];
function submit(){
        var Name1=document.getElementById("Friend1").value;
        Student_slave_array.push(Name1);
        console.log(Name1)
    
    var length1=Student_slave_array.length
    console.log(length1)

    console.log(Party_friend_array)
    document.getElementById("no_comma_display").innerHTML=Student_slave_array.toString()

    
    document.getElementById("SendIt").style.display="none"
    document.getElementById("sort_button").style.display="inline-block"
}
function sorting(){
Party_friend_array.sort()

console.log(Party_friend_array)

var no_comma_array=display_array_1.join("<br>")
console.log(no_comma_array)
document.getElementById("display_name").innerHTML=no_comma_array.toString()
}
function update(){
    document.getElementById("display_name").innerHTML="<h1>"+Party_friend_array+"</h1>"
}

document.getElementById("p2").innerHTML="name found" +found+ "time/s"
console.log("found name" +found+ "time/s")


function show() { var i= names_of_people.join(""); 
console.log(names_of_people); 
document.getElementById("p1").innerHTML=i.toString(); 
document.getElementById("sort_button").style.display="block"; 
} 
function searching() { var s= document.getElementById("s1").value;
 var found=0; 
 var j;
  for(j=0; j<Party_friend_array.length;j++) 
  { if(s==Party_friend_array[j]){ found=found+1; } 
} document.getElementById("p2").innerHTML="name found "+found+" time/s"; 
console.log("found name "+found+" time/s"); 
}