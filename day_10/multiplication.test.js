const {multiplication} = require('./math');

test('multiplication 1 * 2 to equal 2', () => {
    expect(multiplication(1, 2)).toBe(2);
});

test('multiplication -1 * 2 to equal -2', () => {
    expect(multiplication(-1, 2)).toBe(-2);
});

test('multiplication 0 * -2 to equal 0', () => {
    expect(multiplication(0, -2)).toBe(0);
});

test('multiplication 0.1 * 0.2 to equal 0.02', () => {
    expect(multiplication(0.1, 0.2)).toBeCloseTo(0.02);
});

test('multiplication "1" * "2" to equal 2', () => {
    expect(multiplication("1", "2")).toBe(2);
});

test('multiplication "1" * 2 to equal 2', () => {
    expect(multiplication("1", 2)).toBe(2);
});

test('multiplication "1" * "a" to equal NaN', () => {
    expect(multiplication("1", "a")).toBeNaN();
});