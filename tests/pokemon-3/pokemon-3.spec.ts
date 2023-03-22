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
 import {Pokemon3} from '../../src/pokemon-3/pokemon-3';
 
 describe('Clase Pokemon1', () => {
     const pokemon = new Pokemon3("pokemon3", 40, 10);
     it("Getter del nombre del pokemon2 resulta 'pokemon3' ", () => {
         expect(pokemon.getName()).to.be.eql("pokemon3");
     });
     it("Getter del tipo del pokemon3 resulta 'tipo3' ", () => {
         expect(pokemon.getType()).to.be.eql("tipo3");
     });
     it("Getter de la habilidad del pokemon3 resulta 'agua' ", () => {
         expect(pokemon.getHability()).to.be.eql("agua");
     });
     it("Getter de los niveles de habilidad resulta 55 ", () => {
         expect(pokemon.getNiveles()).to.be.eql(55);
     });
 });