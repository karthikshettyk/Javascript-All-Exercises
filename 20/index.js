const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if(!shoppingCart.includes("Meat")){
  shoppingCart.unshift("Meat");
}

if(!shoppingCart.includes("Sugar")){
    shoppingCart.push("Sugar")
}

shoppingCart.splice(4,1)

shoppingCart.splice(3,1,"Green Tea")

console.log(shoppingCart);
