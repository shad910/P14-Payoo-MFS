const cashOut = document.getElementById("cashOut-btn").addEventListener("click", function(event){
    event.preventDefault();

    const currentAmount = document.getElementById("currentAmount").innerText;
    const agentNumber = document.getElementById("co-agent-number").value;
    const typeOutAmount = document.getElementById("co-amount").value;
    const pinNumber = document.getElementById("co-pin-number").value;

    const convertCurrentAmount = parseFloat(currentAmount);
    const convertTypeAmount = parseFloat(typeOutAmount);

    if(agentNumber.length === 11 && typeOutAmount && pinNumber){
        const totalAmount = convertCurrentAmount - convertTypeAmount;
        document.getElementById("currentAmount").innerText = totalAmount;
        alert(typeOutAmount+' withdraw successful.')
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
                <p class="font-semibold">Agent Number: ${agentNumber}</p>
                <p class="font-medium">Cash Out Amount: ${typeOutAmount}</p>
            </div>

        `
        container.appendChild(div);
})