// dot notation
const foo = {
    color: "red",
        getColor: function(){
            console.log(
                this.color
            )
        }
    };
console.log(foo.color);

// bracket notation
const foo = {
    color: "red",
        getColor: function(){
            console.log(
                this.color
            )
        }
    };
console.log(foo['color']);