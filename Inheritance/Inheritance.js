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

}

let intBuilder = new IntBuilder(10);
intBuilder
    .plus(2, 3, 2)
    .minus(1, 2)
    .multiply(2)
    .divide(4)
    .mod(5)


console.log(intBuilder.get())

