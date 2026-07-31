const tbody = document.getElementById("cart-body");

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
                    id="qty-${index}"
                    value="${item.quantity}"
                    onchange="updateQuantity(${index}, this.value)"
                >
            </td>

            <td id="subtotal-${index}">$${total.toFixed(2)}</td>
            
        </tr>
        
        `
        
        ;

    }).join("");

    updateGrandTotal();

}

function updateGrandTotal() {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const finalTotal = cart.reduce(
        (sum, item) => sum + Number(item.price.replace("$", "")) * Number(item.quantity),
        0
    );

    document.getElementById("grand-total").textContent =
        "$" + finalTotal.toFixed(2);

}

function updateQuantity(index, qty) {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const quantity = Math.max(1, Math.floor(Number(qty)) || 1);

    cart[index].quantity = quantity;

    localStorage.setItem("cart", JSON.stringify(cart));

    const input = document.getElementById(`qty-${index}`);
    if (input) input.value = quantity;

    const subtotal = document.getElementById(`subtotal-${index}`);
    if (subtotal) {
        subtotal.textContent =
            "$" + (Number(cart[index].price.replace("$", "")) * quantity).toFixed(2);
    }

    updateGrandTotal();

}

function removeItem(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    renderCart();

}

renderCart();
