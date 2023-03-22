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

describe('Clase Pokemon1', () => {
    const pokemon = new Pokemon1("pokemon1", 40);
    it("Getter del nombre del pokemon1 resulta 'pokemon1' ", () => {
        expect(pokemon.getName()).to.be.eql("pokemon1");
    });
    it("Getter del tipo del pokemon1 resulta 'tipo1' ", () => {
        expect(pokemon.getType()).to.be.eql("tipo1");
    });
    it("Getter de la habilidad del pokemon1 resulta 'volar' ", () => {
        expect(pokemon.getHability()).to.be.eql("volar");
    });
    it("Getter de los niveles de habilidad resulta 40 ", () => {
        expect(pokemon.getNiveles()).to.be.eql(40);
    });
});
