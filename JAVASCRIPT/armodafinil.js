
const sliderContainer = document.getElementById("armodafinil-container");

const armodafinilProducts = products.filter(
    product => product.category === "armodafinil"
);

loadProducts(armodafinilProducts);

function loadProducts(productList){

    sliderContainer.innerHTML = productList.map(product=>`

        <div class="modafinil-card" onclick="openProduct('${product.id}')">

            <div class="modafinil-image">
                <img src="${product.image}">
            </div>

            <div class="modafinil-info">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
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

    `).join("");

}

function openProduct(id){
    window.location.href=`ProductDetails.html?id=${id}`;
}


