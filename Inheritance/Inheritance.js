function baseBuilder(value) {
    this.value = value
}

baseBuilder.prototype.get = function () { return this.value}


class IntBuilder extends baseBuilder {
    constructor(value = 0) {
        super(value);
    }
}
