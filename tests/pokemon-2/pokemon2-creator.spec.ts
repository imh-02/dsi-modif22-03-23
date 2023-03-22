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
 import {Pokemon2Creator} from '../../src/pokemon-2/pokemon2-creator';
 
 describe('Clase Pokemon1', () => {
     const pokemon = new Pokemon2("pokemon2", 40, 10);
     const pokemon2creator = new Pokemon2Creator("pokemon2", 40, 10);
     it("Creación del Pokemon2", () => {
         expect(pokemon2creator.factoryMethod()).to.be.eql(pokemon);
     });

 });