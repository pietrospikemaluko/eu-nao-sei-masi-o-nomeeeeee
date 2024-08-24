const products = [
  {
    id: 1,
    name: "Camiseta Adidas",
    price: 29.99,
    image: "https://17889.cdn.simplo7.net/static/17889/sku/roupas-camisetas-camiseta-adidas-gk9120-classica-em-algodao-1682777040242.png"
  },
  {
    id: 2,
    name: "Superstar",
    price: 299.99,
    image: "https://backwash.fbitsstatic.net/img/p/tenis-adidas-superstar-50-preto-e-branco-fv0321-89958/336933.jpg?w=800&h=800&v=no-change&qs=ignore"
  },

  {
    id: 3,
    name: "Bolsa Adidas",
    price: 130.35,
    image: "https://imgcentauro-a.akamaihd.net/1366x1366/M0LAWX31.jpg"
  },
  {
    id: 4,
    name: "Boné Adidas",
    price: 190.35,
    image: "https://imgcentauro-a.akamaihd.net/1300x1300/94636831.jpg"
  },
  {
    id: 5,
    name: "Tenis velcro",
    price: 300.35,
    image: "img/tenis adidas1.png"
  },



];

const cart = [];

function renderProducts() {
  const productGrid = document.getElementById('product-grid');
  productGrid.innerHTML = '';
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>R$ ${product.price.toFixed(2)}</p>
      <button class="btn" onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
    `;
    productGrid.appendChild(productCard);
  });
}


renderProducts();

function renderCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.innerHTML = `
      <p>${item.name} - R$ ${item.price.toFixed(2)} <button class="btn-remove" onclick="removeFromCart(${item.id})">Remover</button></p>
      `;
      cartItems.appendChild(cartItem);
      total += item.price;
  });
  cartTotal.textContent = total.toFixed(2);
}


function addToCart(productId) {
  const product = products.find(p => p.id === productId) ;
  if (product) {
      cart.push({ ...product});
      renderCart();
  }
}
function removeFromCart(productId) {
  const index = cart.findIndex(item => item.id === productId);
  if (index !== -1) {
      cart.splice(index, 1);
      renderCart();
  }
}



