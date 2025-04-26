import { perro } from "./clasePerro";
import { gato } from "./claseGato";

let miPerro = new perro("Firulais");
let miGato = new gato("Pipo");

miPerro.emitirSonido();
miPerro.moverse();
miPerro.tipoDeDieta();
miGato.emitirSonido();
miGato.moverse();
miGato.tipoDeDieta();