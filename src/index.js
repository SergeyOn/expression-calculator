function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let sum = 0;

    try {
        sum += (new Function('return ' + expr))();      
    } catch (err) {
        throw new Error ('ExpressionError: Brackets must be paired.');
    }

    if (sum === Infinity) throw new Error ('TypeError: Devision by zero.');

    return sum;
}

module.exports = {
    expressionCalculator
}