const plays = require('./plays.json')
const invoices = require('./invoices.json')
const invoicePrinter = require('./invoicePrinter')

test('prints an invoice', () => {
  const firstInvoice = invoicePrinter(invoices[0], plays)
  expect(firstInvoice).toMatchInlineSnapshot(`
    "Statement for BigCo
      Hamlet: $650.00 (55 seats)
      As You Like It: $580.00 (35 seats)
      Othello: $500.00 (40 seats)
    Amount owed is $1,730.00
    You earned 47 credits
    "
  `)
})
