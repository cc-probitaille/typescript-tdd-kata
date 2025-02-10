import fizzbuzz from "../FizzBuzz" ;

describe('FizzBuzz tests go in here', () => {
    it('devrait retourner le String 1 quand 1 est en entrée', () => {
        expect(fizzbuzz(1)).toEqual("1");
    });

    it('devrait retourner le String 2 quand 2 est en entrée', () => {
        expect(fizzbuzz(2)).toEqual("2");
    });

    it('devrait retourner le String Fizz quand 3 est en entrée', () => {
        expect(fizzbuzz(3)).toEqual("Fizz");
    });

    it('devrait retourner le String Fizz quand 6 est en entrée', () => {
        expect(fizzbuzz(6)).toEqual("Fizz");
    });

    it('devrait retourner le String Buzz quand 5 est en entrée', () => {
        expect(fizzbuzz(5)).toEqual("Buzz");
    });

    it('devrait retourner le String Buzz quand 10 est en entrée', () => {
        expect(fizzbuzz(10)).toEqual("Buzz");
    });

    it('devrait retourner le String FizzBuzz quand 15 est en entrée', () => {
        expect(fizzbuzz(15)).toEqual("FizzBuzz");
    });

    it('devrait retourner le String FizzBuzz quand 30 est en entrée', () => {
        expect(fizzbuzz(30)).toEqual("FizzBuzz");
    });

    
});