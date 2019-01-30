function Calculator(num1,num2) {
    this.num1 = num1;
    this.num2 = num2;
}

Calculator.prototype.addition = this.num1 + this.num2;

Calculator.prototype.subtraction = function(){
    console.log(
        this.num1 - this.num2
    )
}
Calculator.prototype.division = function(){
    console.log(
        this.num1 / this.num2
    )
}
Calculator.prototype.multiplication = function(){
    console.log(
        this.num1 * this.num2
    )
}

const add = new Calculator(3,4);
console.log(add);