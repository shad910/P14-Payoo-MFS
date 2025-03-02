const loginBTN = document.getElementById("login-btn").addEventListener("click", function(event){
    event.preventDefault();
    const accountNumber = document.getElementById("account-number").value;
    const pinNumber = document.getElementById("pin-number").value;

    const convertPinNumber = parseInt(pinNumber, 10);

    console.log(typeof accountNumber);
    console.log(typeof convertPinNumber);


    if( accountNumber.length === 11 ){
        if( pinNumber.length > 3 || pinNumber.length === 4 ){
            window.location.href='main.html';
        }
        else{
            alert('Enter valid password')
        }
    }
    else{
        alert('Enter valid number')
    }
})