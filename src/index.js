// PLEASE DON'T change function name
module.exports = 
function makeExchange(currency) {
    let result = {};
    if (currency >= 10000) {
        return result = { error: "You are rich, my friend! We don't have so much coins for exchange" };
    } else {
        const coins = [50, 25, 10, 5, 1];
        for (let i = 0; i <= coins.length; i++) {
            var count = 0;
            while (currency >= coins[i]) {
                currency = currency - coins[i];
                count++;
            }
            if (count > 0) {
                switch (coins[i]) {
                    case 50:
                        result["H"]= count;
                        break;
                    case 25:
                        result["Q"] = count;
                        break;
                    case 10:
                        result["D"] = count;
                        break;
                    case 5:
                        result["N"] = count;
                        break;
                    case 1:
                        result["P"] = count;
                        break;
                }
            }
            
        }
    }
    return result;
};
