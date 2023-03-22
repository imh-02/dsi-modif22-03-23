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
 import {Pokemon1} from '../../src/pokemon-1/pokemon1';
 import {Pokemon1Creator} from '../../src/pokemon-1/pokemon1-creator';
 
 describe('Clase Pokemon1', () => {
     const pokemon = new Pokemon1("pokemon1", 40);
     const pokemon1creator = new Pokemon1Creator("pokemon1", 40);
     it("Creación del Pokemon1", () => {
         expect(pokemon1creator.factoryMethod()).to.be.eql(pokemon);
     });

 });