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
 import 'mocha';
 import {expect} from 'chai';
 import {Pokemon2} from '../../src/pokemon-2/pokemon-2';
 
 describe('Clase Pokemon1', () => {
     const pokemon = new Pokemon2("pokemon2", 40, 10);
     it("Getter del nombre del pokemon2 resulta 'pokemon2' ", () => {
         expect(pokemon.getName()).to.be.eql("pokemon2");
     });
     it("Getter del tipo del pokemon2 resulta 'tipo2' ", () => {
         expect(pokemon.getType()).to.be.eql("tipo2");
     });
     it("Getter de la habilidad del pokemon2 resulta 'fuego' ", () => {
         expect(pokemon.getHability()).to.be.eql("fuego");
     });
     it("Getter de los niveles de habilidad resulta 50 ", () => {
         expect(pokemon.getNiveles()).to.be.eql(50);
     });
 });