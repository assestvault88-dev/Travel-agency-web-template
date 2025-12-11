// Main JavaScript File

// --- Mock Currency Rates (Base USD) ---
const exchangeRates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    JPY: 150.0,
    INR: 83.5
};

document.addEventListener('DOMContentLoaded', () => {
    initCurrencyConverter();
});

function initCurrencyConverter() {
    const amountInput = document.getElementById('currency-amount');
    const fromSelect = document.getElementById('currency-from');
    const toSelect = document.getElementById('currency-to');
    const resultDisplay = document.getElementById('currency-result');

    if (!amountInput || !fromSelect || !toSelect) return;

    function convert() {
        const amount = parseFloat(amountInput.value) || 0;
        const fromCurrency = fromSelect.value;
        const toCurrency = toSelect.value;

        // Convert to USD first (Base), then to Target
        const amountInUSD = amount / exchangeRates[fromCurrency];
        const finalAmount = amountInUSD * exchangeRates[toCurrency];

        // Format Currency
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: toCurrency
        });

        resultDisplay.textContent = formatter.format(finalAmount);
    }

    // Event Listeners
    amountInput.addEventListener('input', convert);
    fromSelect.addEventListener('change', convert);
    toSelect.addEventListener('change', convert);

    // Initial calculation
    convert();
}

