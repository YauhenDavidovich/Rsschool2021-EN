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

    multiply(value) {
        return this.value *= value;
    }

}

