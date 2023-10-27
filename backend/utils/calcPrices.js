function addDecimals(num) {
  return (Math.round(num * 100) / 100).toFixed(2)
}

export function calcPrices(orderItems) {
  // Calculate the items price in whole number (cents) to avoid issues w/ floating point number calculations
  const itemsPrice = orderItems.reduce(
    (acc, item) => acc + (item.price * 100 * item.qty) / 100, 0
  )

  // Calculate the shipping price
  const shippingPrice = itemsPrice > 100 ? 0 : 10

  // Calculate the tax price
  const taxPrice = 0.21 * itemsPrice

  // Calculate the total price
  const totalPrice = itemsPrice + shippingPrice + taxPrice

  // Return prices as strings fixed to 2 decimal places
  return {
    itemsPrice: addDecimals(itemsPrice),
    shippingPrice: addDecimals(shippingPrice),
    taxPrice: addDecimals(taxPrice),
    totalPrice: addDecimals(totalPrice)
  }
}