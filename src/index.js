module.exports = function toReadable (number) {
    let objUnitNumber = {0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'};
    let objTenUnitNumber = {10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'};
    let objDozenNumber = {20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'};
    
    if (number >= 0 && number <= 9){
        return `${objUnitNumber[number]}`;
    }
    
    else if (number >= 10 && number <= 19){
        return `${objTenUnitNumber[number]}`;
    }
    
    else if (number >= 20 && number <= 99){
        number = number.toString().split('');
        if (number[1] == 0){
            return `${objDozenNumber[+number[0] + number[1]]}`;
        }
        else {
            return `${objDozenNumber[number[0] + 0]} ${objUnitNumber[+number[1]]}`;
        }
    }
    else {
        number = number.toString().split('');
        if (number[1] == 0 && number[2] == 0){
            return `${objUnitNumber[number[0]]} hundred`;
        }
        else if (number[1] == 0 && number[2] >=1 && number[2] <= 9){
            return `${objUnitNumber[number[0]]} hundred ${objUnitNumber[number[2]]}`;
        }
        else if (number[1] == 1 && number[2] == 0){
            return `${objUnitNumber[number[0]]} hundred ${objTenUnitNumber[number[1] + 0]}`;
        }
        else if (number[1] == 1 && number[2] >= 1 && number[2] <= 9){
            return `${objUnitNumber[number[0]]} hundred ${objTenUnitNumber[number[1] + number[2]]}`;
        }
        else if (number[2] == 0) {
            return `${objUnitNumber[number[0]]} hundred ${objDozenNumber[number[1] + 0]}`;
        }
        else {
            return `${objUnitNumber[number[0]]} hundred ${objDozenNumber[number[1] + 0]} ${objUnitNumber[number[2]]}`;
        }
    }
}
