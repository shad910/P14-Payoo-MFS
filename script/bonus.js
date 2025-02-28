document.getElementById("bonus-btn").addEventListener("click", function(event) {
    event.preventDefault();

    const currentAmount = document.getElementById("currentAmount").innerText;
    const value = document.getElementById("bonus-coupon").value;

    const convertCurrentAmount = parseFloat(currentAmount);
    const conValue = parseFloat(value);

    if (conValue === 50) {
        const totalAmount = convertCurrentAmount + 50;
        document.getElementById("currentAmount").innerText = totalAmount;
        alert("You get " + 50 + " added successfully");
    }
    else if (conValue === 100) {
        const totalAmount = convertCurrentAmount + 100;
        document.getElementById("currentAmount").innerText = totalAmount;
        alert("You get " + 100 + " added successfully");
    }
    else if (conValue === 150) {
        const totalAmount = convertCurrentAmount + 150;
        document.getElementById("currentAmount").innerText = totalAmount;
        alert("You get " + 150 + " added successfully");
    }
    else if (conValue === 200) {
        const totalAmount = convertCurrentAmount + 200;
        document.getElementById("currentAmount").innerText = totalAmount;
        alert("You get " + 200 + " added successfully");
    }
    else {
        alert("Invalid coupon value!");
    }
});
