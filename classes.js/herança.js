const _status = Symbol('status')
class EletronicDevice {
    constructor(name) {
        this.name = name 
        this[_status] = 0 // 0 means it's off. 1 means it's on.
    }

    turnOn() {
        if(this[_status] === 0) {
            this[_status] = 1
            console.log('Turning on...')
        }
    }

    turnOff() {
        if(this[_status] === 1) {
            this[_status] = 0
            console.log('Turning off...')
        }
    }

    get getStatus() {
        if(this[_status] === 1) {
            console.log('The device is on')
        } else {
            console.log('The device is off')
        }
    }

    // Método estático - não é passado por herança
    static checkDate() {
        const dateNow = new Date
        console.log(dateNow.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeStyle: "medium"
        }))
    }
}

EletronicDevice.checkDate()

const freezer = new EletronicDevice('Freezer')
freezer.getStatus
freezer.turnOn()
freezer.getStatus
freezer.turnOff()
freezer.getStatus
// freezer.checkDate() --> won't work

class Smartphone extends EletronicDevice {
    constructor(name, color) {
        super(name)
        this.color = color
    }
}

const iphone6s = new Smartphone('iPhone 6S', 'White')
console.log(iphone6s)
iphone6s.turnOn()