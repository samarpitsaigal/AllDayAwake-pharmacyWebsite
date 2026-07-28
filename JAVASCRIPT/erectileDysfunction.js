// const products = [
//   {
//     image: "../images/gabapentin/gabatop-100mg-300x250.webp",
//     title: "Gabapentin 100 MG",
//     price: "$40.00 - $410.00",
//   },
//   {
//     image: "../images/gabapentin/gabatop-300-300x250.webp",
//     title: "Gabapentin 300 MG (For Human)",
//     price: "$45.00 - $384.00",
//   },
//   {
//     image: "../images/gabapentin/Gabatop-400-300x250.webp",
//     title: "Gabapentin 400 MG",
//     price: "$78.00 - $717.60",
//   },
//   {
//     image: "../images/gabapentin/Gabatop-600-300x250.webp",
//     title: "Gabapentin 600 MG",
//     price: "$50.00 - $599.00",
//   },
//   {
//     image: "../images/gabapentin/gabatop-800-300x250.webp",
//     title: "Gabapentin 800 MG",
//     price: "$70.00 - $625.00",
//   },
// ];

const sliderContainer = document.getElementById("modafinil-container");

const erectileDysfunction = products.filter(product=>{
  return product.category === "gabapentin"
})

loadProducts(erectileDysfunction)

function loadProducts(productList){
  sliderContainer.innerHTML = productList.map((product) => {
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


