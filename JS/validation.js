function validate1(){
  if(form1.text1.value=="") {
    alert("Name cannot be null");
    return false;
  }
  else
  return true;
}
function validate2(){
  if(form3.text1.value=="") {
    alert("Name cannot be null");
    return false;
  }
  else
  return true;
}
function validate(){
  if(form2.t1.value==""||form2.t2.value==""||form2.t3.value=="") {
    alert("Please Enter Marks ");
    return false;
  }
  else{
  var max1;
  var x=parseInt(document.getElementById("txt1").value);
  var y=parseInt(document.getElementById("txt2").value);
  var z=parseInt(document.getElementById("txt3").value);
  var v=x+y+z;
  max1=x;
  if(y>x)
    max1=y;
    else if(z>x)
    max1=z;
  var pr=(v/300)*100;
  document.getElementById("output").value = v;
  document.getElementById("output1").value = max1;
  document.getElementById("output2").value = pr;
  }
}
function jfun(){
  window.open("Welcome.html" ,width="50%", height="50%");
}
function fc(){
  var v=document.getElementById("uname").value;
  if(v.length<4)
  document.getElementById("nm1").innerHTML="Invalid length";
  else
  document.getElementById("nm1").innerHtml="";
}
function fc1(){
  if(form3.text1.value==""){
    alert("Text field is empty");
    return false;
    }
    else
    return true;
}
function myfn(){
  alert("Enter the marks")
}
function myfn1(){
  alert("Its confidential");
  document.getElementById("tvb2").focus();
}

function jfun10(){
  form3.tv1.value=" ";
}
function myFnction() {
  var x = document.getElementById("mySelect").value;
  document.getElementById("demo").value = "You selected: " + x;
}
/*function ans(){
  var x = document.getElementsByName("r1");
  var y = document.getElementsByName("r2");
  var c=0;
  if(x[0].checked)
  c+=2;
  if(y[1].checked)
  c+=2;
  alert("You scored: "+c+" marks.")
}*/
function fun3(){
  var x = document.getElementsByName("r1");
  var y = document.getElementsByName("r2");
  var c=0;
  if(x[0].checked)
  c+=2;
  if(y[1].checked)
  c+=2;
  var person = prompt("Please enter your name","");
  if (person != null) {
    alert(" Marks of "+person+" is "+c+" . ");
  }
}
function jfnn(){
  var a=document.getElementsByName("r2");
  var c=0;
  for(var i=0;i<a.length;i++){
    if(a[i].checked)
    c++;
  }
  if(c<2)
  alert("Select atleast two technology");
  else
  alert("Virtual Class will be happy to help you");
}
function myfnn1(){
  var x=document.getElementById("s").value;
  var a=document.getElementsByName("r2");
  for(var i=0;i<a.length;i++){
    if(a[i].checked)
    break;
  }
  window.open(x+a[i].value);
}