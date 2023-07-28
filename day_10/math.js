exports.addition = function (a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        try {
            a = parseInt(a);
            b = parseInt(b);
        } catch (e) {
            return NaN;
        }
    }
    return a + b;
}

exports.subtraction = function (a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        try {
            a = parseInt(a);
            b = parseInt(b);
        } catch (e) {
            return NaN;
        }
    }
    return a - b;
}

exports.multiplication = function (a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        try {
            a = parseInt(a);
            b = parseInt(b);
        } catch (e) {
            return NaN;
        }
    }
    if(a === 0 || b === 0) return 0;
    return a * b;
}

exports.division = function (a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        try {
            a = parseInt(a);
            b = parseInt(b);
        } catch (e) {
            return NaN;
        }
    }
    if(b === 0) return "denominator cannot be 0";
    if(a === 0) return 0;
    return a / b;
}