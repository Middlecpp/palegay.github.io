var text = document.getElementById("button");
var counter = 1;
console.log(counter);

function txt(){
    if(counter != 7){
        counter++
        switch(counter){
            case 2: text.innerHTML = "middle"; break;
            case 3: text.innerHTML = "ui"; break;
            case 4: text.innerHTML = "wibecoder"; break;
            case 5: text.innerHTML = "palegay"; break;
            case 6: text.innerHTML = "kwai"; break;
            case 7: text.innerHTML = "k3win"; break;
        }
    }

    else{
        counter = 1;
        text.innerHTML = "swesws";
    }
    console.log(counter);
}