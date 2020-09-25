
function action(type){
    if (type==1){
        location.href="register.html";
    }
    else if(type==2){
        location.href="login.html";
    }
    else if(type==3){
        location.href="main.html";
    }
    else if(type==4){
        location.href="Familycar.html";
    }
    else{location.href="main.html";}
}

function checkregister(type){
    if (type==1){
    var namaInput = document.getElementById('nama');
    var buttonsubmit = document.getElementById('submit');
    var namaerr = document.getElementById('namaerr');

    var emailInput = document.getElementById('email');
    var buttonsubmit = document.getElementById('submit');
    var emailerr = document.getElementById('emailerr');

    var gendermale = document.getElementById('gendermale');
    var genderfemale = document.getElementById('genderfemale');
    var buttonsubmit = document.getElementById('submit');
    var gendererr = document.getElementById('gendererr');

    var cityInput = document.getElementById('city');
    var buttonsubmit = document.getElementById('submit');
    var cityerr = document.getElementById('cityerr');

    var addressInput = document.getElementById('address');
    var buttonsubmit = document.getElementById('submit');
    var adderr = document.getElementById('adderr');

    var passInput = document.getElementById('pass');
    var buttonsubmit = document.getElementById('submit');
    var passerr = document.getElementById('passerr');

    var regexemail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    
    buttonsubmit.onclick=function(){  
        if (namaInput.value.length == 0){
            namaerr.innerHTML='Nama tidak boleh kosong';
        }else{namaerr.innerHTML="";}
        if (emailInput.value.length == 0){
            emailerr.innerHTML='Email tidak boleh kosong';
        }else if(!regexemail.test(email.value) && email.value.length > 0){
            emailerr.innerHTML = "Email tidak sesuai format";
        }else{emailerr.innerHTML="";}
        if (addressInput.value.length == 0){
            adderr.innerHTML='Address tidak boleh kosong';
        }else if(!(address.value.substring(0, 6) === "Street" || address.value.substring(0, 6) === "street" || address.value.substring(0, 7) === "street " || address.value.substring(0, 7) === "Street ") && address.value.length > 0){
            adderr.innerHTML = "Alamat tidak sesuai format";
        }
        else{adderr.innerHTML="";}
        if (!gendermale.checked && !genderfemale.checked){
            gendererr.innerHTML='Gender harus dipilih';
        }else{
            gendererr.innerHTML="";
        }
        if (cityInput.value == 'none'){
            cityerr.innerHTML='City harus dipilih';
        }else{cityerr.innerHTML="";}

        if (passInput.value.length == 0){
            passerr.innerHTML='Password tidak boleh kosong';
        }else{passerr.innerHTML="";}
        
        
        if(namaInput.value.length !=0 && emailInput.value.length !=0 && addressInput.value.length != 0
             && gendermale.checked || genderfemale.checked && cityInput.value != 'none' ){
                 alert("Your Data Has Been Saved");
             }   
        } 
         
    } else if (type==2){
        var emailInput = document.getElementById('email');
        var buttonsubmit = document.getElementById('submit');
        var emailerr = document.getElementById('emailerr');

        var passInput = document.getElementById('pass');
        var buttonsubmit = document.getElementById('submit');
        var passerr = document.getElementById('passerr');

        buttonsubmit.onclick=function(){
            if (emailInput.value.length == 0){
                emailerr.innerHTML='Email tidak boleh kosong';
            }else{emailerr.innerHTML="";}
            if (passInput.value.length == 0){
                passerr.innerHTML='Password tidak boleh kosong';
            }else{passerr.innerHTML="";}
        }
        if(emailInput.value.length !=0 && passInput.value.length != 0){
            alert("You have been logged in");
        }   
    }
    
}
