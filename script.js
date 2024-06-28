function showPaymentForm() {
    var room = document.getElementById('room').value;
    if (room) {
        document.getElementById('room-selection').classList.add('hidden');
        document.getElementById('payment-form').classList.remove('hidden');
    } else {
        alert('Please select a room before continuing.');
    }
}

function validateCardNumber() {
    var cardNumber = document.getElementById('card-number').value;
    var validLengths = [15, 16, 19];
    if (validLengths.includes(cardNumber.length)) {
        var room = document.getElementById('room').value;
        var expiryDate = document.getElementById('expiry-date').value;
        var cvc = document.getElementById('cvc').value;
        var name = document.getElementById('name').value;

        sessionStorage.setItem('room', room);
        sessionStorage.setItem('cardNumber', cardNumber);
        sessionStorage.setItem('expiryDate', expiryDate);
        sessionStorage.setItem('cvc', cvc);
        sessionStorage.setItem('name', name);

        window.location.href = 'confirmation.html';
        return false;
    } else {
        alert('Invalid card number length. Please enter a card number with 15, 16, or 19 digits.');
        return false;
    }
}
