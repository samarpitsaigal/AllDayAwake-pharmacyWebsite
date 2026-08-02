const params = new URLSearchParams(window.location.search);

const productId = params.get("id");

const item = products.find(product => product.id === productId);

if (item) {

    // Product Details
    document.getElementById("detail-img").src = item.image;
    document.getElementById("details-name").textContent = item.name;
    document.getElementById("details-price").textContent = item.price;
    document.getElementById("active-ingredient").textContent = item.ingredient;
    document.getElementById("manufacturer").textContent = item.manufacturer;
    document.getElementById("indication").textContent = item.indication;
    document.getElementById("strength").textContent = item.strength;
    document.getElementById("packaging").textContent = item.packaging;
    document.getElementById("delivery-time").textContent = item.deliveryTime;
    document.getElementById("category").textContent = item.category;
    
    const categoryLink = document.getElementById("category");
    categoryLink.textContent = item.category;
    // mcategory k text pe click kr k us category k page pe jana
    const categoryPages = {
        armodafinil: "armodafinil.html",
        modafinil: "Modafinil.html",
        painosoma: "painoSoma.html",
        gabapentin: "gabapentin.html",
        erectiledysfunction: "ErectileDysfunction.html",
        "erectile-dysfunction": "ErectileDysfunction.html",
        zopiclone: "Zopiclone.html",
        pain: "pain.html",
    };
    categoryLink.href = categoryPages[item.category]
        ? `../HTML/${categoryPages[item.category]}`
        : `../HTML/allcategorymedicine.html?category=${encodeURIComponent(item.category)}`;

    // Pricing Section
    document.getElementById("pricing-img").src = item.image;
    document.getElementById("pricing-title").textContent = item.name;

    // Description
    document.getElementById("product-description").innerHTML =
        productDescriptions[item.id];

    // Load Pricing Table
    loadPricing(item);

    // Load Alternative Medicines
    loadAlternatives(item);


}


// Pricing 

function loadPricing(item) {

    const tbody = document.getElementById("pricing-body");

    const pricing = productPricing[item.id];

    if (!pricing) {

        tbody.innerHTML = `
            <tr>
                <td colspan="5">No pricing available.</td>
            </tr>
        `;

        return;
    }

    tbody.innerHTML = pricing.map(price => `

        <tr>

            <td>${price.packSize}</td>

            <td>${price.price}</td>

            <td>${price.pricePerUnit}</td>

            <td>

                <select id="qty-${price.packSize}">

                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>

                </select>

            </td>

            <td>

                <button
                    class="cart-btn"
                    onclick="addToCart(
                        '${item.id}',
                        '${item.name}',
                        '${price.packSize}',
                        '${price.price}',
                        'qty-${price.packSize}',
                        '${item.image}'
                    )">

                    Add To Cart

                </button>

            </td>

        </tr>

    `).join("");

}



function addToCart(id, name, packSize, price, qtyId,image) {

    const quantity = document.getElementById(qtyId).value;

    const cartItem = {

        id: id,
        name: name,
        packSize: packSize,
        price: price,
        quantity: quantity,
        image:image

    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(cartItem);

    localStorage.setItem("cart", JSON.stringify(cart));

    window.location.href = "cart.html";

}



// Alternative Medicines 

function loadAlternatives(currentProduct) {

    const container = document.getElementById("alt-grid-container");

    const alternatives = products.filter(product =>
        product.category === currentProduct.category &&
        product.id !== currentProduct.id
    ).slice(0,4);
    console.log(alternatives)

    container.innerHTML = alternatives.map(product => `

        <div class="modafinil-card"
             onclick="window.location.href='ProductDetails.html?id=${product.id}'">

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
                <i class="fa-solid fa-basket-shopping cart-icon"></i>
                Add To Cart
            </button>

        </div>

    `).join("");

}


