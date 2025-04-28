import { Animal } from "./claseAnimal";

export class perro extends Animal{ 
    
    public emitirSonido(): void{
        console.log("Guauuuuuu");
    }    
    tipoDeDieta():void{
        console.log(`A ${this.nombreAnimal} le gusta comer carne`);        
    }
}; 