let btn = document.querySelector(".button");
let firetname = document.getElementById('firetname');
let lastname = document.getElementById('lastname');
let  mail = document.getElementById('mail');
let role = document.getElementById('role');
let address = document.getElementById('address');
let city = document.getElementById('city');
let pincode = document.getElementById('pincode');
let date = document.getElementById('date');
let upload = document.getElementById('upload');

btn.addEventListener("click",() =>{
    if(firetname.value!="" && lastname.value!="" && mail.value!="" && role.value!="" && address.value!="" && city.value!="" && pincode.value!="" && date.value!="" && upload.value!=""){
        alert("form is sussefully submited");
    }
    else{
        alert("Please fill the details");
    }
});