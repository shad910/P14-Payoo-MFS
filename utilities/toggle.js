// 1
document.getElementById("addMoney-section").style.display = "none" ;
const addMoneyBox = document.getElementById("addMoney-box").addEventListener("click", function(){
    document.getElementById("addMoney-section").style.display = "block" ;
    document.getElementById("cashOut-section").style.display = "none" ;
    document.getElementById("transferMoney-section").style.display = "none" ;
    document.getElementById("getBonus-section").style.display = "none" ;
    document.getElementById("payBill-section").style.display = "none" ;
    document.getElementById("Payment-Section").style.display = "none" ;

});

// 2
document.getElementById("cashOut-section").style.display = "none" ;
const cashOutBox = document.getElementById("sendMoney-box").addEventListener("click", function(){
    document.getElementById("addMoney-section").style.display = "none" ;
    document.getElementById("cashOut-section").style.display = "block" ;
    document.getElementById("transferMoney-section").style.display = "none" ;
    document.getElementById("getBonus-section").style.display = "none" ;
    document.getElementById("payBill-section").style.display = "none" ;
    document.getElementById("Payment-Section").style.display = "none" ;
});

// 3
document.getElementById("transferMoney-section").style.display = "none" ;
const transferMoneyBox = document.getElementById("transferMoney-box").addEventListener("click", function(){
    document.getElementById("addMoney-section").style.display = "none" ;
    document.getElementById("cashOut-section").style.display = "none" ;
    document.getElementById("transferMoney-section").style.display = "block" ;
    document.getElementById("getBonus-section").style.display = "none" ;
    document.getElementById("payBill-section").style.display = "none" ;
    document.getElementById("Payment-Section").style.display = "none" ;
});

// 4
document.getElementById("getBonus-section").style.display = "none" ;
const getBonusBox = document.getElementById("getBonus-box").addEventListener("click", function(){
    document.getElementById("addMoney-section").style.display = "none" ;
    document.getElementById("cashOut-section").style.display = "none" ;
    document.getElementById("transferMoney-section").style.display = "none" ;
    document.getElementById("getBonus-section").style.display = "block" ;
    document.getElementById("payBill-section").style.display = "none" ;
    document.getElementById("Payment-Section").style.display = "none" ;
});

// 5
document.getElementById("payBill-section").style.display = "none" ;
const payBillBox = document.getElementById("payBill-box").addEventListener("click", function(){
    document.getElementById("addMoney-section").style.display = "none" ;
    document.getElementById("cashOut-section").style.display = "none" ;
    document.getElementById("transferMoney-section").style.display = "none" ;
    document.getElementById("getBonus-section").style.display = "none" ;
    document.getElementById("payBill-section").style.display = "block" ;
    document.getElementById("Payment-Section").style.display = "none" ;
});

// 6
document.getElementById("Payment-Section").style.display = "none" ;
const transactionsBox = document.getElementById("transactions-box").addEventListener("click", function(){
    document.getElementById("addMoney-section").style.display = "none" ;
    document.getElementById("cashOut-section").style.display = "none" ;
    document.getElementById("transferMoney-section").style.display = "none" ;
    document.getElementById("getBonus-section").style.display = "none" ;
    document.getElementById("payBill-section").style.display = "none" ;
    document.getElementById("Payment-Section").style.display = "block" ;
});
