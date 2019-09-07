const decToRoman = (number) => {

    // check that the value is an integer
    if(!Number.isInteger(number) || number < 1 || number > 39999){
        return false;
    }

    const numbers = [
        {
            roman: 'M',
            value: 1000
        },
        {
            roman: 'D',
            value: 500
        },
        {
            roman: 'C',
            value: 100
        },
        {
            roman: 'L',
            value: 50
        },
        {
            roman: 'X',
            value: 10
        },
        {
            roman: 'V',
            value: 5
        },
        {
            roman: 'I',
            value: 1
        },
    ]

    let romanNumeral = '';

    while(number > 0){
        
        let biggestValue = 0;
        let correctRoman = '';

        for(let i = 0; i < numbers.length; i++){

            const { roman: currentRoman, value: currentValue } = numbers[i];

            // if currentValue is greater than or equal to the biggestValue it takes priority
            // this it to ensure we get X rather than XV
            if(currentValue >= biggestValue && number - currentValue >= 0){
                biggestValue = currentValue;
                correctRoman = currentRoman;
            }

            if(number - currentValue === 0){
                break;
            }

            // loop through the list again and compare it to the first roman
            // this is to determine whether we can subtract a roman
            // i.e 90 being 100 - 10 rather than 9 x 10 essentially
            for(let j = 0; j < numbers.length; j++){

                const { roman: comparisonRoman, value: comparisonValue } = numbers[j];

                const difference = currentValue - comparisonValue;
                const differenceRoman = comparisonRoman + currentRoman;

                // following the rules
                // if the comparisonValue is not a multiple of 10 it cannot be subtracted (except for V or L)
                // if the currentValue is more than 10x the comparisonValue it cannot be subtracted
                if(comparisonRoman === 'V' || comparisonRoman === 'L' || currentValue / comparisonValue > 10){
                    continue;
                }


                // compare to the biggestValue
                if(difference > biggestValue && number - difference >= 0){
                    biggestValue = difference;
                    correctRoman = differenceRoman;
                }

            }

        }

        number = number - biggestValue;
        romanNumeral += correctRoman;

        // reset biggestValue and correctRoman
        biggestValue = 0;
        correctRoman = '';

    }

    return romanNumeral;

}
module.exports = decToRoman;