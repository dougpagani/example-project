const exlib = require('@dougpagani/example-library')

function add(a, b) {
    sum = a + b
    printout = exlib.padLeft(sum, 10)
    console.log('Sum is:', printout)
    return sum
}

// https://www.sitepoint.com/understanding-module-exports-exports-node-js/
module.exports = {
    add: add
}

