console.log("NavBar&Footer.js Loaded");

function updateCartCount() {
  const cartItem = document.getElementById("cart-item");
  if (!cartItem) return;
  const count = JSON.parse(localStorage.getItem("cart")) || [];
  cartItem.textContent = count.length;
}

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

    const input = document.getElementById("search-input-items");
    const resultBox = document.getElementById("search-results");
    //console.log(document.getElementById("search-input-items"));
    // console.log(input);
    // console.log(products);
    input.addEventListener("input", function () {
      console.log(this.value);

      const value = this.value.toLowerCase().trim();
      if (value === "") {
        resultBox.style.display = "none";
        resultBox.innerHTML = "";
        return;
      }

      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(value),
      );

      resultBox.innerHTML = filtered
        .map(
          (product) => `

      <div class="search-item"
           onclick="openProduct('${product.id}')">

          <img src="${product.image}">

          <p>${product.name}</p>

      </div>

  `,
        )
        .join("");

      resultBox.style.display = filtered.length ? "block" : "none";
    });

    document.addEventListener("click", function (e) {
      if (!document.querySelector(".search-input").contains(e.target)) {
        resultBox.style.display = "none";
      }
    });

    updateCartCount();
  })
  .catch((err) => console.error("NavBar fetch failed:", err));

window.addEventListener("storage", updateCartCount);

fetch("../Components/Footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });

function openProduct(id) {
  window.location.href = `ProductDetails.html?id=${id}`;
}
