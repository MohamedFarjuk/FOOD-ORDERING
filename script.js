function orderFood() {
    let name = document.getElementById("name").value;
    let foodItem = document.getElementById("food").value;
    let orderList = document.getElementById("orderList");

    if (name === "") {
        alert("Please enter your name!");
        return;
    }

    let listItem = document.createElement("li");
    listItem.textContent = `${name} ordered a ${foodItem}`;
    orderList.appendChild(listItem);

    alert("Order placed successfully! 🍽️");
}
