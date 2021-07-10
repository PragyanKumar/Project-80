Student_slave_array=[];
function submit(){
    var display_array=[]
    for(var j=1;j<=4;j++){
        var Name1=document.getElementById("Student"+j).value;
        Student_slave_array.push(Name1);
        console.log(Name1)
    }
    var length1=Student_slave_array.length
    console.log(length1)

    console.log(Party_friend_array)
for(var k=0;k<length1;k++){
    display_array.push("<h4> name: "+Party_friend_array[k]+"</h4>")
    console.log(display_array)
}document.getElementById("no_comma_display").innerHTML=display_array
var no_comma_array=display_array.join(" ")
console.log(no_comma_array)
document.getElementById("display_name").innerHTML=no_comma_array

    
    document.getElementById("SendIt").style.display="none"
    document.getElementById("sort_button").style.display="inline-block"
}
function sorting(){
Party_friend_array.sort()

console.log(Party_friend_array)
var display_array_1=[]
var length2=Party_friend_array.length
console.log(length2)
for(var k=0;k<length2;k++){
    display_array_1.push("<h4> name: "+Party_friend_array[k]+"</h4>")
    console.log(display_array_1)
}document.getElementById("no_comma_display").innerHTML=display_array_1
var no_comma_array=display_array_1.join(" ")
console.log(no_comma_array)
document.getElementById("display_name").innerHTML=no_comma_array
}
function update(){
    document.getElementById("display_name").innerHTML="<h1>"+Party_friend_array+"</h1>"
}
function searching(){
    var s=document.getElementById("s1").value
    var found=0
    var j
    for (j=0;j<Party_friend_array.length;j++){
        if (s==Party_friend_array[j]){
            found=found+1;
        }
    }
}
document.getElementById("p2").innerHTML="name found" +found+ "time/s"
console.log("found name" +found+ "time/s") 