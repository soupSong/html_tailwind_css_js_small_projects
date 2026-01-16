function convertCtoF(){

    var celcius_input = document.getElementById("celsius")
    
    if (celcius_input.value === ""){
        alert("Enter valid celsius value")
        celcius_input.focus();
    }
    else{
        var c = celcius_input.value
        var f = (c * 9/5) +32
        document.getElementById("fahrenheit").value = f
        console.log(f)
    }

    
}


function convertKtoP(){

    var kilo_input = document.getElementById("kilo")
    
    if (kilo_input.value === ""){
        alert("Enter valid kilo value")
        kilo_input.focus();
    }
    else{
        var k = kilo_input.value
        var p = k * 2.2
        document.getElementById("pounds").value = p
        console.log(p)
    }

    
}


function convertKtoM(){

    var kilo_input = document.getElementById("km")
    
    if (kilo_input.value === ""){
        alert("Enter valid km value")
        kilo_input.focus();
    }
    else{
        var k = kilo_input.value
        var m = k * 0.62137
        document.getElementById("miles").value = m
        console.log(m)
    }

    
}