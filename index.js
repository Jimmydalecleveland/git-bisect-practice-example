const plays = require('./plays.json')
const invoices = require('./invoices.json')
const invoicePrinter = require('./invoicePrinter')


const firstInvoice = invoicePrinter(invoices[0], plays)
console.dir(firstInvoice, { depth: 10 })