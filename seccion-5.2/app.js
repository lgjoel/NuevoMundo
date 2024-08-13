function calcularNota(nota) {
    
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

}

calcularNota(100);
calcularNota(80);
calcularNota(59);