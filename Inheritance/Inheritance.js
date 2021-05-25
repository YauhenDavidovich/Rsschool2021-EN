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
        return Math.floor(Math.random() * (to - from) + from);
    }

}

function StringBuilder(value = '') {
    baseBuilder.call(this, value)
}


StringBuilder.prototype = Object.create(baseBuilder.prototype);
StringBuilder.prototype.constructor = StringBuilder;

StringBuilder.prototype.plus = function (...str) {
    this.value += str.join("")
    return this
}

StringBuilder.prototype.minus = function (n) {
    this.value = this.value.substring(0, this.value.length - n)
    return this
}

StringBuilder.prototype.minus = function (n) {
    this.value = this.value.substring(0, this.value.length - n)
    return this
}

StringBuilder.prototype.multiply = function (int) {
    const repeatedString = this.value;
    while (int > 1) {
        this.value += repeatedString;
        int--;
    }
    return this
}

StringBuilder.prototype.divide = function (n) {
    const divider = Math.floor(this.value.length / n)
    this.value = this.value.slice(0, divider)
    return this
}

StringBuilder.prototype.remove = function (str) {
    this.value = this.value.split(str).join('')
    return this
}

StringBuilder.prototype.sub = function (from, n) {
    this.value = this.value.slice(from, from + n);
    return this
}


