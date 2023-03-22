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
import { Pokemon1 } from "./pokemon1";
import { Pokemon } from "../pokemon/pokemon-interface";

 export class Pokemon1Creator extends PokemonsCreator {
    constructor(private readonly name: string, private habilityLevel: number) {
      super();
    }
    public factoryMethod(): Pokemon {
      return new Pokemon1(this.name, this.habilityLevel);
    }
  }
