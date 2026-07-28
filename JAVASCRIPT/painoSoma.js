const sliderContainer = document.getElementById("modafinil-container");

const painoSomaProducts = products.filter(
  product => product.category === "painosoma"
);

loadProducts(painoSomaProducts);

function loadProducts(productsList) {
  sliderContainer.innerHTML = productsList.map(product => `
    <div class="modafinil-card" onclick="openProduct('${product.id}')">

      <div class="modafinil-image">
        <img src="${product.image}" alt="${product.name}">
      </div>

      <div class="modafinil-info">
        <h3 class="modafinil-title">${product.name}</h3>
        <p class="modafinil-price">${product.price}</p>
      </div>

      <div class="modafinil-rating">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
      </div>

      <button class="modafinil-btn">
        <i class="fa-solid fa-basket-shopping"></i>
        Add To Cart
      </button>

    </div>
  `).join("");
}

function openProduct(id) {
  window.location.href = `ProductDetails.html?id=${id}`;
}