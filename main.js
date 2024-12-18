// Product Class
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// ShoppingCartItem Class
class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  // Method to calculate total price of the item
  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}

// ShoppingCart Class
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // Method to add an item
  addItem(product, quantity) {
    const existingItem = this.items.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push(new ShoppingCartItem(product, quantity));
    }
  }

  // Method to remove an item
  removeItem(productId) {
    this.items = this.items.filter(item => item.product.id !== productId);
  }

  // Method to get total of items inside the cart
  getTotal() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }

  // Method to display cart items
  displayCart() {
    if (this.items.length === 0) {
      console.log("Your cart is empty.");
      return;
    }

    console.log("Cart Items:");
    this.items.forEach(item => {
      console.log(
        `Product: ${item.product.name}, Quantity: ${item.quantity}, Total: $${item.getTotalPrice()}`
      );
    });
    console.log(`Cart Total: $${this.getTotal()}`);
  }
}

// Testing the functionality
// Creating products
const product1 = new Product(1, "Laptop", 1000);
const product2 = new Product(2, "Mouse", 50);
const product3 = new Product(3, "Keyboard", 80);

// Creating a shopping cart
const cart = new ShoppingCart();

// Adding items to the cart
cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 1);

// Displaying the cart
cart.displayCart();

// Removing an item from the cart
cart.removeItem(2);

// Displaying the cart again
cart.displayCart();
