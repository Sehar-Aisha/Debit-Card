document.getElementById('updateCardBtn').addEventListener('click', function() {
    const cardNumber = document.getElementById('inputCardNumber').value.replace(/\s+/g, '');
    const cardHolder = document.getElementById('inputCardHolder').value;
    const expiryDate = document.getElementById('inputExpiryDate').value;
    const cvv = document.getElementById('inputCvv').value;

    // Validate card number (should be 16 digits)
    if (!/^\d{16}$/.test(cardNumber)) {
        alert("Please enter a valid 16-digit card number.");
        return;
    }

    // Validate card holder name (should not be empty)
    if (cardHolder.trim() === "") {
        alert("Please enter the card holder's name.");
        return;
    }

    // Validate expiry date format (MM/YY)
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
        alert("Please enter a valid expiry date in MM/YY format.");
        return;
    }

    // Validate CVV (should be 3 digits)
    if (!/^\d{3}$/.test(cvv)) {
        alert("Please enter a valid 3-digit CVV.");
        return;
    }

    // Update the card display
    document.getElementById('cardNumber').textContent = formatCardNumber(cardNumber);
    document.getElementById('cardHolder').textContent = cardHolder;
    document.getElementById('expiryDate').textContent = expiryDate;
    document.getElementById('cvv').textContent = cvv;

    // Clear input fields after update
    document.getElementById('inputCardNumber').value = '';
    document.getElementById('inputCardHolder').value = '';
    document.getElementById('inputExpiryDate').value = '';
    document.getElementById('inputCvv').value = '';
});

// Function to format card number with spaces
function formatCardNumber(number) {
    return number.replace(/(.{4})/g, '$1 ').trim();
}