
const sliderContainer = document.getElementById("gabapentin-container");

const gabapentinProduct = products.filter(product=>{
  return product.category === "gabapentin"
})

loadProducts(gabapentinProduct)

function loadProducts(gabaProduct){
  sliderContainer.innerHTML = gabaProduct.map((product) => {
    return `
      <div class="modafinil-card" onclick="openProduct('${product.id}')">
        <a href="#">
          <div class="modafinil-image">
            <img src="${product.image}" alt="${product.name}">
          </div>

          <div class="modafinil-info">
            <h3 class="modafinil-title">
              ${product.name}<br>
            </h3>
            <p class="modafinil-price">${product.price}</p>
          </div>
        </a>

        <div class="modafinil-rating">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>

        <button class="modafinil-btn">
          <i class="fa-solid fa-basket-shopping cart-icon"></i>
          Add To Cart
        </button>
      </div>
    `;
  })
  .join("");
}


function openProduct(id){
  window.location.href=`ProductDetails.html?id=${id}`
}

  


