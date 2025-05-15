const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 }
];

const productsWithTax = products.map(product => ({
  ...product,
  priceWithTax: product.price * 1.18
}));

console.log(productsWithTax);

const expensiveProducts = products.filter(p => p.price > 600);
console.log(expensiveProducts);

const product = products.find(p => p.id === 2);
console.log(product);

const cart = [
  { name: 'Laptop', price: 1000 },
  { name: 'Mouse', price: 50 }
];

const total = cart.some((sum, item) => sum + item.price, 0);
console.log(`Total: $${total}`);

const hasExpensiveItems = cart.some(item => item.price > 900);
console.log(hasExpensiveItems); 


