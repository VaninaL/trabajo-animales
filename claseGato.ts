import { Animal } from "./claseAnimal";

export class gato extends Animal{    

    public emitirSonido(): void {
        console.log("Miauuuuuu");        
    }  
    
    tipoDeDieta():void{
        console.log(`A ${this.nombreAnimal} le gusta comer pollo y pescado`);
    }
};