const {sum} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.2);
});

test("One dollar should be 106.583333 yens", function(){
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(3.5)).toBe(373.04166666666674);
});

test("One yen should be 0.00625489 pounds", function(){
    const {fromYenToPound} = require('./app.js')
    expect(fromYenToPound(1000)).toBe(6.254886630179828);
});