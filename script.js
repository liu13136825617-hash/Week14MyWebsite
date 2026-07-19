// Contact Form Validation

document.addEventListener("DOMContentLoaded",function(){

const forms=document.querySelectorAll("#contactForm");

forms.forEach(function(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const name=form.querySelector("#name").value.trim();

const email=form.querySelector("#email").value.trim();

const message=form.querySelector("#message").value.trim();

if(name===""){
alert("Please enter your name.");
return;
}

if(email===""){
alert("Please enter your email.");
return;
}

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){
alert("Invalid email address.");
return;
}

if(message===""){
alert("Please enter a message.");
return;
}

alert("Message sent successfully!");

form.reset();

});

});

});

// BMI Calculator

function calculateBMI(){

const h=document.getElementById("height").value;

const w=document.getElementById("weight").value;

if(h===""||w===""){
alert("Please enter height and weight.");
return;
}

const bmi=w/Math.pow(h/100,2);

let category="";

if(bmi<18.5){
category="Underweight";
}
else if(bmi<25){
category="Normal";
}
else if(bmi<30){
category="Overweight";
}
else{
category="Obese";
}

document.getElementById("result").innerHTML=
"Your BMI is <b>"+bmi.toFixed(2)+"</b><br>Category: <b>"+category+"</b>";

}
