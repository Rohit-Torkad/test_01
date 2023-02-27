// JavaScript code to handle the "Add to Cart" button

// Get all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('button');

// Add an event listener to each button
addToCartButtons.forEach(button => {
  button.addEventListener('click', event => {
    // Get the product name and price from the button's parent element
    const productName = event.target.parentElement.querySelector('h3').innerText;
    const productPrice = event.target.parentElement.querySelector('p').innerText;
    
    // Add the product to the cart
    addToCart(productName, productPrice);
  });
});

// Function to add a product to the cart
function addToCart(name, price) {
  // Code to add the product to the cart, such as updating the total cost and displaying a message to the user
  console.log(`Added ${name} to cart at $${price}`);
}
