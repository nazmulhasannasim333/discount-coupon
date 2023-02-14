document.getElementById('show-input').addEventListener('click', function(){
    this.style.cursor = 'pointer'
    const inputField = document.getElementById('input-div')
    if(inputField.style.display === 'none'){
        inputField.removeAttribute('style');
    }else{
        inputField.style.display = 'none'
    }
});


document.getElementById('input-btn').addEventListener('click', function(){
    let inputFieldCall = getInputFieldValueById('input-field')

    const elementValueCall = getItemElementValueById('item-price');

    let itemCalculate = (elementValueCall / 100) * 30;
    let itemDiscounPrice = elementValueCall - itemCalculate;
    let itemDeliverFee = getItemElementValueById('item-delivery-fee');
    let itemTotalPayment = getItemElementValueById('item-tota-payment');
    let TotalPayment = getItemElementValueById('total-payment');
    let totalItemDiscountPrice = itemDiscounPrice + itemDeliverFee;
    let totalItemPrice = elementValueCall + itemDeliverFee;
    let errorMsg = document.getElementById('error_msg')

    if(inputFieldCall === 'DISC30'){
        setElementValueById('item-price', itemDiscounPrice);
        setElementValueById('item-tota-payment', totalItemDiscountPrice);
        setElementValueById('total-payment', totalItemDiscountPrice);
   }else{
        errorMsg.innerText = 'Please apply a valid coupon code'
        errorMsg.style.color = 'red'
        setElementValueById('item-tota-payment', totalItemPrice);
        setElementValueById('total-payment', totalItemPrice);
   }

})


document.getElementById('place-order-btn').addEventListener('click', function(){
    setTimeout(() => {
        window.location.href = 'order-success.html'
    }, 500);
})