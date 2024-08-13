
class Carro {

    constructor(marca1, tipo1, puertas){
        this.marca = marca1;
        this.tipo = tipo1;
        this.puertas =puertas;

        this.creadiEn='hoy';
        this.encedido = false;
        this.gasolina = 100;

    }
    encenderCarro() {

        if (this.encedido) {
            console.error('El carro ya estaba encendido');
        }else {
            this.encendido= true;
            console.log('el motor esta encendido')
        }
        return this;

    }

    realizarViaje(consumo) {
        if (!this.encendido) return console.log('Carro apagado');
        
        if (consumo > this.gasolina) {
                console.log('No pudo realizar el viaje: gasolina ' +this.gasolina);

        this.gasolina = this.gasolina - consumo;
        return 'Le queda ' +this.gasolina;

        }
    }

}

let carro = new Carro('Mazda','Sedan', 2)

console.log(carro);
