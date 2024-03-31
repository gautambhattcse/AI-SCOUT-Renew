function processPayment(event) {
    event.preventDefault();

    // Get form data
    const email = document.getElementById('email').value;
    const toolUrl = document.getElementById('toolUrl').value;
    const plan = document.getElementById('plan').value;

    // Display form data (you can replace this with your payment processing logic)
    console.log('Email:', email);
    console.log('Tool URL:', toolUrl);
    console.log('Plan:', plan);

    // Here you can implement your payment gateway logic (e.g., redirect to payment gateway)
    alert('Redirecting to payment gateway...'); // Example alert message
}
