function add(a, b) {
    sum = a + b
    console.log('Sum is:', sum)
    return sum
}

// https://www.sitepoint.com/understanding-module-exports-exports-node-js/
module.exports = {
    add: add
}

