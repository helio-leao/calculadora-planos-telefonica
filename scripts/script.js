function calculatePrices() {
    let origin = document.getElementById('select_origin').value
    let destiny = document.getElementById('select_destiny').value
    let duration = parseFloat(document.getElementById('input_duration').value)
    let plan = parseFloat(document.getElementById('select_plan').value)

    const prices = new Calculator(origin, destiny, duration, plan).calculatePrices()

    document.getElementById('input_price_with_plan').value = 'R$ ' + prices.priceWithPlan.toFixed(2)
    document.getElementById('input_price_without_plan').value = 'R$ ' + prices.priceWithoutPlan.toFixed(2)
}

function updateSelectDestiny() {
    clearSelectDestiny()

    let select_destiny = document.getElementById('select_destiny')
    let origin = document.getElementById('select_origin').value
    const destinies = Calculator.getDestinies(origin)

    for(const destiny of destinies) {
        let option = document.createElement('option')
        option.value = destiny
        option.innerHTML = destiny
        select_destiny.appendChild(option)
    }
}

function clearSelectDestiny() {
    let select_destiny = document.getElementById('select_destiny')

    for(let i = select_destiny.length; i >= 0; i--) {
        select_destiny.remove(i)
    }
}

updateSelectDestiny()