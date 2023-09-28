var btnsomar = document.getElementById('soma');
btnsomar.addEventListener('click', somar);

var btnsubtrair = document.getElementById('sub');
btnsubtrair.addEventListener ('click', subt);

var btnmult = document.getElementById('mult');
btnmult.addEventListener('click', mult);

var btndiv = document.getElementById('div');
btndiv.addEventListener('click', div);

var btnLimpar = document.getElementById('lim');
btnLimpar.addEventListener('click', limpar);


function somar(){
    var c1 = document.getElementById('num1');
    var c2 = document.getElementById('num2');
    var result = document.getElementById ('resultado');

    var num01 = parseFloat(c1.value);
    var num02 = parseFloat(c2.value);

    var resultado = num01 + num02;

    result.innerText = "A Soma é : " + resultado 


}


function subt(){
    var c1 = document.getElementById('num1');
    var c2 = document.getElementById('num2');
    var result = document.getElementById ('resultado');

    var num01 = parseFloat(c1.value);
    var num02 = parseFloat(c2.value);

    var resultado = num01 - num02;

    result.innerText = "A Subtração é : " + resultado 


}



function mult(){
    var c1 = document.getElementById('num1');
    var c2 = document.getElementById('num2');
    var result = document.getElementById ('resultado');

    var num01 = parseFloat(c1.value);
    var num02 = parseFloat(c2.value);

    var resultado = num01*num02;

    result.innerText = "A Multiplicação é : " + resultado 


}



function div(){
    var c1 = document.getElementById('num1');
    var c2 = document.getElementById('num2');
    var result = document.getElementById ('resultado');

    var num01 = parseFloat(c1.value);
    var num02 = parseFloat(c2.value);

    var resultado = num01 / num02;

    result.innerText = "A Divisão é : " + resultado 


}

function lim(){
    var c1 = document.getElementById('num1');
    var c2 = document.getElementById('num2');
    var result = document.getElementById ('resultado');

    c1.value = '';
    c2.value = '';

    result.innerText = 'Digite os numeros acima'
}

