// ===== RAVEN SHOPPING CART =====

const addToCartButton = document.querySelector(".buttons button:first-child");

if (addToCartButton) {

    addToCartButton.addEventListener("click", function () {

        const productName =
            document.querySelector(".product-info h2")?.textContent.trim()
            || "Classic Hoodie";

        const priceText =
            document.querySelector(".product-info h3")?.textContent.trim()
            || "$0.00";

        const price = parseFloat(priceText.replace("$", ""));

        const selects = document.querySelectorAll(".product-info select");

        const size = selects[0]?.value || "M";
        const color = selects[1]?.value || "Black";

        const quantityInput =
            document.querySelector('.product-info input[type="number"]');

        const quantity = parseInt(quantityInput?.value || "1");

        const image =
            document.querySelector(".product-image img")?.src || "";

        const product = {
            name: productName,
            price: price,
            size: size,
            color: color,
            quantity: quantity,
            image: image
        };

        let cart = JSON.parse(localStorage.getItem("ravenCart")) || [];

        cart.push(product);

        localStorage.setItem("ravenCart", JSON.stringify(cart));

        alert(productName + " has been added to your cart!");

    });

}