function calculatePrices() {
    let origin = document.getElementById('select_origin').value
    let destiny = document.getElementById('select_destiny').value
    let duration = parseFloat(document.getElementById('input_duration').value)
    let plan = parseFloat(document.getElementById('select_plan').value)

    const prices = new Calculator(origin, destiny, duration, plan).calculatePrices()

    document.getElementById('input_price_with_plan').value = 'R$ ' + prices.priceWithPlan.toFixed(2)
    document.getElementById('input_price_without_plan').value = 'R$ ' + prices.priceWithoutPlan.toFixed(2)
}