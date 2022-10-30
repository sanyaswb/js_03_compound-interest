function compoundInterest(startDeposit, annualRate, annualAmount, interestPeriod) {
	return startDeposit * Math.pow(1 + (annualRate / annualAmount), annualAmount * interestPeriod);
}

module.exports = compoundInterest;