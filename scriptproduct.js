document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");

    // Fetch data from API
    fetch("https://reqres.in/api/users")
        .then(response => response.json())
        .then(data => {
            // Check if data has 'data' property and it's an array
            if (data.hasOwnProperty("data") && Array.isArray(data.data)) {
                const users = data.data;

                // Take first 6 items from the data
                const products = users.slice(0, 6);

                // Iterate over products and create card for each
                products.forEach(product => {
                    const card = createProductCard(product);
                    productList.appendChild(card);
                });
            } else {
                console.error("Data received from API is not in the expected format:", data);
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});

function createProductCard(user) {
    const card = document.createElement("div");
    card.classList.add("card");

    const avatar = document.createElement("img");
    avatar.src = user.avatar;
    avatar.alt = user.first_name + " " + user.last_name;

    const name = document.createElement("h3");
    name.textContent = user.first_name + " " + user.last_name;

    const email = document.createElement("p");
    email.textContent = "Email: " + user.email;

    card.appendChild(avatar);
    card.appendChild(name);
    card.appendChild(email);

    return card;
}
