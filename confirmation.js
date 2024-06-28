document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('room').textContent = sessionStorage.getItem('room');
    document.getElementById('card-number').textContent = sessionStorage.getItem('cardNumber');
    document.getElementById('expiry-date').textContent = sessionStorage.getItem('expiryDate');
    document.getElementById('cvc').textContent = sessionStorage.getItem('cvc');
    document.getElementById('name').textContent = sessionStorage.getItem('name');
});

function confirmPayment() {
    document.body.innerHTML = '<div class="container"><h1>Processing Payment...</h1><div id="loading"><div class="bar"><div></div></div></div></div>';
    
    var loadingBar = document.querySelector('#loading .bar div');
    var width = 0;
    var interval = setInterval(function () {
        if (width >= 100) {
            clearInterval(interval);
            displayReceipt();
        } else {
            width += 1;
            loadingBar.style.width = width + '%';
        }
    }, Math.random() * (120 - 30) + 30); // 30 to 120 ms increments
}

function displayReceipt() {
    var receiptID = generateReceiptID();
    document.body.innerHTML = `
        <div class="container">
            <h1>Payment Successful!</h1>
            <p>Receipt ID: ${receiptID}</p>
            <p>Thank you for your payment.</p>
        </div>
    `;
}

function generateReceiptID() {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var receiptID = '';
    var length = Math.floor(Math.random() * (90 - 20 + 1)) + 20; // 20 to 90 characters
    for (var i = 0; i < length; i++) {
        receiptID += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return receiptID;
}
