/* 
        document.getElementByID('id-to-select')
        return Type: element/group of elements or markup

        document.getElementByClassName('test')
        return Type: HTML collection

        document.getElementByTagName('img')
        return Type: HTML collection

        document.querySelector('.test')
        returns: element/group of elements markup

        document.querySelectorAl('.test')
        returns: Nodelist

*/

//pick out the login button

/*
console.log(document.getElementById('weight'))
console.log(document.getElementsByClassName('test'))
console.log(document.getElementsByTagName('img'))
console.log(document.querySelector('.test'))
console.log(document.querySelectorAll('.test'))
console.log(document.getElementsByClassName('site-nav test'))

console.log(document.querySelector('button'))
console.log(document.querySelector('label'))
console.log(document.getElementsByClassName('shipping-calculator test'))
*/

const calculateButton = document.querySelector('label')
const shippingWeight = document.querySelector('input')
const shippingRate = 10
const shippingRateDisplay = document.querySelector('.shipping-rate')
/* 
    console.log(shippingRateDisplay)
    console.log(shippingWeight)
    console.log(calculateButton)
*/

/*
    Events
    element.addEvenListener(eventType, function(){
        ///code will go here
    })
*/
calculateButton.addEventListener('click', function(){
    /* 
     Reads in the user input
     Data type of the text field is a string
     String number boolean t/f
     "string +" will concatenate strings together
     Numbers * + - / these are arithmetic operaters
     typeof() will show you what type the field is
    */
    let weight = shippingWeight.value;
    weight = Number(weight)
    let rate = weight * shippingRate
    shippingRateDisplay.textContent = '$' + rate + '.00';
    shippingRateDisplay.style.fontSize = '3rem'
})


console.log(document.querySelector('input'))

let pickMe = document.querySelector('.pick-me')
console.log(pickMe)



