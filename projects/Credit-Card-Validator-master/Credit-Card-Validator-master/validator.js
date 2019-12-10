
function creditValidator(){
var jsCardN = document.getElementById("card-no").value;
var x = jsCardN[0] + jsCardN[1] + jsCardN[2] + jsCardN[3] + jsCardN[4] + jsCardN[5] + jsCardN[6] + jsCardN[7] + jsCardN[8] + jsCardN[9] + jsCardN[10] + jsCardN[11] + jsCardN[12] + jsCardN[13] + jsCardN[14] + jsCardN[15];


if (jsCardN.length !== 16){
    alert("Enter a 16 digit number");
}else{

    if(jsCardN[0]===jsCardN[1]){
        alert("Same numbers cannot repeat");
    }else{
        if((jsCardN[jsCardN.length-1]%2)!==0){
            alert("The last digit must be an even number");
        }else{
            if( x < 16){
                alert("Your credit card is NOT valid");
            }else{
                alert("Your card is VALID");
            }
        }
    }   
    
}


}
// jsCardN[0] + jsCardN[1] + jsCardN[2] + jsCardN[3] + jsCardN[4] + jsCardN[5] + jsCardN[6] + jsCardN[7] + jsCardN[8] + jsCardN[9] + jsCardN[10] + jsCardN[11] + jsCardN[12] + jsCardN[13] + jsCardN[14] + jsCardN[15]

