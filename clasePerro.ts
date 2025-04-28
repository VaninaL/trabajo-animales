import { Animal } from "./claseAnimal";


export class perro extends Animal{
private sonido:string = "guauuuuu"  
    
    public emitirSonido(): void{
        console.log(`${this.sonido}`)
    }
    
    tipoDeDieta():void{
        console.log(`A ${this.nombreAnimal} le gusta comer carne`)
        
    }
} 