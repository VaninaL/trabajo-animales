import { Animal } from "./claseAnimal";

export class gato extends Animal{
    private sonido:string = "miauuuuu"

    public emitirSonido(): void{
        console.log(`${this.sonido}`)
    }
    public moverse():void{
        console.log(`${this.nombreAnimal} se mueve..`);
    }
    tipoDeDieta():void{
        console.log(`A ${this.nombreAnimal} le gusta comer pollo y pescado`)
    }
}