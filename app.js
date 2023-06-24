

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar
}
console.log(fromEuroToDollar(3.5))

const fromDollarToYen = function(valueInDollar){
    let valueInEuro = valueInDollar/1.2 ;
    let valueInYen = valueInEuro * 127.9;
    return valueInYen
}

console.log(fromDollarToYen(3.5))

const fromYenToPound = function(valueInYen){
    let valueInEuro = valueInYen/127.9;
    let valueInPound = valueInEuro * 0.8;
    return valueInPound
}

console.log(fromYenToPound(1000))

const sum = (a,b) => {
    return a+b
}

console.log(sum(7,3))


module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};