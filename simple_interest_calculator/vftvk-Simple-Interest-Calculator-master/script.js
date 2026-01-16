function compute()
{

    var p = document.getElementById("principal").value;

    if (p <= 0){
        alert("Please enter a valid principal")
        document.getElementById("principal").focus();
    }
    else{

        var r = document.getElementById("rate").value;
        var y = document.getElementById("years").value;

        var i = (p * y * r)/100

        var a = parseInt(p) + parseFloat(i)

        var result = document.getElementById("result")

        const year = new Date().getFullYear() + parseInt(y);

        result.innerHTML = `If you deposit $${p},\<br\> at an interest rate of ${r}%.\<br\> You will receive an amount of $${a},\<br\> in the year ${year}\<br\>`

    }






    
}


function updateRate(){
    var rateEle = document.getElementById("rate")
    var rateVal = rateEle.value

    document.getElementById("rate_val").textContent= rateVal


    // console.log(rateVal)


}
        

