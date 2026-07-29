const orderItem = document.getElementById("order-item");

const cart = JSON.parse(localStorage.getItem("cart")) || [];


const total = cart.reduce((sum, item) => {
  return sum + Number(item.price.replace("$", "")) * Number(item.quantity);
}, 0);

console.log(total);

orderItem.innerHTML = cart.map(p => {
  return `
    <div class="order-container">
      <div class="order-image-price">
        <div>
          <img src="${p.image}" width="80">
        </div>
        <div class="order-productName-packSize">
          <p class="order-productName">${p.name}</p>
          <p class="packSize">${p.packSize}</p>
        </div>
      </div>
      <div>
        <p class="order-price">${p.price}</p>
      </div>
    </div>
    <hr>
  `;
}).join("");

const totalPrice = document.getElementById('total-price')
totalPrice.innerHTML = total


emailjs.init({
    publicKey: "iJgcwVeAgmiv679N5"
});

const form = document.getElementById("checkout-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_lht3psz",
        "template_sxyn56o",
        this
    ).then(() => {
        alert("Order Placed Successfully!");
        form.reset();
    }).catch((err) => {
        console.log(err);
    });
});



