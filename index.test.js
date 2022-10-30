
const square = require('./index');

test('we raise 8 to 0 degree, we get 1', () => {
    expect(square(8, 0)).toBe(1);
});
test('we raise 8 to 1 degree, we get 8', () => {
    expect(square(8, 1)).toBe(8);
});
test('we raise 8 to 2 degree, we get 88', () => {
    expect(square(8, 2)).toBe(88); //результат 64
});
test('we raise 0 to 0 degree, we get 0', () => {
    expect(square(0, 0)).toBe(0); //результат 1
});
test('we raise 0 to 1 degree, we get 0', () => {
    expect(square(0, 1)).toBe(0);
});
test('we raise 0 to 2 degree, we get 0', () => {
    expect(square(0, 2)).toBe(0);
});
