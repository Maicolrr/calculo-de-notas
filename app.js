//datos de entrada
const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const nota3 = document.getElementById("nota3");
const color = document.getElementById("color");
const body = document.getElementById("body");

//datos de salida
const Nota3 = document.getElementById("Nota3");
const promedio_final = document.getElementById("promedio_final");
const ComoVas = document.getElementById("ComoVas");

//boton
const appCalculoHonor = document.getElementById("appCalculoHonor");

//datos basicos
let nt1 = (nota1.value)*0.30;
let nt2 = (nota2.value)*0.30;
let nt3 = (nota3.value)*0.40;


appCalculoHonor.addEventListener("click", calculo_nota3);
function calculo_nota3() {
    
    let nt1 = (nota1.value)*0.30;
    let nt2 = (nota2.value)*0.30;

    NescesitaNota3 =(3.5 - nt1 -nt2 )/0.40
    
    Nota3.textContent= NescesitaNota3+" es la nota minima que nescesita para pasar";
    
    PromF=(NescesitaNota3*0.40)+nt1+nt2;
    promedio_final.textContent= "su pomedio final seria "+PromF;
    
}

appCalculoHonor.addEventListener("click", calculo_Estado);
function calculo_Estado(){

    let nt1 = (nota1.value)*0.30;
    let nt2 = (nota2.value)*0.30;
    let nt3 = (nota3.value)*0.40;

    NescesitaNota3 =(3.5 - nt1 -nt2 )/0.40

    PromF3=(nt1+nt2+nt3)
    
    if(NescesitaNota3<5){
        
        PromF=(NescesitaNota3*0.40)+nt1+nt2;
        
        if (PromF3>= 4){
        
        ComoVas.textContent="🎉   felicidades dentro en el cuadro de honor   🎉"

        }else if(PromF3>=3.5){
        
        ComoVas.textContent="👍  pasa, pero no entra en el cudro de honor,    👍"
        
        } else if(PromF3<=3.4){
        
        ComoVas.textContent= "⚠️  recupera  ⚠️"
                
        }

    }else ComoVas.textContent= "☠️  perdio  ☠️"
    
    
}

color.addEventListener("change",cambiar_color)
function cambiar_color(){
    
    body.style.backgroundColor = color.value
}

// Realizar un pograma que permita por medio de botones conocer la siguiente información del estudiante:

// 1. ¿Cuánto debe sacar para ser cuadro de honor?
// 2.  ¿Cuánto debe sacar para ganar la materia?
// 3. ¿Cuánto debe sacar para poder recuperar?

// Teniendo en cuenta la siguiente información:

// Nota1 = 30%
// Nota2 = 30%
// Nota3 = 40%

// Mínima: 1;
// Máxima: 5;

// Si la persona saca entre 4 y 5: Cuadro de Honor.
// si la persona saca entre 2 y 3.4: La persona puede recuperar.
// Si la persona saca menos de 2, friki

// Observación: Las validaciones se hacen en Javascript.

// Adicionalmente, la persona podrá elegir el color de su Fondo.
// Aplicar flexbox para la maquetación.
