const decToRoman = require('./../src/decToRoman');
const romansArray = require('./../values');

describe('testing error handling', () => {

    test('argument as boolean', () => {
        const result = decToRoman(false);
        expect(result).toEqual(false);
    });

    test('argument as string', () => {
        const result = decToRoman('not a value');
        expect(result).toEqual(false);
    });

    test('argument as a float', () => {
        const result = decToRoman(1.3);
        expect(result).toEqual(false);
    });

    test('argument as a integer < 1', () => {
        const result = decToRoman(0);
        expect(result).toEqual(false);
    });

    test('argument as a integer > 39999', () => {
        const result = decToRoman(40000);
        expect(result).toEqual(false);
    });

});

describe('testing valid integers', () => {

    test('testing 1',  () => {
        const result = decToRoman(1);
        expect(result).toEqual('I');
    });

    test('testing 4',  () => {
        const result = decToRoman(4);
        expect(result).toEqual('IV');
    });

    test('testing 5',  () => {
        const result = decToRoman(5);
        expect(result).toEqual('V');
    });

    test('testing 10',  () => {
        const result = decToRoman(10);
        expect(result).toEqual('X');
    });

    test('testing 50',  () => {
        const result = decToRoman(50);
        expect(result).toEqual('L');
    });

    test('testing 100',  () => {
        const result = decToRoman(100);
        expect(result).toEqual('C');
    });

    test('testing 500',  () => {
        const result = decToRoman(500);
        expect(result).toEqual('D');
    });

    test('testing 1000',  () => {
        const result = decToRoman(1000);
        expect(result).toEqual('M');
    });

    test('testing 6', () => {
        const result = decToRoman(6);
        expect(result).toEqual('VI');
    });

    test('testing 7', () => {
        const result = decToRoman(7);
        expect(result).toEqual('VII');
    });

    test('testing 8', () => {
        const result = decToRoman(8);
        expect(result).toEqual('VIII');
    });

    test('testing 9', () => {
        const result = decToRoman(9);
        expect(result).toEqual('IX');
    });

    test('testing 11', () => {
        const result = decToRoman(11);
        expect(result).toEqual('XI');
    });

    test('testing 3999', () => {
        const result = decToRoman(3999);
        expect(result).toEqual('MMMCMXCIX')
    });

    test('testing 473', () => {
        const result = decToRoman(473);
        expect(result).toEqual('CDLXXIII')
    });

    test('testing 124', () => {
        const result = decToRoman(124);
        expect(result).toEqual('CXXIV')
    });

    test('testing 90', () => {
        const result = decToRoman(90);
        expect(result).toEqual('XC')
    })
    
});

describe('testing a loop', () => {

    test('testing the loop from values.js', () => {

        romansArray.forEach(obj => {
            const { number, roman } = obj;
            expect(decToRoman(number)).toEqual(roman);
        });

    });

})