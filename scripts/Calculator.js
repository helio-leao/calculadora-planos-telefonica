class Calculator {

    static preDefinedPrices = [
        { origin: '011', destiny: '016', minutePrice: 1.9 },
        { origin: '016', destiny: '011', minutePrice: 2.9 },
        { origin: '011', destiny: '017', minutePrice: 1.7 },
        { origin: '017', destiny: '011', minutePrice: 2.7 },
        { origin: '011', destiny: '018', minutePrice: 0.9 },
        { origin: '018', destiny: '011', minutePrice: 1.9 }
    ]

    planPriceRate = 1.1
    

    constructor(origin, destiny, duration, plan) {
        this.origin = origin
        this.destiny = destiny
        this.duration = duration
        this.plan = plan
    }


    calculatePrices() {
        let priceWithPlan = 0
        let priceWithoutPlan = 0

        for (const preDefinedPrice of Calculator.preDefinedPrices) {
            if (preDefinedPrice.origin == this.origin
                && preDefinedPrice.destiny == this.destiny) {

                priceWithoutPlan = this.duration * preDefinedPrice.minutePrice

                if (this.duration > this.plan) {
                    priceWithPlan = (this.duration - this.plan) * preDefinedPrice.minutePrice * this.planPriceRate
                }

                break
            }
        }

        return { priceWithPlan, priceWithoutPlan }
    }

    static getDestinies(origin) {
        let destinies = []

        for (const preDefinedPrice of this.preDefinedPrices) {
            if(preDefinedPrice.origin == origin) {
                destinies = [...destinies, preDefinedPrice.destiny]
            }
        }

        return destinies
    }
}