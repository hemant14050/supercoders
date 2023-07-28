const {division} = require('./math');

test('division 1 / 2 to equal 0.5', () => {
    expect(division(1, 2)).toBe(0.5);
});

test('division -1 / 2 to equal -0.5', () => {
    expect(division(-1, 2)).toBe(-0.5);
});

test('division 0 / -2 to equal 0', () => {
    expect(division(0, -2)).toBe(0);
});

test('division 0.1 / 0.2 to equal 0.5', () => {
    expect(division(0.1, 0.2)).toBeCloseTo(0.5);
});

test('division "1" / "2" to equal 0.5', () => {
    expect(division("1", "2")).toBe(0.5);
});

test('division "1" / 2 to equal 0.5', () => {
    expect(division("1", 2)).toBe(0.5);
});

test('division "1" / "a" to equal NaN', () => {
    expect(division("1", "a")).toBeNaN();
});

test('division 1 / 0 to "denominator cannot be 0"', () => {
    expect(division(1, 0)).toBe("denominator cannot be 0");
});