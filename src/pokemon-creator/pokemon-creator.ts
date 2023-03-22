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

import {Pokemon} from '../pokemon/pokemon-interface';

/**
 * Clase abstracta que permite al código cliente crear cualquier pokemon
 */
export abstract class PokemonsCreator {

    /**
     * Método abstracto a implementar en las subclases que llama a la creación de un pokemon
     */
    abstract factoryMethod(): Pokemon;

    /**
     * Lógica que se aplica a cada producto (pokemon) creado. 
     * @returns Devuelve una cadena con el nombre, el tipo del pokemon y la habilidad
     */
    logic(): string {
        const pokemonActual = this.factoryMethod();
        return `Me llamo ${pokemonActual.getName()}` + ` y soy un pokemon de tipo ${pokemonActual.getType()}, ` + `con la habilidad ${pokemonActual.getHability()}, y la suma de mis niveles resulta ${pokemonActual.getNiveles()}`;
    }

}