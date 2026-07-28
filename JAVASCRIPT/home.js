fetch("../Components/NavBar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
    const menuBtn = document.getElementById("menu-btn");
    const drawer = document.getElementById("drawer1");
    const overlay = document.getElementById("overlay");
    const closeBtn = document.getElementById("closeBtn");

    menuBtn.addEventListener("click", () => {
      drawer.classList.add("active");
      overlay.classList.add("active");
      document.body.classList.add("no-scroll");
    });

    closeBtn.addEventListener("click", () => {
      drawer.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("no-scroll");
    });

    console.log(menuBtn);

    overlay.addEventListener("click", () => {
      drawer.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("no-scroll");
    });
  });

fetch("../Components/Footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });

const bestSelling = document.getElementById("slider-container");
const bestSellingproduct = products.filter((product) => {
  return product.bestSelling === true;
});

loadProducts(bestSellingproduct);

function loadProducts(productList) {
  bestSelling.innerHTML = productList.map(product => `
    <div class="product-card" id="slider-card"
         onclick="openProduct('${product.id}')">

        <div class="product-image">
          <img src="${product.image}" alt="${product.name}">
        </div>

        <div class="product-info">
          <h3 class="product-title">
            ${product.name}
          </h3>

          <p class="product-price">${product.price}</p>
        </div>

      <div class="product-rating">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
      </div>

      <button class="add-cart-btn">
        <i class="fa-solid fa-basket-shopping cart-icon"></i>
        Add To Cart
      </button>

    </div>
  `).join("");
}



const slider = document.getElementById("slider");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

const cardWidth = document.querySelector("#cardd").offsetWidth + 20;

rightBtn.addEventListener("click", () => {
  slider.scrollBy({
    left: cardWidth,
    behavior: "smooth",
  });
});

leftBtn.addEventListener("click", () => {
  slider.scrollBy({
    left: -cardWidth,
    behavior: "smooth",
  });
});

const leftSellingArrow = document.getElementById("leftSellingArrow");
const rightSellingArrow = document.getElementById("rightSellingArrow");
const slider1 = document.querySelector("#slider-container");

const productcard1 = document.querySelector("#slider-card").offsetWidth + 20;

rightSellingArrow.addEventListener("click", () => {
  slider1.scrollBy({
    left: productcard1,
    behavior: "smooth",
  });
});

leftSellingArrow.addEventListener("click", () => {
  slider1.scrollBy({
    left: -productcard1,
    behavior: "smooth",
  });
});

const leftSellingArrow1 = document.getElementById("leftSellingArrow1");
const rightSellingArrow1 = document.getElementById("rightSellingArrow1");
const slider11 = document.querySelector("#slider-container1");

const productcard11 = document.querySelector("#slider-card1").offsetWidth + 10;
console.log(productcard11);

rightSellingArrow1.addEventListener("click", () => {
  slider11.scrollBy({
    left: productcard11,
    behavior: "smooth",
  });
});

leftSellingArrow1.addEventListener("click", () => {
  slider11.scrollBy({
    left: -productcard11,
    behavior: "smooth",
  });
});

const trandingCards = document.getElementById("tranding-container")
const TrandingProducts = products.filter(product=>{
  return product.trendingProduct === true
})
loadTrandingProducts(TrandingProducts)
console.log(TrandingProducts)
function loadTrandingProducts(productList){
  trandingCards.innerHTML = productList.map(product => `
    <div class="product-card"
         id="tranding-card"
         onclick="openProduct('${product.id}')">

            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>

            <div class="product-info">
                <h3 class="product-title">
                    ${product.name} <br>
                    <span class="product-subtitle">
                        (${product.ingredient})
                    </span>
                </h3>

                <p class="product-price">
                    ${product.price}
                </p>
            </div>

            <div class="product-rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
            </div>

            <button class="add-cart-btn">
                <i class="fa-solid fa-basket-shopping cart-icon"></i>
                Add To Cart
            </button>

    </div>
`).join("");
}

const trandingLeftArrow = document.getElementById("trandingLeftArrow");
const trandingRightArrow = document.getElementById("trandingRightArrow");
const trandingSlider = document.querySelector("#tranding-container");

const trandingCard = document.querySelector("#tranding-card").offsetWidth + 10;

trandingRightArrow.addEventListener("click", () => {
  trandingSlider.scrollBy({
    left: trandingCard,
    behavior: "smooth",
  });
});

trandingLeftArrow.addEventListener("click", () => {
  trandingSlider.scrollBy({
    left: -trandingCard,
    behavior: "smooth",
  });
});



// function openProduct(id){
//   window.location.href=`ProductDetails.html?id=${id}`
// }