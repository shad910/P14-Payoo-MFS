const transferMoney = document.getElementById("transfer-btn").addEventListener("click", function(event){
    event.preventDefault();

    const currentAmount = document.getElementById("currentAmount").innerText;
    const accountNumber = document.getElementById("tm-account-number").value;
    const typeTransferAmount = document.getElementById("tm-amount").value;
    const pinNumber = document.getElementById("tm-pin-number").value;

    const convertCurrentAmount = parseFloat(currentAmount);
    const convertTypeAmount = parseFloat(typeTransferAmount);

    if(accountNumber.length === 11 && typeTransferAmount && pinNumber){
        const totalAmount = convertCurrentAmount - convertTypeAmount;
        document.getElementById("currentAmount").innerText = totalAmount;
        alert(typeTransferAmount+' transfer successful.')
    }
    else{
        alert('Enter valid Information');
    }

    const container = document.getElementById("container");
        const div = document.createElement("div");
        div.classList.add("bg-white", "px-5", "py-2", "border", "rounded", "flex", "items-center", "gap-5", "mb-2")
        div.innerHTML = `
            <div class="p-4 rounded-full bg-gray-300">
                <img class="w-6" src="../images/wallet1.png">
            </div>
            <div class="space-y-1 text-sm">
                <p class="font-semibold">Account Number: ${accountNumber}</p>
                <p class="font-medium">Transfer Amount: ${typeTransferAmount}</p>
            </div>

        `
        container.appendChild(div);
})