function compoundInterest(startDeposit, annualRate, annualAmount, interestPeriod) {
	return startDeposit * (1 + (annualRate / annualAmount)) ** (annualAmount * interestPeriod);
}

module.exports = compoundInterest;