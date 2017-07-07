def coin_sort(coins):
	coins_remaining = coins
	coin_dictionary = {
		"quarters": 0,
		"dimes": 0,
		"nickels": 0,
		"pennies": 0
	}
	while coins_remaining >= 25:
		coins_remaining -= 25
		coin_dictionary["quarters"] += 1
	while coins_remaining >= 10:
	coins_remaining -= 10
		coin_dictionary["dimes"] += 1
	while coins_remaining >= 5:
		coins_remaining -= 5
		coin_dictionary["nickels"] += 1
	while coins_remaining >= 1:
		coins_remaining -= 1
		coin_dictionary["pennies"] += 1
	print coin_dictionary
	return coin_dictionary

coin_sort(74)