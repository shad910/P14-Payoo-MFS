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
})