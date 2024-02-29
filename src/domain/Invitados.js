
export class Invitado {
    constructor(){
        this.id = 0
        this.nombre = ""
        this.comeEnsalada=true
        this.gramosDeCarne = 0.0
        this.ingredientesDeEnsalada= []
        this.confirmado = true
        this.calcularMonto = 0.0
    }

    static fromJson(invitadoJson){
        const result = Object.assign(new Invitado(),invitadoJson)
        return result
    }

    
    toJson(){
        return {
      ...this,
      }
    }
   
}
export default Invitado