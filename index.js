var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 var object = {[itemName]: Math.floor(Math.random(1,100) * 100)};
 cart.push(object);
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if(!cart.length) {
    console.log('Your shopping cart is empty.');
  }
  else {
    var items = [];
    for(var i=0; i < cart.length; i++) {
      for(var item in cart[i]) {
        items.push(item + " at $" + cart[i][item]);
      }
    }
    console.log(`In your cart, you have ${items.join(" and ") + "."}`);
  }
  }

function total() {
  var totalValue = [];
  for(var i=0; i< cart.length; i++) {
    for(var item in cart[i]) {
      totalValue.push(cart[i][item]);
      var sum = totalValue.reduce(function(a, b) {return a + b;}, 0);
      console.log(`The total value is ${sum}`);
    }
  }
}

function removeFromCart(item) {
  for(var i=0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item) === true) {
      console.log(cart[i])
      delete cart[i][item];
      console.log(cart);
    }
    else {
      console.log("false");
    }
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
}
