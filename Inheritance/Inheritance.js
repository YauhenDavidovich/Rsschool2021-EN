function baseBuilder(value) {
    this.value = value
}

baseBuilder.prototype.get = function () {
    return this.value
}


class IntBuilder extends baseBuilder {
    constructor(value = 0) {
        super(value);
    }

    plus(...values) {
        for (let n of values) {
            this.value += n;
        }
        return this;
    }

    minus(...values) {
        for (let n of values) {
            this.value -= n;
        }
        return this;
    }

    multiply(n) {
        this.value *= n;
        return this
    }

    divide(n) {
        this.value /= n;
        return this
    }

    mod(n) {
        this.value %= n;
        return this
    }

    static random(from, to) {
        return Math.floor(Math.random() * (to -from) + from);
    }

}

function StringBuilder(value = '') {
    baseBuilder.call(this, value)
}



StringBuilder.prototype = Object.create(baseBuilder.prototype);
StringBuilder.prototype.constructor = StringBuilder;
StringBuilder.prototype.plus = function(...str) {
    this.value += str.join("")
    return this
}

StringBuilder.prototype.minus = function(n) {
    this.value = this.value.substring(0,this.value.length - n)
    return this
}



let strBuilder = new StringBuilder('Hello'); // 'Hello';
strBuilder
    .plus(' all', '!')
    .minus(4)

// let intBuilder = new IntBuilder(10);
// intBuilder
//     .plus(2, 3, 2)
//     .minus(1, 2)
//     .multiply(2)
//     .divide(4)
//     .mod(5)
//     .random(1,5)
//
//
//
console.log(strBuilder.get())

