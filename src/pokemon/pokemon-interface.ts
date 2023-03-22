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

/**
 * Tipo de pokemon que existen
 */
export type pokemonType = "tipo1" | "tipo2" | "tipo1";

/**
 * Tipo de habilidades posibles
 */
export type hability = "volar" | "fuego" | "agua";

/**
 * Interfaz que define los método mínimo que debe tener al menos, cada pokemon
 */
export interface Pokemon {
    getName(): string;
    getType(): pokemonType;
    getHability(): hability;
}