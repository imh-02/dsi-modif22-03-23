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
 import {PokemonsCreator} from '../src/pokemon-creator/pokemon-creator';
 import {Pokemon1Creator} from '../src/pokemon-1/pokemon1-creator';
 import {Pokemon2Creator} from '../src/pokemon-2/pokemon2-creator';
 import {Pokemon3Creator} from '../src/pokemon-3/pokemon3-creator';
 
 describe('Código cliente', () => {
     function clientCode(pokemonCreator: PokemonsCreator) {
        return pokemonCreator.logic();
     }

    it("Crear un pokemon 1 ", () => {
         expect(clientCode(new Pokemon1Creator("pokemon1", 40))).to.be.eql("Me llamo pokemon1 y soy un pokemon de tipo tipo1, con la habilidad volar, y la suma de mis niveles resulta 40");
    });

    it("Crear un pokemon 2 ", () => {
        expect(clientCode(new Pokemon2Creator("pokemon2", 40, 10))).to.be.eql("Me llamo pokemon2 y soy un pokemon de tipo tipo2, con la habilidad fuego, y la suma de mis niveles resulta 50");
    });
    
    it("Crear un pokemon 3 ", () => {
        expect(clientCode(new Pokemon3Creator("pokemon3", 40, 10))).to.be.eql("Me llamo pokemon3 y soy un pokemon de tipo tipo3, con la habilidad agua, y la suma de mis niveles resulta 55");
    });

 });
 