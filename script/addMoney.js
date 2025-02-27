const addMoney = document.getElementById("addMoney-btn").addEventListener("click", function(event){
    event.preventDefault();

    const currentAmount = document.getElementById("currentAmount").innerText;
    const accountNumber = document.getElementById("an-am").value;
    const typeAddAmount = document.getElementById("an-tam").value;
    const pinNumber = document.getElementById("an-pin-number").value;

    const convertCurrentAmount = parseFloat(currentAmount);
    const convertTypeAmount = parseFloat(typeAddAmount);

    if(accountNumber.length === 11 && typeAddAmount && pinNumber){
        const totalAmount = convertCurrentAmount + convertTypeAmount;
        document.getElementById("currentAmount").innerText = totalAmount;
        alert('Balance Added')
    }
    else{
        alert('Enter valid Information');
    }
    
})