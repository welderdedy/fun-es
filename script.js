function mostrarMensagem(){
    console.log("olá desenvolvedores");
}

function mostrarNome(nome){
    console.log(nome);
}

function dados(Nome , Idade ,estiloMusical){
return Nome + Idade + estiloMusical; 
   }
    
   function cultura(filme,musica){
    return filme + musica;
}


 

mostrarMensagem();
mostrarNome("welder");
let resultado = dados ("Meu nome é welder", "Minha idade é 32","Meu estilo é de rock");
console.log(resultado);

let resposta = cultura("Os vingadores","Live to Rise");
console.log(resposta);



function triplo (numero){
    return numero * numero * numero;
}


 const multiplicado = triplo(10);
 console.log(multiplicado);