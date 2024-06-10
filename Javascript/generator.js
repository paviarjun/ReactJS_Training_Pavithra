function* subtract(a, b) {
    yield a - b;
}
const gen = subtract(10, 3);
const result = gen.next().value;
console.log(result);