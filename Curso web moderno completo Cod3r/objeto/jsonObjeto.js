const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c}}
console.log(JSON.stringify(obj))

//Console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) ínvalido
//Console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}")) invalido

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))//válido
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": []}'))//válido