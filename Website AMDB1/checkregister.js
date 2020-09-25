function checkregister() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementById("gender").value;
    var city = document.getElementById("city").value;
    var address = document.getElementById("address").value;

    alert(nama);
    alert(email);
    alert(gender);
    alert(city);
    alert(address);


    if(nama=='' && email=='' && gender=='' && city=='none' && address==''){
        alert("Semua Field Harus diisi!");
    }
}