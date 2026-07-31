const params = new URLSearchParams(window.location.search);

const category = params.get("category");
console.log(category)

document.getElementById("category-title").textContent = category;
document.getElementById("category-title1").textContent = category;

const filteredProducts = products.filter(product => {
    return product.category === category;
});

const container = document.getElementById("products-container");

filteredProducts.forEach(item => {

    container.innerHTML += `
        <div class="modafinil-card" onclick="openProduct('${item.id}')">

            <div class="modafinil-image">
                <img src="${item.image}">
            </div>

            <div class="modafinil-info">
                <h3>${item.name}</h3>
                <p>${item.price}</p>
            </div>
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

});

console.log("here: ",products)
console.log("here: ",filteredProducts)
function openProduct(id){
    window.location.href=`ProductDetails.html?id=${id}`;
}
