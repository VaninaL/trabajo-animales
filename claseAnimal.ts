import { IAnimal } from "./interfaz";

export abstract class Animal implements IAnimal{
    protected nombreAnimal:string;
    
    
    constructor(pNombre:string){
        this.nombreAnimal = pNombre;
    
    }
    public emitirSonido(): void {
        

    }
    public moverse():void{
        console.log(`${this.nombreAnimal} se mueve..`);
    }
    
    abstract tipoDeDieta():void;
}