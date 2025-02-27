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
})