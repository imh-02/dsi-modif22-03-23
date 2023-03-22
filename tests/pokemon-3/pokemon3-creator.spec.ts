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
 import {Pokemon3Creator} from '../../src/pokemon-3/pokemon3-creator';
 
 describe('Clase Pokemon1', () => {
     const pokemon = new Pokemon3("pokemon3", 40, 10);
     const pokemon3creator = new Pokemon3Creator("pokemon3", 40, 10);
     it("Creación del Pokemon3", () => {
         expect(pokemon3creator.factoryMethod()).to.be.eql(pokemon);
     });

 });