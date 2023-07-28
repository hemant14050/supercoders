const {subtraction} = require('./math');

test('subtraction 1 - 2 to equal -1', () => {
    expect(subtraction(1, 2)).toBe(-1);
});

test('subtraction -1 - 2 to equal -3', () => {
    expect(subtraction(-1, 2)).toBe(-3);
});

test('subtraction 0 - 2 to equal -2', () => {
    expect(subtraction(0, -2)).toBe(2);
});

test('subtraction 0.1 - 0.2 to equal -0.1', () => {
    expect(subtraction(0.1, 0.2)).toBeCloseTo(-0.1);
});

test('subtraction "1" - "2" to equal -1', () => {
    expect(subtraction("1", "2")).toBe(-1);
});

test('subtraction "1" - 2 to equal -1', () => {
    expect(subtraction("1", 2)).toBe(-1);
});

test('subtraction "1" - "a" to equal NaN', () => {
    expect(subtraction("1", "a")).toBeNaN();
});