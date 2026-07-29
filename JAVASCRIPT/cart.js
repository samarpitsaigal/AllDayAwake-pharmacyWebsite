const tbody = document.getElementById("cart-body");
const grandTotal = document.getElementById("grand-total");

function renderCart() {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    let finalTotal = 0;

    tbody.innerHTML = cart.map((item, index) => {

        const total = Number(item.price.replace("$", "")) * Number(item.quantity);

        // Har product ka total Grand Total me add hoga
        finalTotal += total;

        return `
        <tr>

            <td><i class="fa-solid fa-xmark cross" onclick="removeItem(${index})"></i></td>
            <td><img src="${item.image}" width="80"></td>

            <td>${item.name}</td>


            <td>${item.price}</td>

            <td>
                <input
                    type="number"
                    min="1"
                    value="${item.quantity}"
                    onchange="updateQuantity(${index}, this.value)"
                >
            </td>

            <td>$${total.toFixed(2)}</td>
            
        </tr>
        
        `
        
        ;

    }).join("");

    // Sab products ka total
    document.getElementById("grand-total").textContent =
        "$" + finalTotal.toFixed(2);

}

renderCart();


function updateQuantity(index, qty) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart[index].quantity = Number(qty);

    localStorage.setItem("cart", JSON.stringify(cart));

    renderCart();

}

renderCart();
function removeItem(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    renderCart();

}