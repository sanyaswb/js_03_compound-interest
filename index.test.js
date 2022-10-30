const compoundInterest = require('./index');

test('Функция должна вернуть число', () => {
	const type = typeof compoundInterest(1000, 0.05, 12, 2);

	expect(type).toBe('number');
});

test('Тест. startDeposit: 100000, annualRate: 0.03, annualAmount: 3, interestPeriod: 10', () => {
	const res = compoundInterest(100000, 0.03, 3, 10);

	expect(res).toBeCloseTo(134784.89153329062, 0.5);
});

test('Тест. startDeposit: 200000, annualRate: 0.02, annualAmount: 12, interestPeriod: 3', () => {
	const res = compoundInterest(200000, 0.02, 12, 3);

	expect(res).toBeCloseTo(212356.70299192838, 0.5);
});

test('Тест. startDeposit: 5000, annualRate: 0.12, annualAmount: 1, interestPeriod: 5', () => {
	const res = compoundInterest(5000, 0.12, 1, 5);

	expect(res).toBeCloseTo(8811.708416000003, 0.5);
});

test('Тест. startDeposit: 2000000, annualRate: 0.06, annualAmount: 4, interestPeriod: 20', () => {
	const res = compoundInterest(2000000, 0.06, 4, 20);

	expect(res).toBeCloseTo(6581325.573979619, 0.5);
});