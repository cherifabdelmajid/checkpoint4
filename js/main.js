var element = document.querySelector('#hedha').style.backgroundColor = "blue";
var element = document.querySelector('#hedha').style.fontSize = "2em";
var element = document.querySelector('#haha').setAttribute("src","http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Pomeranian-1.jpg")
var element = document.querySelector('#hi').innerHTML = "ssss";

console.log(document.getElementById("aa").options[document.getElementById("aa").selectedIndex].value);
console.log(document.getElementById("ii").options[document.getElementById("ii").selectedIndex].value);
function weight(){
    document.getElementById("jj").style.fontWeight='bold';
}
function Style(){
    document.getElementById("jj").style.fontStyle='italic';
}
function textDecoration(){
    document.getElementById("jj").style.textDecoration = 'underline';
}
function couleur (){
    var x=document.getElementById("aa");
    document.getElementById("jj").style.color=x.options[x.selectedIndex].value;
}

function taille (){
    var y=document.getElementById("ii")
    document.getElementById("jj").style.fontSize=y.options[y.selectedIndex].value;
}










