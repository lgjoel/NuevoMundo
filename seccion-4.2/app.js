/*
    Cree un algoritmo que permita determinar
    la calificacion en letras de un alumno

    Si la nota se encuentra entre 100 a 90 = A
    Si la nota se encuentra entre 80 a 89 = B
    Si la nota se encuentra entre 70 a 79 = C
    Si la nota se encuentra entre 60 a 69 = D
    Si la nota es inferior a 60 = F

*/

let nota= 63;
let notaLetra = '';

if (nota >89) {
    notaLetra = 'A';
} else if(nota >79) {
    notaLetra = 'B';
} else if(nota >69) {
    notaLetra = 'C';
} else if(nota >59) {
    notaLetra = 'D';
} else {notaLetra='F'}

console.log(nota + ' es igual a ' + notaLetra)