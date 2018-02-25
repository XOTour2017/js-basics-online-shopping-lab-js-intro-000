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

function viewCarted() {
  if(!cart.length) {
    console.log('Your shopping cart is empty.');
  }
  else {
    var items = [];
    // for loop to iterate over objects in cart
    for(var i=0; i < cart.length; i++) {
      // another for loop to iterate over the object's keys
      for(var item in cart[i]) {
        // adding the key and value into the items array
        items.push(item + " at $" + cart[i][item]);
      }
    }
    //  checking if items array length is equal to 2
    // if it is, then it'll add an "and" after the first comma and finish the function
    // if not then output will be: In your cart, you have banana at $77.
    if(items.length == 2) {
      return(`In your cart, you have ${items.join(" and ") + "."}`);
    }
    // otherwise if there is three or more items in the cart then these conditions will activate
    else {
      // another for loop to iterate over the cart array
      for(var x=0; x < cart.length; x++) {
        // testing to see the indexes: 0,1,2
        console.log(x)
        // condition to see if it isn't the last item in cart
        if(x+1 != cart.length) {
           console.log(`In your cart, you have ${items.join(", ") + "."}`);
        }
        // condition if it is the last item
        else {
          const mostItems = items.slice(0, -1);
          const lastItem = items.slice(-1)[ 0 ];
          console.log(`In your cart, you have ${mostItems.join(", and ")}${lastItem}.`);
        }
      }
    }
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
