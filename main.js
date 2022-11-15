function insert(num){
    let numero = document.getElementsByClassName('resultado')[0].innerHTML;
    document.getElementsByClassName('resultado')[0].innerHTML = numero + num;
}

function clean(){


document.getElementsByClassName('resultado')[0].innerHTML = "";


}

function back(){
    let resultado = document.getElementsByClassName('resultado')[0].innerHTML;
    document.getElementsByClassName('resultado')[0].innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    let resultado = document.getElementsByClassName('resultado')[0].innerHTML;
    if(resultado){
        document.getElementsByClassName('resultado')[0].innerHTML = eval(resultado);

    }else{
        document.getElementsByClassName('resultado')[0].innerHTML = "Insira algum numero.";

    }

}