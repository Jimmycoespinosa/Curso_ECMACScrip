const regex = /(\d{4})-(\d{2})-(\d{2})/;//RegEx (Regular Expresions)
const matchers = regex.exec('2022-01-01');
console.table(matchers);
// Resultado: Crea patrones de búsqueda y manipulación de cadenas.
// ┌─────────┬──────────────┐
// │ (index) │    Values    │
// ├─────────┼──────────────┤
// │    0    │ '2022-01-01' │
// │    1    │    '2022'    │
// │    2    │     '01'     │
// │    3    │     '01'     │
// │  index  │      0       │
// │  input  │ '2022-01-01' │
// │ groups  │  undefined   │
// └─────────┴──────────────┘
