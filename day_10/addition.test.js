const {addition} = require('./math');

test('adds 1 + 2 to equal 3', () => {
    expect(addition(1, 2)).toBe(3);
});

test('adds -1 + 2 to equal 1', () => {
    expect(addition(-1, 2)).toBe(1);
});

test('adds 0 + 0 to equal 0', () => {
    expect(addition(0, 0)).toBe(0);
});

test('adds 0.1 + 0.2 to equal 0.3', () => {
    expect(addition(0.1, 0.2)).toBeCloseTo(0.3);
});

test('adds "1" + "2" to equal 3', () => {
    expect(addition("1", "2")).toBe(3);
});

test('adds "1" + 2 to equal 3', () => {
    expect(addition("1", 2)).toBe(3);
});

test('adds "1" + "a" to equal NaN', () => {
    expect(addition("1", "a")).toBeNaN();
});

