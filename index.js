var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const n = 3.14159;
let raio = parseFloat(lines[0]);

function formula(raio) {
    return n * (raio * raio);
}

let calculo = formula(raio);

console.log("A=" + calculo.toFixed(4));