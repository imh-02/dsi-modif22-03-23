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

 import { hability, Pokemon } from "../pokemon/pokemon-interface";
 import { pokemonType} from "../pokemon/pokemon-interface";
 
 export class Pokemon3 implements Pokemon{
     private readonly hability_ = "agua";
     private readonly type = "tipo3";
     private readonly constanteNiveles = 5;
     constructor (private readonly pokemonName: string, private habilityLevel: number, private otherlevel: number) {
 
     }
 
     getName(): string {
         return this.pokemonName;
     }
 
     getType(): pokemonType {
         return this.type;
     }
 
     getHability(): hability {
         return this.hability_;
     }
 
     getNiveles(): number {
         return this.habilityLevel + this.otherlevel + this.constanteNiveles;
     }
 
 }