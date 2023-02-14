function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId)
    const inputFieldValue = inputField.value;
    inputField.value = '';
    return inputFieldValue;
}

function getItemElementValueById(elementId){
    const itemPrice = document.getElementById(elementId);
    const itemPriceValueStr = itemPrice.innerText;
    const itemPriceValue = parseFloat(itemPriceValueStr)
    return itemPriceValue;
}

function setElementValueById(element, newValue){
    const newTextValue = document.getElementById(element);
    newTextValue.innerText = newValue;
}



