/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Desarrollo de Sistemas Informáticos
 * Curso: 3º
 * @author Ismael Martín Herrera
 * @email alu0101397375@ull.edu.es
 * @date 22/03/2023
 */

 import { PokemonsCreator } from "../pokemon-creator/pokemon-creator";
 import { Pokemon2 } from "./pokemon-2";
 import { Pokemon } from "../pokemon/pokemon-interface";
 
  export class Pokemon2Creator extends PokemonsCreator {
     constructor(private readonly name: string, private habilityLevel: number, private otherLevel: number) {
       super();
     }
     public factoryMethod(): Pokemon {
       return new Pokemon2(this.name, this.habilityLevel, this.otherLevel);
     }
   }