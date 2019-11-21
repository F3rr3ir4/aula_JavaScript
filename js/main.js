/******************************************
 *  Author : Leandro Ferreira Netto 
 *  Created On : Mon Nov 18 2019
 *  File : main.js
 *******************************************/

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
  
    //  alert("Obrigado por clicar")
}

function redirecionar(){
    window.open("https://globallabs.ventures/");
  //  window.location.href = "https://globallabs.ventures/";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passo o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passo o mouse"
   // alert("Trocar texto");

}

function voltar(elemento){
    elemento.innerHTML  = "Passe o mouse aqui";
   // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada!!!")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
/*
 /*
 var validar;
 function validadeIdade(idade){
    
    if (idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar
}
var idade = prompt("Qual a sua idade?");
console.log(validadeIdade(idade)); 
/*
/*
 function soma(n1, n2){
    return n1 + n2;

}
alert(soma(5,7));

function setReplace(frase, name, new_name){
    return frase.replace(name, new_name)
}
alert(setReplace("Vai Japão", "Japão", "Brasil"));
/*
 /*
var d = new Date();
alert(d);
alert(d.getDay());
/*

/*
var count;
for(count=0; count<=5; count++ ){
    alert(count);
};
*/

/*

 var count = 0;
 while (count <=5){
     console.log(count);
     count = count + 1;
 }
 */
/* var age = prompt("Qual a sua idade");


// var age = 17
 if (age >=18){
     alert("Maior de idade");
  }
  else{
      alert("Menor de idade");
  };
  */
//var frutas = [{nome:"maça", cor:"Vermelha"}, {nome:"Uva", cor:"roxa"}];
//console.log(frutas);
//alert(frutas[1].nome);

/*
 
var fruta = {nome:"maça", cor:"Vermelha"};
console.log(fruta);
*/
 //var lista = ["maça","pera","laranja"];
//lista.push("uva"); //acrescenta a lista
//lista.pop(); //remove ultimo da lista
//console.log(lista[1]); // exibe o item da posição
//console.log(lista);
//console.log(lista.join(" - "));
//console.log(lista.toString());
//console.log(lista.length);
//console.log(lista.reverse())
// var name = "Ferreira"
//var age = "36"


// alert("Bem vindo " + name + " idade " + age);

