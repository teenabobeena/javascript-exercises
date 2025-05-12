const sumAll = function(a, b) {
    let sum = 0;

    
    const start = Math.min(a, b);
    const end = Math.max(a, b);

    if (start < 0 || end < 0) {
        return 'ERROR'
    } else if 
        (typeof a !== 'number' || typeof b !== 'number') {
            return 'ERROR'
    } else if (a % 1 !== 0 || b % 1 !== 0) {
        return 'ERROR'
    } else {
        for (let i = start; i <= end; i++) {
            sum += i;
        } 
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
